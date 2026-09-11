import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-surface">
      <p className="section-tag">Error 404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-ink">
        This page <span className="grad-text">doesn&apos;t exist</span>
      </h1>
      <p className="text-ink-muted max-w-md">
        The link may be broken, or the page may have been moved.
      </p>
      <Link
        href="/"
        className="grad-bg text-white font-semibold px-7 py-3.5 rounded-full text-sm"
      >
        Back to home
      </Link>
    </div>
  );
}
