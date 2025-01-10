import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import ThemeToggle from "@/components/small_components/themeicon";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Theme",
      icon: <ThemeToggle />,
      href: "javascript:void(0)",
      ariaLabel: "Toggle Theme",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      ariaLabel: "Go to Home",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      ariaLabel: "View My Projects",
    },
    {
      title: "Free Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      ariaLabel: "Browse Components Used",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      ariaLabel: "View Changelog",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Nrentzilas_dev",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Visit My Twitter Profile",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Nrentzilas/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Visit My GitHub Profile",
    },
  ];

  return (
    <div className="hidden md:flex items-center justify-center fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
