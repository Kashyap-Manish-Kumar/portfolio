export default function Experience() {
  const experiences = [
    {
      period: "JUN 2026 — PRESENT",
      role: "Software Development Engineer — SDE Intern",
      company: "Mavens Intelligence India Pvt Ltd",
      location: "Vadodara, Gujarat, India",
      current: true,
    },
    {
      period: "AUG 2025 — OCT 2025",
      role: "Back End Developer Trainee",
      company: "byteXL TechEd Pvt. Ltd.",
      location: "Remote, India",
      current: false,
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-16">

        {/* ================= HEADER ================= */}
        <div className="mb-7 md:mb-9">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl title-font font-bold text-[var(--text-color)] tracking-wider">
            EXPERIENCE
          </h2>

          <hr className="mt-3 w-full border-2 border-[var(--border-color)]" />
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 md:mb-12">

          {/* Companies */}
          <div
            className="
              bg-[var(--primary-color)]
              border-2 border-[var(--border-color)]
              rounded-xl
              px-5 py-4
              text-white
              text-center
              card-shadow
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            <p className="text-2xl sm:text-3xl font-bold leading-none">
              2
            </p>

            <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] opacity-90">
              Companies
            </p>
          </div>

          {/* Experience */}
          <div
            className="
              bg-[var(--primary-color)]
              border-2 border-[var(--border-color)]
              rounded-xl
              px-5 py-4
              text-white
              text-center
              card-shadow
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            <p className="text-2xl sm:text-3xl font-bold leading-none">
              ~7 Months
            </p>

            <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] opacity-90">
              Experience
            </p>
          </div>

          {/* Development */}
          <div
            className="
              bg-[var(--primary-color)]
              border-2 border-[var(--border-color)]
              rounded-xl
              px-5 py-4
              text-white
              text-center
              card-shadow
              transition-transform duration-200
              hover:-translate-y-0.5
            "
          >
            <p className="text-2xl sm:text-3xl font-bold leading-none">
              Full-Stack
            </p>

            <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] opacity-90">
              Development
            </p>
          </div>

        </div>

        {/* ================= JOURNEY ================= */}
        <div className="relative">

         <div
  className="
    hidden md:block
    absolute
    left-[18px]
    top-[38px]
    bottom-0
    w-[3px]
    bg-[var(--border-color)]
  "
/>

          <div className="space-y-7 md:space-y-9">

            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
               <div
  className="
    hidden md:flex
    absolute
    left-[5px]
    top-[24px]
    w-[27px]
    h-[27px]
    rounded-full
    bg-black
    border-[3px]
    border-[var(--border-color)]
    items-center
    justify-center
    z-10
  "
>
  <div
    className="
      w-[11px]
      h-[11px]
      rounded-full
      bg-[var(--primary-color)]
      border-2
      border-white
    "
  />
</div>

                {/* Experience Card */}
                <div
                  className="
                    group
                    border-2 border-[var(--border-color)]
                    rounded-xl
                    overflow-hidden
                    card-shadow
                    bg-[var(--primary-color)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                  "
                >

                  <div className="px-5 sm:px-6 md:px-7 py-5 sm:py-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                      {/* ================= ROLE ================= */}
                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-2">

                          <h3
                            className="
                              text-lg
                              sm:text-xl
                              md:text-2xl
                              font-bold
                              leading-tight
                              text-white
                            "
                          >
                            {experience.role}
                          </h3>

                          {experience.current && (
                            <span
                              className="
                                shrink-0
                                px-2
                                py-1
                                text-[9px]
                                sm:text-[10px]
                                font-bold
                                tracking-wide
                                border-2
                                border-white
                                rounded-md
                                text-white
                              "
                            >
                              CURRENT
                            </span>
                          )}

                        </div>

                        <p
                          className="
                            mt-2
                            text-sm
                            sm:text-base
                            md:text-lg
                            font-semibold
                            text-white
                          "
                        >
                          {experience.company}
                        </p>

                        <p className="mt-1 text-xs sm:text-sm text-white/75">
                          {experience.location}
                        </p>

                      </div>

                      {/* ================= PERIOD ================= */}
                      <div className="shrink-0">

                        <span
                          className="
                            inline-flex
                            items-center
                            px-3
                            py-2
                            text-[10px]
                            sm:text-xs
                            md:text-sm
                            font-bold
                            tracking-wide
                            border-2
                            border-white
                            rounded-md
                            text-white
                            whitespace-nowrap
                          "
                        >
                          {experience.period}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </article>
            ))}
          {/* Beginning */}
<div className="relative md:pl-12">

  {/* Beginning Dot */}
  <div
    className="
      hidden md:flex
      absolute
      left-[5px]
      top-[8px]
      w-[27px]
      h-[27px]
      rounded-full
      bg-black
      border-[3px]
      border-[var(--border-color)]
      items-center
      justify-center
      z-10
    "
  >
    <div
      className="
        w-[9px]
        h-[9px]
        rounded-full
        bg-[var(--primary-color)]
      "
    />
  </div>

  {/* Beginning Label */}
  <div className="pt-2">
    <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--text-color)]">
      BEGINNING
    </p>

    <p className="mt-1 text-xs text-[var(--text-color)] opacity-60">
      Where my journey started
    </p>
  </div>

</div>
          </div>
        </div>

      </div>
    </section>
  );
}