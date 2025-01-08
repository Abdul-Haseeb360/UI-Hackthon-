"use client"
import React from "react";
import { Container } from "../Components/Container";

function VideoCard() {
  return (
    <div>
      <Container>
      <div className="lg:h-[764px] container mx-auto w-auto">
        <div className="py-[112px] px-8 text-center">
          <video className="rounded-lg shadow-lg" height={540} controls loop autoPlay >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default VideoCard;


