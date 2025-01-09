"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null); // Reference for Locomotive container
  const pathname = usePathname(); // Get the current route path

  useEffect(() => {
    // Scroll to the top when the route changes
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Delay to allow Locomotive Scroll to reinitialize
    setTimeout(() => {
      const scroll = document.querySelector(".c-scroll");
      if (scroll) {
        scroll.dispatchEvent(new Event("resize"));
      }
    }, 300);
  }, [pathname]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true, // Enable smooth scrolling
        multiplier: 1.5, // Scroll speed multiplier
        class: "is-reveal", // Class for animated elements
      }}
      watch={[pathname]} // Reinitialize Locomotive when the path changes
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveProvider;
