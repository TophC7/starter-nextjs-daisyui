"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import "./globals.css";

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // Initialize theme change
    useEffect(() => {
        themeChange(false);
        return () => {
            themeChange(false);
        };
    }, []);

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
