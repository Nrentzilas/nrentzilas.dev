import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "discord",
  "nextdotjs",
  "tailwindcss",
  "selenium",
  "astro",
  "php",
  "wordpress",
  "mysql",
  "python",
  "git",
  "github",
  "visualstudiocode",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center  overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
