"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";


interface ScrollProviderProps {
  children: React.ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    let scrollInstance: any;

    // Initialize Locomotive Scroll only in the browser
    if (containerRef.current) {
      const initScroll = async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        scrollInstance = new LocomotiveScroll({
          el: containerRef.current as HTMLElement, 
          smooth: true,
          smartphone: { smooth: true },
          // tablet: { smooth: true },
        });
      };

      initScroll();
    }

    return () => {
      // Clean up scroll instance on unmount
      if (scrollInstance) scrollInstance.destroy();
    };
  }, [pathname]); // Reinitialize on route change

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}