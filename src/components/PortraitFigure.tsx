interface PortraitFigureProps {
  src: string;
  alt: string;
  caption: string;
}

export function PortraitFigure({ src, alt, caption }: PortraitFigureProps) {
  return (
    <figure className="about-portrait">
      <div className="about-portrait__stage">
        {src ? (
          <video
            className="about-portrait__image"
            src={src}
            aria-label={alt}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="about-portrait__placeholder" aria-hidden="true">
            <span className="about-portrait__monogram">A</span>
            <span className="about-portrait__placeholder-label type-metadata">
              Anshul / Independent practice
            </span>
          </div>
        )}
        <span className="about-portrait__marker type-metadata" aria-hidden="true">ANSHUL — 01</span>
      </div>
      <figcaption className="about-portrait__caption type-metadata">{caption}</figcaption>
    </figure>
  );
}
