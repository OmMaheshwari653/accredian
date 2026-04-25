"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

const Nav = () => {
  const [activeHash, setActiveHash] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavOffset = () => {
    const nav = document.querySelector("nav");
    return (nav?.clientHeight ?? 96) + 16;
  };

  const navigateToSection = (href: string, closeMobileMenu = false) => {
    const target = document.querySelector(href) as HTMLElement | null;

    if (!target) {
      return;
    }

    const navOffset = getNavOffset();
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
    setActiveHash(href);

    if (closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href) as HTMLElement | null,
      }))
      .filter((item) => item.el !== null) as Array<{
      href: string;
      el: HTMLElement;
    }>;

    const updateActiveByPosition = () => {
      const navOffset = getNavOffset();
      const marker = navOffset + 24;
      let currentHash = sections[0]?.href ?? "#home";

      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= marker) {
          currentHash = section.href;
        }
      }

      setActiveHash((prev) => (prev === currentHash ? prev : currentHash));
    };

    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveHash(hash);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = `#${visible[0].target.id}`;
          setActiveHash((prev) => (prev === id ? prev : id));
        } else {
          updateActiveByPosition();
        }
      },
      {
        root: null,
        rootMargin: `-${getNavOffset()}px 0px -55% 0px`,
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => observer.observe(section.el));

    updateActiveByPosition();
    window.addEventListener("scroll", updateActiveByPosition, {
      passive: true,
    });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveByPosition);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-340 mx-auto flex justify-between items-center">
        <div className="h-full items-center gap-1 flex">
          <Image
            src="/logo.webp"
            alt="Accredian logo"
            width={124}
            height={32}
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[16px] font-semibold cursor-pointer transition-colors pb-2 ${
                      isActive
                        ? "text-blue-600 border-b-[3px] border-blue-600"
                        : "text-black hover:text-black"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToSection(item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:hidden flex items-center relative ml-auto">
          <button
            type="button"
            className="inline-flex items-center justify-center text-black"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-black cursor-pointer" />
            ) : (
              <Menu className="w-8 h-8 text-black cursor-pointer" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="flex absolute top-16 right-0 bg-white shadow-lg p-6 rounded-xl z-50">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeHash === item.href;

                  return (
                    <li
                      key={item.href}
                      className="text-[16px] text-black cursor-pointer"
                    >
                      <Link
                        href={item.href}
                        className={`pb-1 ${
                          isActive
                            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                            : "text-black"
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          navigateToSection(item.href, true);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
