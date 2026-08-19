import Link from "next/link";


const platforms = [
  {
    id: 1,
    shortName: "EC",
    category: "Engineering & EPC",
    title: "UE Energy & Control",
    description:
      "Industrial automation, PLC, HMI, SCADA, BMS, solar, power-system and EPC engineering solutions.",
    linkText: "Explore company",
    href: "#",
  },
  {
    id: 2,
    shortName: "NX",
    category: "Next-generation platform",
    title: "NGX",
    description:
      "A digital innovation and professional-development platform connecting engineering learners, projects and industry opportunities.",
    linkText: "Explore NGX",
    href: "#",
  },
  {
    id: 3,
    shortName: "UP",
    category: "Technical knowledge",
    title: "UE Publication",
    description:
      "Engineering books, technical notes, guides and learning resources designed to support structured professional development.",
    linkText: "View publication platform",
    href: "#",
  },
  {
    id: 4,
    shortName: "UC",
    category: "Engineering community",
    title: "UE Club",
    description:
      "Membership-based training, mentoring, practical projects and long-term support for emerging and professional engineers.",
    linkText: "Explore UE Club",
    href: "#",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gray-100 blur-3xl"
        aria-hidden="true"
      />


      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-700">
            Engineering ecosystem
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            One mother company. Four
            <span className="block">connected platforms.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Ulterior Engineering leads a coordinated ecosystem for industrial
            engineering, professional learning, technical publication and
            engineering community development.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-300/40 sm:p-6 lg:p-8">
          <div className="grid overflow-hidden rounded-3xl bg-gray-950 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-700/50 bg-black px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />

                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-500">
                  Mother company
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ulterior Engineering
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                The group&apos;s central organization, aligning engineering
                services, technology development, training, publications and
                professional community initiatives under one strategic
                direction.
              </p>

              <Link
                href={'#'}
                className="mt-7 inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Visit Mother Company

                <span className="text-red-700" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-t border-gray-800 p-8 lg:border-l lg:border-t-0">
              <div
                className="absolute h-64 w-64 rounded-full border border-gray-700"
                aria-hidden="true"
              />

              <div
                className="absolute h-48 w-48 rounded-full border border-dashed border-red-700/70"
                aria-hidden="true"
              />

              <div
                className="absolute h-32 w-32 rounded-full bg-red-900/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-700 text-3xl font-black text-white shadow-2xl shadow-red-950/50">
                UE
              </div>

              <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded-xl bg-white px-3 py-3 text-xs font-black text-black shadow-lg">
                UEEC
              </div>

              <div className="absolute right-[12%] top-1/2 -translate-y-1/2 rounded-xl bg-white px-3 py-3 text-xs font-black text-black shadow-lg sm:right-[18%]">
                NGX
              </div>

              <div className="absolute bottom-9 left-1/2 -translate-x-1/2 rounded-xl bg-white px-3 py-3 text-xs font-black text-black shadow-lg">
                UEP
              </div>

              <div className="absolute left-[12%] top-1/2 -translate-y-1/2 rounded-xl bg-white px-3 py-3 text-xs font-black text-black shadow-lg sm:left-[18%]">
                CLUB
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {platforms.map((platform) => (
              <article
                key={platform.id}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-red-700" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-sm font-black text-red-700">
                  {platform.shortName}
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-red-700">
                  {platform.category}
                </p>

                <h3 className="mt-2 text-xl font-black text-black">
                  {platform.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {platform.description}
                </p>

                <Link
                  href={platform.href}
                  className="mt-auto flex items-center justify-between pt-6 text-sm font-extrabold text-red-700 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  aria-label={`${platform.linkText}: ${platform.title}`}
                >
                  {platform.linkText}

                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}