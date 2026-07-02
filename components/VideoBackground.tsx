const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4";

type VideoBackgroundProps = {
  /** "hero" fades into the page below; "dense" keeps a uniform scrim for centered content. */
  overlay?: "hero" | "dense";
};

/**
 * Cinematic Earth-from-space background. A static gradient always sits
 * behind the video so reduced-motion users and slow connections see a
 * finished design instead of black.
 * TODO: self-host the mp4 under public/media/ before launch.
 */
export function VideoBackground({ overlay = "hero" }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 50% 110%, #ffffff 0%, #000000 55%, #000000 100%)",
        }}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        src={BG_VIDEO}
      />
      <div
        className={
          overlay === "hero"
            ? "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"
            : "absolute inset-0 bg-black/50"
        }
      />
    </div>
  );
}
