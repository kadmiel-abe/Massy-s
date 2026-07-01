tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-error": "#ffffff",
                "on-tertiary-fixed-variant": "#004d67",
                "error-container": "#ffdad6",
                "secondary": "#5f5e5e",
                "surface-container-low": "#f5f3ee",
                "on-secondary": "#ffffff",
                "surface-container": "#f0eee9",
                "surface-bright": "#fbf9f4",
                "secondary-fixed": "#e5e2e1",
                "on-background": "#1b1c19",
                "background": "#fbf9f4",
                "on-secondary-fixed-variant": "#474646",
                "inverse-on-surface": "#f2f1ec",
                "on-secondary-fixed": "#1c1b1b",
                "on-tertiary": "#ffffff",
                "inverse-surface": "#30312e",
                "outline": "#7f7663",
                "on-primary": "#ffffff",
                "outline-variant": "#d0c5af",
                "on-primary-fixed-variant": "#574500",
                "on-tertiary-container": "#004b64",
                "on-tertiary-fixed": "#001e2b",
                "tertiary-fixed": "#c1e8ff",
                "tertiary": "#006687",
                "surface-container-lowest": "#ffffff",
                "surface-container-high": "#eae8e3",
                "surface-container-highest": "#e4e2dd",
                "tertiary-container": "#6cbce3",
                "surface": "#fbf9f4",
                "on-secondary-container": "#656464",
                "on-surface-variant": "#4d4635",
                "tertiary-fixed-dim": "#81d0f8",
                "surface-variant": "#e4e2dd",
                "primary-fixed": "#ffe088",
                "surface-tint": "#735c00",
                "secondary-container": "#e5e2e1",
                "secondary-fixed-dim": "#c9c6c5",
                "primary-fixed-dim": "#e9c349",
                "on-primary-container": "#554300",
                "on-error-container": "#93000a",
                "primary-container": "#d4af37",
                "on-surface": "#1b1c19",
                "surface-dim": "#dbdad5",
                "on-primary-fixed": "#241a00",
                "error": "#ba1a1a",
                "primary": "#735c00",
                "inverse-primary": "#e9c349"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px"
            },
            spacing: {
                "container-max": "1280px",
                "stack-md": "2rem",
                "section-padding": "10rem",
                "stack-sm": "1rem",
                "stack-lg": "4rem",
                gutter: "2rem"
            },
            fontFamily: {
                "label-caps": ["Poppins"],
                "headline-md": ["Poppins"],
                "body-md": ["Poppins"],
                "body-lg": ["Poppins"],
                "headline-xl": ["Poppins"],
                "headline-lg-mobile": ["Poppins"],
                "headline-lg": ["Poppins"]
            },
            fontSize: {
                "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
                "headline-md": ["32px", { lineHeight: "40px", fontWeight: "500" }],
                "body-md": ["16px", { lineHeight: "28px", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "32px", fontWeight: "400" }],
                "headline-xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
                "headline-lg": ["48px", { lineHeight: "56px", fontWeight: "600" }]
            }
        }
    }
};
