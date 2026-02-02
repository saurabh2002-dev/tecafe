"use client";

import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";

interface CalendlyButtonProps {
    url?: string;
    text?: string;
    className?: string;
    prefill?: {
        name?: string;
        email?: string;
        customAnswers?: Record<string, string>;
    };
}

export default function CalendlyButton({
    url = "https://calendly.com/ashuashu20691/30min",
    text = "Schedule Consultation",
    className = "btn-modern",
    prefill = {}
}: CalendlyButtonProps) {
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
            // Cleanup on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
        };
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isLoaded && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({
                url,
                prefill,
                utm: {}
            });
        }
    };

    return (
        <button onClick={handleClick} className={className}>
            {text}
            <FaCalendarCheck style={{ marginLeft: "8px" }} />
        </button>
    );
}
