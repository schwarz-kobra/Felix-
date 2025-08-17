const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // hier liegt deine alte Website

app.post('/api/generate', async (req, res) => {
  const { url, text } = req.body;

  const videoFile = 'temp.mp4';
  const outputFile = 'output.mp4';

  try {
    // 1. Video/Audio mit yt-dlp herunterladen
    await execPromise(`yt-dlp -f mp4 -o ${videoFile} "${url}"`);

    // 2. Mit ffmpeg Text einblenden
    await execPromise(`ffmpeg -i ${videoFile} -vf "drawtext=text='${text}':fontcolor=white:fontsize=24:x=10:y=10" -c:a copy ${outputFile}`);

    // 3. Datei zurücksenden
    res.download(outputFile, 'video.mp4', err => {
      // Aufräumen
      [videoFile, outputFile].forEach(f => fs.existsSync(f) && fs.unlinkSync(f));
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Fehler beim Erstellen des Videos');
  }
});

function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
}

app.listen(3000, () => console.log('✅ Server läuft auf http://localhost:3000'));
