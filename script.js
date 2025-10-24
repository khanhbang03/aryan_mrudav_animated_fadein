// Calm animation of floating icons (soft pastel hobby symbols)
document.addEventListener('DOMContentLoaded',()=>{
  const canvas = document.getElementById('floatingIcons');
  const ctx = canvas.getContext('2d');
  let width, height;
  const icons = ['🎨','🎵','🌍','📚','💻','⚽','🌱'];
  const particles = [];

  function resize(){
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for(let i=0;i<30;i++){
    const icon = icons[Math.floor(Math.random()*icons.length)];
    particles.push({
      icon,
      x: Math.random()*width,
      y: Math.random()*height,
      size: 24 + Math.random()*16,
      speedY: 0.2 + Math.random()*0.5,
      speedX: (Math.random()-0.5)*0.3,
      opacity: 0.4 + Math.random()*0.5
    });
  }

  function draw(){
    ctx.clearRect(0,0,width,height);
    particles.forEach(p=>{
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.icon, p.x, p.y);
      p.y -= p.speedY;
      p.x += p.speedX;
      if(p.y < -30) p.y = height + 30;
      if(p.x > width+30) p.x = -30;
      if(p.x < -30) p.x = width+30;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
});
