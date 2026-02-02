"use client";

import { useEffect, useState } from "react";

interface CalendlyInlineProps {
    url?: string;
    height?: string;
}

export default function CalendlyInline({
    url = "https://calendly.com/ashuashu20691/30min",
    height = "700px"
}: CalendlyInlineProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setIsLoaded(true);
        document.body.appendChild(script);

        // Load Calendly CSS
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            // Cleanup
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
        };
    }, []);

    useEffect(() => {
        if (isLoaded && (window as any).Calendly) {
            // Initialize inline widget
            (window as any).Calendly.initInlineWidget({
                url,
                parentElement: document.querySelector(".calendly-inline-widget"),
                prefill: {},
                utm: {}
            });
        }
    }, [isLoaded, url]);

    return (
        <div className="calendly-wrapper">
            <div
                className="calendly-inline-widget"
                data-url={url}
                style={{ minWidth: "320px", height }}
            ></div>
        </div>
    );
}
