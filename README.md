<section id="songs">
  <h2>🎵 Songs erstellen</h2>
  <p>Gib den Link zu deinem Song ein (YouTube, Spotify, TikTok) und kreiere ein kleines Video mit Effekten:</p>
  <input type="text" id="songLink" placeholder="Song-Link hier eingeben" style="width: 80%; padding: 0.5rem;" />
  <button onclick="createVideo()" style="padding: 0.5rem 1rem; margin-left: 1rem;">Erstellen</button>
  
  <div id="videoPreview" style="margin-top: 1rem;">
    <canvas id="videoCanvas" width="640" height="360" style="border:1px solid #ccc;"></canvas>
  </div>
  <button id="downloadBtn" style="padding: 0.5rem 1rem; margin-top: 1rem;">Video herunterladen</button>
</section>

<script>
async function createVideo() {
  const link = document.getElementById('songLink').value;
  if (!link) return alert("Bitte einen Link eingeben!");
  
  const canvas = document.getElementById('videoCanvas');
  const ctx = canvas.getContext('2d');
  
  // Einfacher Flash-Effekt als Demo
  let frame = 0;
  const interval = setInterval(() => {
    ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    frame++;
    if(frame > 30) clearInterval(interval); // 30 Frames
  }, 100);

  // Download als Bild-Sequenz (nur Demo)
  document.getElementById('downloadBtn').onclick = () => {
    const linkEl = document.createElement('a');
    linkEl.href = canvas.toDataURL('image/png');
    linkEl.download = 'song_video.png';
    linkEl.click();
  }
}
</script>
