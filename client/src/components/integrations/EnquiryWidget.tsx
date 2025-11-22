// components/EnquiryWidget.tsx
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    NpfWidgetsInit?: any;
    npfWidgetInstance?: any;
    __npfWidgetInstanceInitialized?: boolean;
  }
}

const WIDGET_ID = "550974b33503dfc785c6fbf5148e6d84";
const SCRIPT_SRC = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
const INIT_OPTIONS = {
  widgetId: WIDGET_ID,
  baseurl: "widgets.in8.nopaperforms.com",
  formTitle: "Enquiry Form",
  titleColor: "#FF0033",
  backgroundColor: "#ddd",
  iframeHeight: "500px",
  buttonbgColor: "#4c79dc",
  buttonTextColor: "#FFF",
};

function openCenteredPopup(url: string, title = "Enquiry", w = 920, h = 700) {
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

export default function EnquiryWidget({
  className = "",
  label = "Enquire Now!",
}: {
  className?: string;
  label?: React.ReactNode;
}) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setStatus("loading");

    // if script already present and loaded
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    const onScriptReady = async () => {
      try {
        // initialize widget if constructor available
        if (!window.NpfWidgetsInit) {
          // small wait-and-retry in case script hasn't fully exposed constructor
          let tries = 0;
          while (!window.NpfWidgetsInit && tries < 15) {
            // eslint-disable-next-line no-await-in-loop
            await new Promise((r) => setTimeout(r, 200));
            tries++;
          }
        }

        if (!window.NpfWidgetsInit) {
          throw new Error("NPF constructor not found on window after load.");
        }

        if (!window.__npfWidgetInstanceInitialized) {
          try {
            window.npfWidgetInstance = new window.NpfWidgetsInit(INIT_OPTIONS);
            window.__npfWidgetInstanceInitialized = true;
            console.log("NPF widget initialized", window.npfWidgetInstance);
          } catch (e) {
            console.warn("NPF initialization threw:", e);
            // do not fail yet — widget may bind to button class instead
          }
        } else {
          console.log("NPF widget already initialized earlier.");
        }

        if (!mounted) return;
        setStatus("ready");
      } catch (e: any) {
        console.error("NPF script/init error:", e);
        if (!mounted) return;
        setErrMsg(String(e?.message ?? e));
        setStatus("error");
      }
    };

    if (existing) {
      // If script exists, still wait for its load event or consider it loaded
      if (existing.getAttribute("data-loaded") === "true") {
        onScriptReady();
      } else {
        existing.addEventListener("load", () => {
          existing.setAttribute("data-loaded", "true");
          onScriptReady();
        });
        existing.addEventListener("error", (ev) => {
          console.error("NPF script failed to load", ev);
          if (!mounted) return;
          setStatus("error");
          setErrMsg("Failed to load vendor script");
        });
      }
    } else {
      // append script
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.addEventListener("load", () => {
        s.setAttribute("data-loaded", "true");
        onScriptReady();
      });
      s.addEventListener("error", (ev) => {
        console.error("NPF script failed to load", ev);
        if (!mounted) return;
        setStatus("error");
        setErrMsg("Failed to load vendor script");
      });
      document.body.appendChild(s);
    }

    return () => {
      mounted = false;
      // keep script in DOM for reuse; we only reset initialization flag
      // window.__npfWidgetInstanceInitialized = false; // don't automatically unset (optional)
    };
  }, []);

  // attempt to open via the instance's open() if available, else rely on vendor's binding (class)
  const handleClick = async () => {
    try {
      // If NPF's instance has an open method, use it
      if (window.npfWidgetInstance && typeof window.npfWidgetInstance.open === "function") {
        window.npfWidgetInstance.open();
        return;
      }

      // Some vendor scripts bind to the button via class; to be safe, try to trigger click programmatically on the button element
      if (btnRef.current) {
        // programmatic click — vendor script should have attached a listener to this class
        btnRef.current.click();
        // if that didn't open, fallback to popup window
      }

      // Check briefly if the widget opened (we can't easily detect iframe), fallback to popup:
      setTimeout(() => {
        // If still not opened after 800ms, use fallback direct form URL
        // vendor's direct form URL pattern (may vary) - adjust if vendor provides exact link
        const directUrl = `https://widgets.in8.nopaperforms.com/widget/${WIDGET_ID}`;
        // try opening centered popup
        openCenteredPopup(directUrl, "Enquiry Form", 920, 700);
      }, 800);
    } catch (e) {
      console.error("Error calling npf widget open fallback:", e);
      const directUrl = `https://widgets.in8.nopaperforms.com/widget/${WIDGET_ID}`;
      openCenteredPopup(directUrl, "Enquiry Form", 920, 700);
    }
  };

  return (
    <div>
      <button
        ref={btnRef}
        type="button"
        // vendor expects this exact class so the script can bind to it
        className={`npfWidgetButton npfWidget-${WIDGET_ID} ${className}`}
        onClick={handleClick}
        aria-label="Open enquiry form"
        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
      >
        {label}
      </button>

      <div style={{ marginTop: 8, fontSize: 13 }}>
        {status === "loading" && <span style={{ color: "#f59e0b" }}>Loading form…</span>}
        {status === "ready" && <span style={{ color: "#10b981" }}>Form ready</span>}
        {status === "error" && (
          <span style={{ color: "#ef4444" }}>
            Widget error: {errMsg ?? "See console"} — fallback popup will be used.
          </span>
        )}
      </div>
    </div>
  );
}
