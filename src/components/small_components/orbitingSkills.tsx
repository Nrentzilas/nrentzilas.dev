import OrbitingCircles from "@/components/ui/orbiting-circles";
import BlurFade from "@/components/ui/blur-fade";


export function OrbitingCirclesDemo() {
  return (
    <BlurFade delay={0.75} inView direction="left" offset={100}>
    <div className="relative flex h-[500px] min-w-[500px] mx-auto  flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-primary-light dark:bg-primary-dark transform scale-[0.65]">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-3xl font-semibold leading-none text-black dark:text-white">
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none "
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.astrojs />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.php />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.wordpress />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={15}
        delay={15}
        reverse
      >
        <Icons.javascript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={15}
        delay={5}
        reverse
      >
        <Icons.python />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none "
        radius={190}
        duration={15}
        delay={25}
        reverse
      >
        <Icons.selenium />
      </OrbitingCircles>
    </div>
    </BlurFade>
  );
}


const Icons = {
  nextjs: () => (
    <img
      src="/svg/nextjs.svg"
      alt="Next.js Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert "
    />
  ),

  astrojs: () => (
    <img
      src="/svg/astro.svg"
      alt="Astro Icon"
      className="max-w-[50px] max-h-[50px] filter contrast-200 brightness-0 dark:invert dark:brightness-0 dark:contrast-100"
    />
  ),
  php: () => (
    <img
      src="/svg/php.svg"
      alt="PHP Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert "
    />
  ),
  wordpress: () => (
    <img
      src="/svg/wordpress.svg"
      alt="WordPress Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert "
    />
  ),
  javascript: () => (
    <img
      src="/svg/js.svg"
      alt="JavaScript Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert"
    />
  ),
  python: () => (
    <img
      src="/svg/python.svg"
      alt="Python Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert"
    />
  ),
  selenium: () => (
    <img
      src="/svg/selenium.svg"
      alt="Selenium Icon"
      className="max-w-[50px] max-h-[50px] filter dark:invert"
    />
  ),
};

