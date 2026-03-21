import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">

      <div className="">

        {/* ✅ MOBILE TITLE ONLY */}
        <div className="block md:hidden px-4 pt-4">
          <h2 className="text-2xl font-bold tracking-wider text-[var(--text-color)]">
            EXPERIENCE
          </h2>
          <hr className="mt-2 border-2 border-[var(--border-color)]" />
        </div>

        {/* 🚀 BANNER IMAGE */}
        <div className="flex justify-center mt-4 md:mt-0">

          <div className="relative w-full max-w-6xl">

            <div className="border border-white/15 pt-0 p-[0px] bg-gradient-to-r from-purple-500/40 to-pink-500/40">

              <div className="overflow-hidden">
                <Image
                  src="/images/expe.png"
                  alt="Fresher Open to Work"
                  width={1400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}