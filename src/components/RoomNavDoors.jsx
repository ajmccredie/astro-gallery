import { useRef } from "react";
import { gsap } from "gsap";

export default function RoomNavDoors({ prevLink, prevTitle, prevVideo, homeVideo }) {
  const base = import.meta.env.BASE_URL;

  const doors = [
    {
      title: prevTitle || "← Previous Room",
      link: `${base.replace(/\/$/, "")}/${String(prevLink || "").replace(/^\//, "")}`,
      videoSrc: prevVideo,
    },
    {
      title: "↑ Return to Entrance",
      link: `${base}`,
      videoSrc: homeVideo,
    },
  ];

  function handleClick(e, door) {
    const card = e.currentTarget;
    const video = card.querySelector("video");
    if (card.dataset.animating === "true") return;
    card.dataset.animating = "true";

    if (video) {
      video.currentTime = 0;
      video.playbackRate = 1.7;
      video.play();
    }

    gsap.to(card, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1000,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => setTimeout(() => (window.location.href = door.link), 600),
    });
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12 mb-20">
      {doors.map((door) => (
        <div
          key={door.title}
          className="
            relative overflow-hidden rounded-lg bg-black cursor-pointer
            transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg
            w-[110px] h-[165px] sm:w-[140px] sm:h-[210px]
          "
          data-animating="false"
          onClick={(e) => handleClick(e, door)}
        >
          <video
            src={door.videoSrc}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          ></video>

          <div className="
            absolute bottom-0 w-full text-center text-white text-xs sm:text-sm font-semibold
            backdrop-blur-md bg-black/40 py-1 sm:py-2
          ">
            {door.title}
          </div>
        </div>
      ))}
    </div>
  );
}
