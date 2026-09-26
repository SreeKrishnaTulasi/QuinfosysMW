import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-white px-6 py-32 text-center text-black">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">404</p>
      <h1 className="mt-4 text-5xl font-medium tracking-tighter">Page not found.</h1>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
        Back to homepage
      </Link>
    </section>
  );
}
