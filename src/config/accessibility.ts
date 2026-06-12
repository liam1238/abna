import { Accessibility, type IAccessibilityOptions } from "accessibility";
import { accessibilityLabels } from "../data/landingPageData.ts";

let accessibilityInstance: Accessibility | null = null;

function isBrowserRuntime(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    !import.meta.env.SSR
  );
}

function injectPositionOverride(): void {
  const style = document.createElement("style");
  style.id = "accessibility-position-override";
  style.textContent = `
    ._access-icon,
    #_access-icon,
    .accessibility-icon,
    #accessibility-icon,
    [class*="access"][class*="icon"],
    [id*="access"][id*="icon"] {
      right: auto !important;
      left: 16px !important;
      bottom: calc(env(safe-area-inset-bottom, 0px) + 20px) !important;
      top: auto !important;
    }

    ._access-menu,
    #_access-menu,
    .accessibility-menu,
    #accessibility-menu,
    [class*="access"][class*="menu"],
    [id*="access"][id*="menu"] {
      right: auto !important;
      left: 16px !important;
      bottom: calc(env(safe-area-inset-bottom, 0px) + 90px) !important;
      top: auto !important;
    }
  `;

  document.head.querySelector("#accessibility-position-override")?.remove();
  document.head.appendChild(style);
}

function applyWidgetPosition(): void {
  document.body.style.setProperty("--_access-icon-top", "unset");
  document.body.style.setProperty("--_access-icon-right", "unset");
  document.body.style.setProperty("--_access-icon-left", "16px");
  document.body.style.setProperty(
    "--_access-icon-bottom",
    "calc(env(safe-area-inset-bottom, 0px) + 20px)",
  );

  document.body.style.setProperty("--_access-menu-top", "unset");
  document.body.style.setProperty("--_access-menu-right", "unset");
  document.body.style.setProperty("--_access-menu-left", "16px");
  document.body.style.setProperty(
    "--_access-menu-bottom",
    "calc(env(safe-area-inset-bottom, 0px) + 90px)",
  );

  injectPositionOverride();
}

function buildAccessibilityOptions(): IAccessibilityOptions {
  return {
    labels: accessibilityLabels,
    textToSpeechLang: "he-IL",
    speechToTextLang: "he-IL",
    language: {
      textToSpeechLang: "he-IL",
      speechToTextLang: "he-IL",
    },
  };
}

export function initAccessibility(): void {
  if (!isBrowserRuntime()) {
    return;
  }

  if (accessibilityInstance) {
    return;
  }

  accessibilityInstance = new Accessibility(buildAccessibilityOptions());

  applyWidgetPosition();

  window.setTimeout(() => {
    applyWidgetPosition();
  }, 0);

  window.setTimeout(() => {
    applyWidgetPosition();
  }, 300);
}

export function getAccessibilityInstance(): Accessibility | null {
  return accessibilityInstance;
}
