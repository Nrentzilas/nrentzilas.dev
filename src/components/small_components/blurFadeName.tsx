import BlurFade from "@/components/ui/blur-fade";

export function BlurFadeTextName() {
  return (
    <section id="header" className="flex  flex-col items-center justify-center">
      <div className="flex flex-col items-start mt-10 md:mt-0 md:gap-1 text-left">
      <BlurFade delay={0.25} inView>
        <h2 className="font-bold tracking-tighter dark:text-primary-light text-4xl  xl:text-6xl/none">
         Hi, I'm <span className=" inline-block"  >Nrentzilas</span>{' '}
            <span className="hover:animate-wave cursor-pointer inline-block">👋</span>
        </h2>
      </BlurFade>


        <BlurFade delay={0.25 * 2} inView>
          <span className="text-pretty text-xl tracking-tighter dark:text-primary-light sm:text-3xl xl:text-4xl/none">
            A Full Stack Web Developer
          </span>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <span className="text-pretty text-xl tracking-tighter dark:text-[#b7b9bd] sm:text-3xl xl:text-xl/none">
            24 Years Old | Greece 🌐
          </span>
        </BlurFade>
      </div>
    </section>
  );
}