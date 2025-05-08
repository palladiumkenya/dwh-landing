export {};

declare global {
    interface Window {
        RUNTIME_CONFIG: {
            NEXT_PUBLIC_API_URL: string;
            NEXT_PUBLIC_NDW_LINK: string;
            NEXT_PUBLIC_GIS_LINK: string;
            NEXT_PUBLIC_SELF_SERVICE_LINK: string;
            NEXT_PUBLIC_CS_LINK: string;
        };
    }
}
