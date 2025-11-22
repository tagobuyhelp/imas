// components/EnquiryPopupButton.tsx
import React, { useCallback } from "react";

const WIDGET_ID = "550974b33503dfc785c6fbf5148e6d84";
/**
 * Try these patterns if one doesn't match the vendor
 * - https://widgets.in8.nopaperforms.com/widget/<id>
 * - https://in8.nopaperforms.com/embed/<id>
 * - ask vendor for "direct form URL"
 */
const FORM_URL = `https://widgets.in8.nopaperforms.com/widget/${WIDGET_ID}`;

function openCenteredPopup(url: string, title = "Enquiry", w = 900, h = 700) {
  const dualScreenLeft = window.screenLeft ?? (window as any).screenX ?? 0;
  const dualScreenTop = window.screenTop ?? (window as any).screenY ?? 0;
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
  const left = Math.max(0, (width - w) / 2 + dualScreenLeft);
  const top = Math.max(0, (height - h) / 2 + dualScreenTop);

  const features = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`;
  const win = window.open(url, title, features);
  if (!win) {
    // popup blocked — fallback to new tab
    window.open(url, "_blank", "noopener,noreferrer");
    return null;
  }
  win.focus();
  return win;
}

type Props = {
  className?: string;
  label?: string;
};

export default function EnquiryPopupButton({ className = "", label = "Enquire Now" }: Props) {
  const onClick = useCallback(() => {
    // Add optional query params vendor might accept, e.g. styling/theme
    const url = `${FORM_URL}?widgetId=${WIDGET_ID}`;
    openCenteredPopup(url, "Enquiry Form", 920, 700);
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label="Open enquiry form"
    >
      {label}
    </button>
  );
}
