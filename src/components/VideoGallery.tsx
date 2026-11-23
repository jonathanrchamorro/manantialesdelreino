"use client";

import { useState } from "react";
import type { Video } from "@/data/videos";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function VideoGallery({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);

  const select = (video: Video) => {
    setCurrent(video);
    setPlaying(true);
    document.getElementById("video-player")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="video-layout">
      <div className="video-main">
        <div className="video-frame" id="video-player">
          {playing ? (
            <iframe
              key={current.id}
              src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Reproducir: ${current.title}`}>
              <img src={thumb(current.id)} alt="" />
              <span className="play-badge" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
            </button>
          )}
        </div>
        <h3 className="video-title">{current.title}</h3>
        <p className="video-date">{formatDate(current.date)}</p>
      </div>

      <ul className="video-list" aria-label="Más enseñanzas">
        {videos.map((video) => {
          const active = video.id === current.id;
          return (
            <li key={video.id}>
              <button
                type="button"
                className={`video-item${active ? " is-active" : ""}`}
                onClick={() => select(video)}
                aria-current={active ? "true" : undefined}
              >
                <img src={thumb(video.id)} alt="" loading="lazy" />
                <span>
                  <strong>{video.title}</strong>
                  <small>{formatDate(video.date)}</small>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
