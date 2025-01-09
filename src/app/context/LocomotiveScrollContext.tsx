"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollContext = createContext<any>(null);

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);

export const LocomotiveScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    if (containerRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
      });

      // Cleanup scroll on component unmount
      return () => {
        scrollRef.current?.destroy();
      };
    }
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.update();
      scrollRef.current.scrollTo(0, { duration: 0 }); // Reset to top
    }
  }, [pathname]);

  return (
    <LocomotiveScrollContext.Provider value={scrollRef.current}>
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  );
};
