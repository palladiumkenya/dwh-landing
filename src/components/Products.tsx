import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAreaChart,
    faBarChart,
    faDatabase,
    faHeartPulse,
    faMapLocation,
    faSearchPlus
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Products = () => {
    const ndwLink =
        typeof window !== 'undefined' && window.RUNTIME_CONFIG
            ? window.RUNTIME_CONFIG.NEXT_PUBLIC_NDW_LINK
            : process.env.NEXT_PUBLIC_NDW_LINK;

    const gisLink =
        typeof window !== 'undefined' && window.RUNTIME_CONFIG
            ? window.RUNTIME_CONFIG.NEXT_PUBLIC_GIS_LINK
            : process.env.NEXT_PUBLIC_GIS_LINK;
    const csLink =
        typeof window !== 'undefined' && window.RUNTIME_CONFIG
            ? window.RUNTIME_CONFIG.NEXT_PUBLIC_CS_LINK
            : process.env.NEXT_PUBLIC_CS_LINK;
    const ssLink =
        typeof window !== 'undefined' && window.RUNTIME_CONFIG
            ? window.RUNTIME_CONFIG.NEXT_PUBLIC_SELF_SERVICE_LINK
            : process.env.NEXT_PUBLIC_SELF_SERVICE_LINK;

    const tiles = [
        {
            image: faBarChart,
            name: "NDW Portal",
            description: "The NDW Portal serves as an enterprise-wide data repository, providing data warehousing capabilities for health-related information",
            href: ndwLink
        },
        {
            image: faMapLocation,
            name: "Geo Spatial Intelligence Maps",
            description: "Interactive maps that show patient distribution and outcomes and easily allow drill down from national to facility level to uncover spatial patterns and guide targeted interventions.",
            href: gisLink
        },
        {
            image: faDatabase,
            name: "Self-Service Analytics",
            description: "Empowering registered users to explore and analyze their own data—build custom charts, extract datasets, and generate insights to inform decisions and improve program outcomes.",
            href: ssLink
        },
        {
            image: faHeartPulse,
            name: "HIV Case Surveillance Dashboards",
            description: "Everything you need to know about HIV Case Surveillance - from real-time trends and longitudinal tracking of cohorts to geographic hotspots and public health response reports- all in one place.",
            href: csLink
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4" id="products">
            <br/>
            <br/>
            <h1 className="text-3xl font-bold mb-8 text-left">Information Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                {tiles.map((tile, index) => (
                    <Link href={tile.href || '#'} key={index} legacyBehavior>
                        <a
                            key={index}
                            className={`no-hover shadow-lg rounded-lg p-4 text-left ${index % 2 === 0 ? 'tile-light' : 'tile-dark'}`}
                        >
                            <FontAwesomeIcon icon={tile.image}
                                             className={`mx-auto mb-4 h-16 w-16 ${index % 2 === 0 ? 'icon-light-bg' : 'icon-dark-bg'}`}
                                             style={{marginLeft: '0', marginRight: 'auto'}}/>
                            <h2 className={`font-bold mb-2 `}>{tile.name}</h2>
                            <p>{tile.description}</p>
                        </a>
                    </Link>
                ))}
            </div>

            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Products;
