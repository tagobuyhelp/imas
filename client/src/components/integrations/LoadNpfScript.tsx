
console.log("LoadNpfScript mounted");
// LoadNpfScript.tsx
import React, { useEffect } from "react";

declare global {
    interface Window {
        NpfWidgetsInit?: any;
        npfWidgetInstance?: any;
        __npfWidgetInstanceInitialized?: boolean;
    }
}



const SCRIPT_SRC = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
const WIDGET_ID = "550974b33503dfc785c6fbf5148e6d84";

export default function LoadNpfScript(): JSX.Element | null {
    useEffect(() => {
        let mounted = true;

        // If script already present, don't append duplicate
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);

        async function initAfterLoad() {
            // Wait a bit for constructor to be exposed (retry loop)
            let tries = 0;
            while (mounted && !window.NpfWidgetsInit && tries < 20) {
                // small delay
                // eslint-disable-next-line no-await-in-loop
                await new Promise((r) => setTimeout(r, 150));
                tries++;
            }

            if (!mounted) return;

            if (!window.NpfWidgetsInit) {
                console.error("NPF script loaded but constructor NpfWidgetsInit not found.");
                return;
            }

            // Avoid double initialization
            if (window.__npfWidgetInstanceInitialized) {
                console.log("NPF already initialized — skipping second init.");
                return;
            }

            try {
                // THIS is the exact init object you provided
                window.npfWidgetInstance = new window.NpfWidgetsInit({
                    widgetId: WIDGET_ID,
                    baseurl: "widgets.in8.nopaperforms.com",
                    formTitle: "Enquiry Form",
                    titleColor: "#FF0033",
                    backgroundColor: "#ddd",
                    iframeHeight: "500px",
                    buttonbgColor: "#4c79dc",
                    buttonTextColor: "#FFF",
                });
                window.__npfWidgetInstanceInitialized = true;
                console.log("NPF initialized:", window.npfWidgetInstance);
            } catch (err) {
                console.error("NPF initialization threw:", err);
            }
        }

        if (existing) {
            // If already loaded, run init; otherwise wait for its load event
            if (existing.getAttribute("data-loaded") === "true") {
                initAfterLoad();
            } else {
                const onLoad = () => {
                    existing.setAttribute("data-loaded", "true");
                    initAfterLoad();
                };
                const onErr = (e: any) => {
                    console.error("Failed to load NPF vendor script", e);
                };
                existing.addEventListener("load", onLoad);
                existing.addEventListener("error", onErr);
            }
        } else {
            // Append the single script tag
            const s = document.createElement("script");
            s.src = SCRIPT_SRC;
            s.async = true;
            s.addEventListener("load", () => {
                s.setAttribute("data-loaded", "true");
                console.log("NPF vendor script loaded");
                initAfterLoad();
            });
            s.addEventListener("error", (e) => {
                console.error("Failed to load NPF vendor script", e);
            });
            document.body.appendChild(s);
        }

        return () => {
            mounted = false;
            // Do NOT remove the script tag on unmount to avoid breaking other pages.
            // If you must remove, you can find and remove it here.
        };
    }, []);

    return null; // no UI — it only loads the script & init
}
