import { useEffect } from 'react';

export function useCursor(curRef, ringRef) {
  useEffect(() => {
    const target = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let frame = 0;

    const move = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.22;
      ring.y += (target.y - ring.y) * 0.22;

      if (curRef.current) {
        curRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      document.documentElement.style.setProperty('--mouse-x', `${target.x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${target.y}px`);
      frame = window.requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', move, { passive: true });
    frame = window.requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', move);
      window.cancelAnimationFrame(frame);
    };
  }, [curRef, ringRef]);
}
