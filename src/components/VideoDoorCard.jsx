import { useRef } from "react";
import { gsap } from "gsap";
import { Astro } from "astro";

export default function VideoDoorCard({ title, videoSrc, link }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  function handleClick() {
    const card = cardRef.current;
    const video = videoRef.current;

    if (card.dataset.animating === "true") return;
    card.dataset.animating = "true";

    if (video) {
      video.currentTime = 0;
      video.playbackRate = 2;
      video.play();
    }

    gsap.to(card, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1000,
      duration: 0.9,
      ease: "power3.inOut",
      onComplete: () => {
        setTimeout(() => (window.location.href = link), 700);
      },
    });
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="door-card group cursor-pointer transition-transform duration-300 hover:scale-[1.04] hover:shadow-2xl"
      data-animating="false"
      style={{ width: "220px", height: "330px" }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className="door-video"
      ></video>

      {/* Glass title overlay */}
      <div className="absolute bottom-0 w-full text-center text-white py-2 text-lg font-semibold tracking-wide backdrop-blur-md bg-white/20 border-t border-white/30">
        {title}
      </div>
    </div>
  );
}
