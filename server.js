const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/generate', async (req, res) => {
  const { url, text } = req.body;

  // Temporäre Dateien
  const videoFile = 'temp.mp4';
  const outputFile = 'output.mp4';

  try {
    // Einfachste Version: Video aus URL downloaden (hier nur Demo)
    // In der Praxis: youtube-dl o.ä. benutzen
    await execPromise(`youtube-dl -o ${videoFile} ${url}`);

    // FFmpeg: Text-Overlay hinzufügen
    await execPromise(`ffmpeg -i ${videoFile} -vf "drawtext=text='${text}':fontcolor=white:fontsize=24:x=10:y=10" -c:a copy ${outputFile}`);

    // Datei senden
    res.sendFile(__dirname + '/' + outputFile, err => {
      // Aufräumen
      [videoFile, outputFile].forEach(f => fs.existsSync(f) && fs.unlinkSync(f));
    });

  } catch(err) {
    console.error(err);
    res.status(500).send('Fehler beim Erstellen des Videos');
  }
});

function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if(err) reject(err);
      else resolve(stdout);
    });
  });
}

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
