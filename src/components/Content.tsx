'use client'
import {useStats} from "@/lib/api";

const Content = () => {

    const stats=useStats()

    return (
        <div className="relative bg-cover bg-center h-96">
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="w-/4 text-black text-left">
                        <h1 className="text-4xl font-bold">National Data Warehouse</h1>
                        <h1 className="text-4xl font-bold"><span className="highlight">Reimagined</span></h1>

                        <svg width="100" height="20" viewBox="0 0 100 20" className="mt-2">
                            <path d="M0 10 Q50 0 100 10" stroke="#8F43AE" strokeWidth="2" fill="none"/>
                        </svg>

                        <p className="mt-4 text-lg">
                            <span className="highlight">{stats.facilityCount}</span> Health Facilities in <span
                            className="highlight">{stats.countyCount}</span> counties in Kenya,
                            supported by <span className="highlight">{stats.partnerCount}</span> SDPs have ever uploaded
                            care & treatment data to the warehouse since
                            it’s inception. As at <span className="highlight">{stats.periodInfo}</span>, {stats.facilityCount} facilities
                            had reported patients current on ART</p>
                    </div>
                    <div className="w-2/1 relative inline-block semicircle-background">
                        <img src="/doc-trans.png" alt="Content Image" className="float-image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
