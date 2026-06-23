import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const primaryRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [imageText, setImageText] = useState('');

  // Store current mouse coordinates and current follower coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile/tablet screen sizes (below 1024px)
    // or if the device does not support hover behaviors
    const checkIsDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return window.innerWidth >= 1024 && !isTouchDevice;
    };

    if (!checkIsDesktop()) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    const onMouseLeaveWindow = () => {
      if (primaryRef.current) primaryRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
    };

    const onMouseEnterWindow = () => {
      if (primaryRef.current) primaryRef.current.style.opacity = '1';
      if (followerRef.current) followerRef.current.style.opacity = '0.3';
    };

    // Tracking hove states globally
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = target.closest('button, a, [role="button"], input, textarea, select, .clickable');
      const isGalleryImage = target.closest('.portfolio-img');

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      if (isGalleryImage) {
        setIsImageHovered(true);
        const hoverLabel = target.getAttribute('data-hover-text') || 'VIEW';
        setImageText(hoverLabel);
      } else {
        setIsImageHovered(false);
        setImageText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    let animationId: number;

    const updatePosition = () => {
      const targetX = mouseCoords.current.x;
      const targetY = mouseCoords.current.y;

      // Direct DOM mutation for absolute maximum performance (120Hz friendly)
      if (primaryRef.current) {
        primaryRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Smooth lag effect: adjust follower position using interpolation
      const delay = 0.15; // 15% interpolation speed
      followerCoords.current.x += (targetX - followerCoords.current.x) * delay;
      followerCoords.current.y += (targetY - followerCoords.current.y) * delay;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerCoords.current.x}px, ${followerCoords.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot Cursor */}
      <div
        ref={primaryRef}
        id="custom-cursor-dot"
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2.5 h-2.5 bg-burgundy rounded-full pointer-events-none z-50 transition-opacity duration-300 shadow-[0_0_8px_rgba(122,31,43,0.8)]"
        style={{ opacity: 1, backfaceVisibility: 'hidden' }}
      />

      {/* Follower Circle Cursor */}
      <div
        ref={followerRef}
        id="custom-cursor-follower"
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center border border-burgundy/60 transition-all duration-300 ease-out"
        style={{
          width: isImageHovered ? '90px' : isHovered ? '50px' : '30px',
          height: isImageHovered ? '90px' : isHovered ? '50px' : '30px',
          marginLeft: isImageHovered ? '-45px' : isHovered ? '-25px' : '-15px',
          marginTop: isImageHovered ? '-45px' : isHovered ? '-25px' : '-15px',
          backgroundColor: isImageHovered ? 'rgba(122, 31, 43, 0.9)' : isHovered ? 'rgba(122, 31, 43, 0.08)' : 'transparent',
          borderColor: isImageHovered ? 'transparent' : '#7A1F2B',
          opacity: 0.8,
          backfaceVisibility: 'hidden'
        }}
      >
        {isImageHovered && (
          <span className="text-[10px] font-bold tracking-widest text-white animate-fade-in uppercase">
            {imageText}
          </span>
        )}
      </div>
    </>
  );
}
