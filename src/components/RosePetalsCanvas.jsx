import React, { useEffect, useRef } from 'react';

export default function RosePetalsCanvas({ active = true, density = 'medium' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;
    const count = isMobile ? 18 : density === 'high' ? 45 : 28;

    // Petal / Heart Particle Class
    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 0.8 + 0.4;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.5 - 0.25;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.type = Math.random() > 0.35 ? 'petal' : 'heart';
        this.color = Math.random() > 0.5 ? 'rgba(216, 75, 107,' : 'rgba(139, 10, 37,';
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) * 0.6 + this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        if (this.type === 'petal') {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size, -this.size, -this.size * 1.2, this.size * 0.8, 0, this.size * 1.4);
          ctx.bezierCurveTo(this.size * 1.2, this.size * 0.8, this.size, -this.size, 0, 0);
          ctx.fillStyle = `${this.color} ${this.opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(216, 75, 107, 0.4)';
          ctx.fill();
        } else {
          // Heart shape
          ctx.beginPath();
          const h = this.size * 0.7;
          ctx.moveTo(0, h / 4);
          ctx.quadraticCurveTo(0, 0, -h / 2, 0);
          ctx.quadraticCurveTo(-h, 0, -h, h / 2);
          ctx.quadraticCurveTo(-h, h, 0, h * 1.3);
          ctx.quadraticCurveTo(h, h, h, h / 2);
          ctx.quadraticCurveTo(h, 0, h / 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, h / 4);
          ctx.fillStyle = `rgba(244, 172, 183, ${this.opacity * 0.8})`;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles = Array.from({ length: count }, () => new Particle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000"
    />
  );
}
