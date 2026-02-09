import { siteConfig } from "@/lib/seo/metadata";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                "url": siteConfig.url,
                "name": siteConfig.name,
                "description": siteConfig.description,
                "publisher": {
                    "@id": `${siteConfig.url}/#service`
                }
            },
            {
                "@type": "TaxiService",
                "@id": `${siteConfig.url}/#service`,
                "name": "Taxi Vilassar de Mar - David",
                "description": "Servicio de taxi profesional con 10 años de experiencia. Especialista en traslados al Aeropuerto de Barcelona y servicios bajo reserva en Vilassar de Mar y el Maresme.",
                "url": siteConfig.url,
                "telephone": "+34630449626",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Taxi David Vilassar",
                    "image": `${siteConfig.url}${siteConfig.ogImage}`,
                    "telephone": "+34630449626",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Vilassar de Mar",
                        "addressLocality": "Vilassar de Mar",
                        "addressRegion": "Barcelona",
                        "postalCode": "08340",
                        "addressCountry": "ES"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "41.5067",
                        "longitude": "2.3933"
                    },
                    "url": siteConfig.url,
                    "priceRange": "€€",
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "06:00",
                            "closes": "23:00"
                        }
                    ]
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Vilassar de Mar"
                    },
                    {
                        "@type": "City",
                        "name": "Vilassar de Dalt"
                    },
                    {
                        "@type": "City",
                        "name": "Cabrils"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "El Maresme"
                    }
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Taxi",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Traslado Aeropuerto Barcelona"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Servicio de Taxi Bajo Reserva"
                            }
                        }
                    ]
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
