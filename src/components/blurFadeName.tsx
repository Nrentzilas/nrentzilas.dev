import BlurFade from "@/components/ui/blur-fade";

 
export function BlurFadeTextName() {
  return (
    <section id="header" className="flex flex-col items-center   ">
  <div className="flex flex-col items-start text-left">
    <BlurFade delay={0.25} inView>
      <h2 className="text-3xl font-bold tracking-tighter dark:text-primary-light sm:text-5xl xl:text-6xl/none">
        Hi, I'm Nrentzilas 👋
      </h2>
    </BlurFade>
    <BlurFade delay={0.25 * 2} inView>
      <span className="text-pretty text-xl tracking-tighter dark:text-primary-light sm:text-3xl xl:text-4xl/none">
        A Full Stack Web Developer
      </span>
    </BlurFade>
    <BlurFade delay={0.25 * 4} inView>
      <span className="text-pretty text-xl tracking-tighter dark:text-[#b7b9bd] sm:text-3xl  xl:text-xl/none">
        Larissa | Greece 🌐
      </span>
    </BlurFade>
    
  </div>
  
</section>
    

  );
}