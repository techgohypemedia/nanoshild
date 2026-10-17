import { featuredVideos, projectVideos } from "@/lib/videos";

export default function ProjectVideos({ featured = false }: { featured?: boolean }) {
  const videos = featured ? featuredVideos : projectVideos;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <figure key={video.src} className="min-w-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={encodeURI(video.poster)}
            aria-label={video.title}
            className="aspect-[9/16] w-full rounded-xl bg-black object-contain shadow-lg"
          >
            <source src={encodeURI(video.src)} type="video/mp4" />
            Your browser does not support video playback. <a href={encodeURI(video.src)}>Open the video</a>.
          </video>
          <figcaption className="mt-4 text-base font-medium">{video.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
