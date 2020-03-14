export function getTabbableElements(parentNode: HTMLElement | string) {
  const tabbableElements = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[contenteditable]",
    '[tabindex]:not([tabindex="-1"])',
    "audio[controls]",
    "video[controls]"
  ];

  if (parentNode && document) {
    if (typeof parentNode === "string") {
      return document
        .getElementById(parentNode)
        ?.querySelectorAll(tabbableElements.join(","));
    }

    return parentNode.querySelectorAll(tabbableElements.join(","));
  }
}
