import { useRef } from "react";
import { gsap } from "gsap";

export default function VideoDoorCard({ title, videoSrc, link }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const base = import.meta.env.BASE_URL; 
  const fullLink = `${base.replace(/\/$/, '')}/${link.replace(/^\//, '')}`;

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
        setTimeout(() => (window.location.href = fullLink), 700);
      },
    });
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ width: "220px", height: "330px" }}
      data-animating="false"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Glass Title Overlay */}
      <div className="absolute bottom-0 w-full text-center text-white py-2 text-lg font-semibold tracking-wide backdrop-blur-md bg-white/20 border-t border-white/30">
        {title}
      </div>
    </div>
  );
}
