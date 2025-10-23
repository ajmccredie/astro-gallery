import { useRef } from "react";
import { gsap } from "gsap";

export default function VideoDoorCard({ title, videoSrc, link }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Base-safe link for GitHub Pages (e.g., "/astro-gallery/")
  const base = import.meta.env.BASE_URL;
  const fullLink = `${base.replace(/\/$/, "")}/${String(link).replace(/^\//, "")}`;

  function go() {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || card.dataset.animating === "true") return;
    card.dataset.animating = "true";

    if (video) {
      video.currentTime = 0;
      video.playbackRate = 1.6;
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
      onComplete: () => setTimeout(() => (window.location.href = fullLink), 650),
    });
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  }

  return (
    <div
      ref={cardRef}
      onClick={go}
      className="door-card"
      data-animating="false"
    >

      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="
          absolute bottom-0 w-full text-center text-white py-2
          text-base font-semibold tracking-wide
          backdrop-blur-md bg-black/40
        "
      >
        {title}
      </div>
    </div>
  );
}
