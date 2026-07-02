"use client";

import {useEffect} from "react";
import {useSearchParams} from "next/navigation";

export function ScrollToSection() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const sectionId = searchParams.get("scrollTo");

        if (!sectionId) return;

        const timeout = window.setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (!section) return;

            const headerOffset = 88;
            const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            window.history.replaceState(null, "", window.location.pathname);
        }, 80);

        return () => window.clearTimeout(timeout);
    }, [searchParams]);

    return null;
}
