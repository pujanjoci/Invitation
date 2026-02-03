'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function IntroSequence() {
  const [showVideo, setShowVideo] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  // Preload video on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      const handleCanPlay = () => setVideoLoaded(true);
      video.addEventListener('canplaythrough', handleCanPlay);
      return () => video.removeEventListener('canplaythrough', handleCanPlay);
    }
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current && videoLoaded) {
      // Set playback speed to 0.8x
      videoRef.current.playbackRate = 0.8;
      videoRef.current.play().catch(err => console.error('Video play error:', err));
    }
  }, [showVideo, videoLoaded]);

  const handleClick = () => {
    if (!isClickable) return;
    setIsClickable(false);
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    // Redirect to home page after video ends
    router.push('/home');
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Preload video (hidden) */}
      <video
        ref={videoRef}
        src="/assets/intro-video.mp4"
        className="hidden"
        onEnded={handleVideoEnd}
        playsInline
        muted={false}
        preload="auto"
      />

      {!showVideo ? (
        // Image Display - Click anywhere to start
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src="/assets/Intro-image.png"
            alt="Introduction"
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        // Video Display
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <video
            src="/assets/intro-video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted={false}
          />
        </div>
      )}
    </div>
  );
}
