"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pick, type Locale } from "@/lib/locale";

export default function AppWrapper({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        {pick(locale, "Skip to content", "Aller au contenu")}
      </a>
      <Menu locale={locale} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="min-h-screen flex flex-col"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer locale={locale} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}
