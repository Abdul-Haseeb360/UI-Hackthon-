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
  const scrollInstanceRef = useRef<any>(null); // Keep track of the scroll instance

  useEffect(() => {
    const initScroll = async () => {
      if (containerRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        // Destroy any existing scroll instance before creating a new one
        if (scrollInstanceRef.current) {
          scrollInstanceRef.current.destroy();
          scrollInstanceRef.current = null;
        }

        // Initialize Locomotive Scroll
        scrollInstanceRef.current = new LocomotiveScroll({
          el: containerRef.current as HTMLElement,
          smooth: true,
          smartphone: { smooth: true },
        });

        // Update height to avoid issues
        setTimeout(() => {
          scrollInstanceRef.current?.update();
        }, 100); // Allow for DOM rendering before updating
      }
    };

    initScroll();

    return () => {
      // Clean up scroll instance on unmount
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
        scrollInstanceRef.current = null;
      }
    };
  }, [pathname]); // Reinitialize on route change

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
