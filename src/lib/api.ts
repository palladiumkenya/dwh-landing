import { useState, useEffect } from 'react';
import useRuntimeConfig from "@/lib/useRuntimeConfig";

export interface Stats {
    period?: string
    facilityCount?: number
    countyCount?: number
    partnerCount?: number
    periodInfo?: string
}

export function useStats() {

    const config = useRuntimeConfig();

    const apiUrl =config?.NEXT_PUBLIC_API_URL!="" ?
        config?.NEXT_PUBLIC_API_URL:
        process.env.NEXT_PUBLIC_API_URL;

    const [stats, setStats] = useState<Stats>({
        facilityCount:2525,
        countyCount:45,
        partnerCount:40,
        periodInfo:'Apr 2025'
    });

    useEffect(() => {
        async function fetchMessage() {
            const response = await fetch(`${apiUrl}/api/Stats/Reporting/Current`);
            const data: Stats = await response.json();
            setStats(data);
        }
        if(apiUrl) {
            fetchMessage();
        }
    }, [apiUrl]);

    return stats;
}
