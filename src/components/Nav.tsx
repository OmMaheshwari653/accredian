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

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    setActiveHash(window.location.hash || "#home");

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
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
                    onClick={() => setActiveHash(item.href)}
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
                        onClick={() => {
                          setActiveHash(item.href);
                          setIsMobileMenuOpen(false);
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
