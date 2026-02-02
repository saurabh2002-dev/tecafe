"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface CalendlyWidgetProps {
    isOpen: boolean;
    onClose: () => void;
    url?: string;
}

export default function CalendlyWidget({
    isOpen,
    onClose,
    url = "https://calendly.com/ashuashu20691/30min"
}: CalendlyWidgetProps) {
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
        if (isOpen && isLoaded && (window as any).Calendly) {
            // Initialize Calendly popup widget
            (window as any).Calendly.initPopupWidget({ url });
        }
    }, [isOpen, isLoaded, url]);

    if (!isOpen) return null;

    return (
        <div className="calendly-modal-overlay" onClick={onClose}>
            <div className="calendly-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="calendly-close-btn" onClick={onClose} aria-label="Close">
                    <FaTimes />
                </button>
                <div
                    className="calendly-inline-widget"
                    data-url={url}
                    style={{ minWidth: "320px", height: "700px" }}
                ></div>
            </div>
        </div>
    );
}
