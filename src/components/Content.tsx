const Content = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/background.jpg')" }}>
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="w-1/2 text-black text-left">
                        <h1 className="text-4xl font-bold">National Data Warehouse</h1>
                        <h1 className="text-4xl font-bold"><span className="text-blue-500">Reimagined</span></h1>

                        <svg width="100" height="20" viewBox="0 0 100 20" className="mt-2">
                            <path d="M0 10 Q50 0 100 10" stroke="blue" strokeWidth="2" fill="none"/>
                        </svg>

                        <p className="mt-4 text-lg">
                            <span className="text-blue-500">2372</span> Health Facilities in <span className="text-blue-500">44</span> counties in Kenya,
                            supported by <span className="text-blue-500">40</span> SDPs have ever uploaded
                            care & treatment data to the warehouse since
                            it’s inception. As at <span className="text-blue-500">Jun 2024</span>, 2372 facilities
                            had reported patients current on ART</p>
                    </div>
                    <div className="w-1/2">
                        <img src="/content-image.jpg" alt="Content Image" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
