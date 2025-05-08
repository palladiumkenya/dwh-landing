import { useEffect, useState } from 'react';

interface RuntimeConfig {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_NDW_LINK: string;
    NEXT_PUBLIC_GIS_LINK: string;
    NEXT_PUBLIC_SELF_SERVICE_LINK: string;
    NEXT_PUBLIC_CS_LINK: string;
}

export default function useRuntimeConfig(): RuntimeConfig | null {
    const [config, setConfig] = useState<RuntimeConfig | null>(null);

    useEffect(() => {
        // Check if already loaded
        if (typeof window !== 'undefined' && window.RUNTIME_CONFIG) {
            setConfig(window.RUNTIME_CONFIG);
            return;
        }

        // Dynamically load the script
        const script = document.createElement('script');
        script.src = '/runtime-config.js';
        script.async = true;

        script.onload = () => {
            if (window.RUNTIME_CONFIG) {
                setConfig(window.RUNTIME_CONFIG);
            }
        };

        script.onerror = () => {
            console.error('Failed to load runtime-config.js');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return config;
}
