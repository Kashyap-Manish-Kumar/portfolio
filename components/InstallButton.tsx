"use client";

import { useEffect, useState } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    setDeferredPrompt(null);
  };

  // ❗ hide if not available
  if (!deferredPrompt) return null;

  return (
  <button
    onClick={handleInstall}
    className="w-[90%] sm:w-3/4 text-lg font-bold uppercase tracking-wider px-6 py-3 rounded-md text-center transition-all duration-200
    hover:logo-shadow hover:border-2 hover:border-(--border-color)"
  >
    INSTALL 📱
  </button>
);
}