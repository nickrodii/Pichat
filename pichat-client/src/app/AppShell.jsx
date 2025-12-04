"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";

export default function AppShell({ children }) {
  const handleMinimize = () => {
    if (typeof window === "undefined") return;
    getCurrentWindow().minimize();
  };

  const handleToggleMaximize = () => {
    if (typeof window === "undefined") return;
    getCurrentWindow().toggleMaximize();
  };

  const handleClose = () => {
    if (typeof window === "undefined") return;
    getCurrentWindow().close();
  };

  return (
    <div className="app-shell">
      <header className="titlebar" data-tauri-drag-region>
        <div className="titlebar-center">
          <img
            src="/shell-icon.png"
            alt="PiChat icon"
            className="titlebar-icon"
            width="24"
            height="24"
          />
          <span className="titlebar-title">PiChat</span>
        </div>

        <div className="titlebar-buttons">
          <button
            className="titlebar-btn titlebar-btn-min"
            onClick={handleMinimize}
            aria-label="Minimize"
          />
          <button
            className="titlebar-btn titlebar-btn-max"
            onClick={handleToggleMaximize}
            aria-label="Maximize"
          >
            ☐
          </button>
          <button
            className="titlebar-btn titlebar-btn-close"
            onClick={handleClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </header>

      <main className="app-shell-main">{children}</main>
    </div>
  );
}
