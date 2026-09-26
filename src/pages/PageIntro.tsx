type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-medium tracking-tighter md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
