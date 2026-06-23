import { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      swaySpeed: number;
      swayAmount: number;
      swayOffset: number;
      opacity: number;
      glow: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 30 : 70; // High count for full immersive starfield / dustfield coverage
      
      for (let i = 0; i < density; i++) {
        // Distribute initially throughout viewport, but prioritize top-origin flow
        const initialY = Math.random() * canvas.height;
        const colorPalette = ['#7A1F2B', '#B83E50', '#5C1520', '#3F0E14'];
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        particles.push({
          x: Math.random() * canvas.width,
          y: initialY,
          size: Math.random() * 3 + 1, // 1px - 4px (refined elegant size)
          speedY: Math.random() * 0.35 + 0.15, // Smooth slow downward crawl
          swaySpeed: Math.random() * 0.015 + 0.003,
          swayAmount: Math.random() * 20 + 5,
          swayOffset: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.45 + 0.15, // Glimmering opacities
          glow: Math.random() * 8 + 4, // Deep luxurious ambient blur
          color: randomColor
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // update motion
        p.y += p.speedY;
        p.swayOffset += p.swaySpeed;
        const currentX = p.x + Math.sin(p.swayOffset) * p.swayAmount;

        // Reset to top when crossing bottom edge - enforcing continuous top-origin flow
        if (p.y > canvas.height) {
          p.y = -20; // reset above viewport
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.45 + 0.15;
          p.speedY = Math.random() * 0.35 + 0.15;
        }

        ctx.beginPath();
        // create radial glow for beautiful Burgundy glowing dust elements
        const gradient = ctx.createRadialGradient(
          currentX, p.y, 0,
          currentX, p.y, p.size + p.glow
        );
        gradient.addColorStop(0, p.color);
        // Soft outer fade out
        gradient.addColorStop(0.2, `rgba(122, 31, 43, ${p.opacity})`);
        gradient.addColorStop(0.6, `rgba(122, 31, 43, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(122, 31, 43, 0)');

        ctx.fillStyle = gradient;
        ctx.arc(currentX, p.y, p.size + p.glow, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="particle-bg"
      style={{ mixBlendMode: 'screen', opacity: 0.85, zIndex: 0 }}
    />
  );
}
