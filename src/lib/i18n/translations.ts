export type Language = 'es' | 'ca' | 'en' | 'fr';

export const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            gallery: "Galería",
            info: "Información",
            contact: "Contacto",
            call: "Llamar ahora",
        },
        hero: {
            title_prefix: "Taxi en",
            title_highlight: "Vilassar de Mar",
            description: "Taxi David: servicios rápidos, puntuales y seguros en El Maresme, hospitales y aeropuertos. 10 años de experiencia a su servicio.",
            whatsapp_btn: "Reservar por WhatsApp",
            call_btn: "630 449 626",
            cards: {
                experience: {
                    title: "10+ Años de Servicio",
                    desc: "Una década de experiencia garantizando traslados seguros en toda la comarca."
                },
                vehicle: {
                    title: "Vehículo Premium",
                    desc: "Viaja en un Toyota Prius híbrido, limpio, espacioso y respetuoso con el medio ambiente."
                },
                coverage: {
                    title: "Todo El Maresme",
                    desc: "Llegamos a cualquier punto de la comarca, hospitales y aeropuertos con reserva previa de 24h."
                }
            }
        },
        services: {
            title_prefix: "Nuestros",
            title_highlight: "Servicios",
            description: "Ofrecemos soluciones de transporte personalizadas para que llegues a tu destino con total tranquilidad.",
            items: {
                urban: {
                    title: "Transporte Urbano",
                    description: "Viajes dentro de Vilassar de Mar y El Maresme con rapidez y eficiencia. Llegamos a cualquier punto en el menor tiempo posible."
                },
                airport: {
                    title: "Traslado Aeropuerto",
                    description: "Servicio puntual al Aeropuerto de Barcelona-El Prat. Seguimiento de vuelos para recogidas sin esperas."
                },
                port: {
                    title: "Traslados a Puertos",
                    description: "Servicio especializado para traslados a la Terminal de Cruceros del Puerto de Barcelona y puertos deportivos."
                },
                business: {
                    title: "Servicio Empresas",
                    description: "Soluciones de movilidad para empresas, mutuas y traslados de personal con facturación mensual disponible."
                },
                executive: {
                    title: "Servicios Ejecutivos",
                    description: "Transporte discreto y profesional para eventos, cenas o traslados corporativos con la máxima seriedad."
                },
                hospital: {
                    title: "Servicio Hospital",
                    description: "Traslados seguros y cómodos a hospitales de El Maresme y Barcelona. Puntualidad máxima para sus citas médicas."
                },
                long_distance: {
                    title: "Largo Recorrido",
                    description: "Desplazamientos nacionales e internacionales con tarifas cerradas y máxima comodidad en el trayecto."
                },
                waiting: {
                    title: "Servicio de Espera",
                    description: "Para todos sus trayectos contamos con servicio de espera y retorno para su mayor tranquilidad."
                }
            }
        },
        gallery: {
            title_prefix: "Nuestro Servicio en",
            title_highlight: "Imágenes",
            description: "Conozca el vehículo y los destinos más frecuentes de nuestro servicio en Vilassar de Mar.",
            vehicle_info: "Nuestro vehículo cuenta con capacidad para 4 pasajeros y amplio maletero.",
            items: {
                taxi: {
                    title: "Nuestro Vehículo",
                    description: "Comodidad y seguridad en cada trayecto."
                },
                airport: {
                    title: "Traslados al Aeropuerto",
                    description: "Puntualidad para tus vuelos nacionales e internacionales."
                },
                hospital: {
                    title: "Citas Médicas y Hospitales",
                    description: "Servicio prioritario para traslados sanitarios."
                },
                station: {
                    title: "Estación de Tren",
                    description: "Conexiones rápidas con estaciones de tren y autobús."
                }
            }
        },
        info: {
            title: "Trayectoria Profesional",
            experience_prefix: "10 Años de",
            experience_highlight: "Experiencia",
            description: "Soy David, tu taxista de confianza en Vilassar de Mar. Llevo una década ofreciendo un servicio confiable, puntual y profesional a los vecinos de la comarca del Maresme.",
            stats: {
                years: "Años de Experiencia",
                punctuality: "Puntualidad Especialista",
                punctuality_val: "Asegurada",
                hygiene: "Vehículo Higienizado",
                hygiene_val: "Garantizado",
                security: "Seguridad Máxima"
            },
            vehicle: {
                title: "Vehículo Híbrido Premium",
                desc: "Toyota Prius blanco: cómodo, espacioso e impecable."
            }
        },
        contact: {
            title_prefix: "¿Necesitas un",
            title_highlight: "Taxi ahora?",
            description: "Estamos disponibles para atender tus solicitudes de transporte. Te recomendamos reservar con 24 horas de antelación.",
            cards: {
                call: {
                    title: "Llamada Directa",
                    subtitle: "Con reserva previa de 24h"
                },
                whatsapp: {
                    title: "WhatsApp",
                    value: "Respuesta Rápida",
                    subtitle: "Reservas por chat"
                },
                instagram: {
                    title: "Instagram",
                    subtitle: "Sígueme para novedades"
                },
                zone: {
                    title: "Zona de Servicio",
                    subtitle: "Comarca del Maresme"
                }
            },
            cta: {
                title: "Reserva tu viaje en segundos",
                whatsapp: "Pedir por WhatsApp",
                call: "Llamar a David"
            }
        },
        faq: {
            title_prefix: "Preguntas",
            title_highlight: "Frecuentes",
            subtitle: "Resolvemos tus Dudas",
            items: {
                payment: {
                    q: "¿Se puede pagar con tarjeta?",
                    a: "Sí, aceptamos todas las tarjetas menos American Express. También puede pagar con Bizum para su comodidad."
                },
                child_seat: {
                    q: "¿Tiene silla para niños?",
                    a: "No disponemos de silla propia en el vehículo, pero puede aportar la suya y yo mismo me encargaré de instalarla de forma segura. Además, yo mismo se la entrego en el lugar que usted me diga."
                },
                booking: {
                    q: "¿Se puede reservar con días de antelación?",
                    a: "Sí, puede realizar sus reservas con total antelación para asegurar su trayecto en la fecha y hora que necesite."
                },
                luggage: {
                    q: "¿El coche tiene mucho maletero?",
                    a: "Sí, el vehículo cuenta con un maletero espacioso con capacidad para 4 maletas grandes sin problemas."
                }
            }
        },
        footer: {
            description: "Transporte confiable y seguro desde hace 10 años. Tu satisfacción y seguridad en cada trayecto son mi compromiso.",
            quick_links: "Enlaces Rápidos",
            contact: "Contacto",
            follow_us: "Síguenos",
            booking_notice: "Reserva previa 24h",
            region: "Comarca del Maresme",
            experience: "Taxista autorizado con 10 años de experiencia.",
            coded_by: "Codificado por"
        },
        booking: {
            title: "Reserva Tu Taxi",
            subtitle: "Confirmación inmediata por WhatsApp",
            origin: "Origen",
            destination: "Destino",
            date: "Fecha",
            time: "Hora",
            origin_placeholder: "Recogida (Ej: Estación)",
            destination_placeholder: "Destino (Ej: Aeropuerto)",
            submit: "Reservar Ahora via WhatsApp"
        }
    },
    ca: {
        nav: {
            home: "Inici",
            services: "Serveis",
            gallery: "Galeria",
            info: "Informació",
            contact: "Contacte",
            call: "Trucar ara",
        },
        hero: {
            title_prefix: "Taxi a",
            title_highlight: "Vilassar de Mar",
            description: "Taxi David: serveis ràpids, puntuals i segurs al Maresme, hospitals i aeroports. 10 anys d'experiència al seu servei.",
            whatsapp_btn: "Reservar per WhatsApp",
            call_btn: "630 449 626",
            cards: {
                experience: {
                    title: "10+ Anys de Servei",
                    desc: "Una dècada d'experiència garantint trasllats segurs a tota la comarca."
                },
                vehicle: {
                    title: "Vehicle Premium",
                    desc: "Viatja en un Toyota Prius híbrid, net, espaiós i respectuós amb el medi ambient."
                },
                coverage: {
                    title: "Tot El Maresme",
                    desc: "Arribem a qualsevol punt de la comarca, hospitals i aeroports amb reserva prèvia de 24h."
                }
            }
        },
        services: {
            title_prefix: "Els Nostres",
            title_highlight: "Serveis",
            description: "Oferim solucions de transport personalitzades per a que arribis al teu destí amb total tranquil·litat.",
            items: {
                urban: {
                    title: "Transport Urbà",
                    description: "Viatges dins de Vilassar de Mar i el Maresme amb rapidesa i eficiència. Arribem a qualsevol punt."
                },
                airport: {
                    title: "Trasllat Aeroport",
                    description: "Servei puntual a l'Aeroport de Barcelona-El Prat. Seguiment de vols per a recollides sense esperes."
                },
                port: {
                    title: "Trasllats a Ports",
                    description: "Servei especialitzat per a trasllats a la Terminal de Creuers del Port de Barcelona i ports esportius."
                },
                business: {
                    title: "Servei Empreses",
                    description: "Solucions de mobilitat per a empreses, mútues i trasllats de personal amb facturació mensual disponible."
                },
                executive: {
                    title: "Serveis Executius",
                    description: "Transport discret i professional per a esdeveniments, sopars o trasllats corporatius."
                },
                hospital: {
                    title: "Servei Hospital",
                    description: "Trasllats segurs i còmodes a hospitals del Maresme i Barcelona. Puntualitat màxima per a les teves cites."
                },
                long_distance: {
                    title: "Llarg Recorregut",
                    description: "Desplaçaments nacionals i internacionals amb tarifes tancades i màxima comoditat."
                },
                waiting: {
                    title: "Servei d'Espera",
                    description: "Per a tots els teus trajectes comptem amb servei d'espera i retorn per a la teva major tranquil·litat."
                }
            }
        },
        gallery: {
            title_prefix: "El Nostre Servei en",
            title_highlight: "Imatges",
            description: "Coneix el vehicle i els destins més freqüents del nostre servei a Vilassar de Mar.",
            vehicle_info: "El nostre vehicle compta amb capacitat per a 4 passatgers i ampli maleter.",
            items: {
                taxi: {
                    title: "El Nostre Vehicle",
                    description: "Comoditat i seguretat a cada trajecte."
                },
                airport: {
                    title: "Trasllats a l'Aeroport",
                    description: "Puntualitat pels teus vols nacionals i internacionals."
                },
                hospital: {
                    title: "Cites Mèdiques i Hospitals",
                    description: "Servei prioritari per a trasllats sanitaris."
                },
                station: {
                    title: "Estació de Tren",
                    description: "Connexions ràpides amb estacions de tren i autobús."
                }
            }
        },
        info: {
            title: "Trajectòria Professional",
            experience_prefix: "10 Anys d'",
            experience_highlight: "Experiència",
            description: "Sóc el David, el teu taxista de confiança a Vilassar de Mar. Porto una dècada oferint un servei fiable, puntual i professional als veïns del Maresme.",
            stats: {
                years: "Anys d'Experiència",
                punctuality: "Puntualitat Especialista",
                punctuality_val: "Assegurada",
                hygiene: "Vehicle Higienitzat",
                hygiene_val: "Garantit",
                security: "Seguretat Màxima"
            },
            vehicle: {
                title: "Vehicle Híbrid Premium",
                desc: "Toyota Prius blanc: còmode, ample i impecable."
            }
        },
        contact: {
            title_prefix: "Necessites un",
            title_highlight: "Taxi ara?",
            description: "Estem disponibles per atendre les teves sol·licituds. Et recomanem reservar amb 24 hores d'antelació.",
            cards: {
                call: {
                    title: "Trucada Directa",
                    subtitle: "Amb reserva prèvia de 24h"
                },
                whatsapp: {
                    title: "WhatsApp",
                    value: "Resposta Ràpida",
                    subtitle: "Reserves per xat"
                },
                instagram: {
                    title: "Instagram",
                    subtitle: "Segueix-me per novetats"
                },
                zone: {
                    title: "Zona de Servei",
                    subtitle: "Comarca del Maresme"
                }
            },
            cta: {
                title: "Reserva el teu viatge en segons",
                whatsapp: "Demanar per WhatsApp",
                call: "Trucar al David"
            }
        },
        faq: {
            title_prefix: "Preguntes",
            title_highlight: "Freqüents",
            subtitle: "Resolem els teus Dubtes",
            items: {
                payment: {
                    q: "¿Es pot pagar amb targeta?",
                    a: "Sí, acceptem totes le targetes excepte American Express. També pot pagar amb Bizum per a la seva comoditat."
                },
                child_seat: {
                    q: "¿Té cadireta per a nens?",
                    a: "No disposem de cadireta pròpia al vehicle, però pot portar la seva i jo mateix m'encarregaré d'instal·lar-la de forma segura."
                },
                booking: {
                    q: "¿Es pot reservar amb dies d'antelació?",
                    a: "Sí, pot realitzar les seves reserves amb total antelació per assegurar el seu trajecte."
                },
                luggage: {
                    q: "¿El cotxe té molt de maleter?",
                    a: "Sí, el vehicle compta amb un maleter espaiós amb capacitat per a 4 maletes grans sense problemes."
                }
            }
        },
        footer: {
            description: "Transport fiable i segur des de fa 10 anys. La teva satisfacció i seguretat a cada trajecte són el meu compromís.",
            quick_links: "Enllaços Ràpids",
            contact: "Contacte",
            follow_us: "Segueix-nos",
            booking_notice: "Reserva prèvia 24h",
            region: "Comarca del Maresme",
            experience: "Taxista autoritzat amb 10 anys d'experiència.",
            coded_by: "Codificat per"
        },
        booking: {
            title: "Reserva El Teu Taxi",
            subtitle: "Confirmació immediata per WhatsApp",
            origin: "Origen",
            destination: "Destí",
            date: "Data",
            time: "Hora",
            origin_placeholder: "Recollida (Ex: Estació)",
            destination_placeholder: "Destí (Ex: Aeroport)",
            submit: "Reservar Ara via WhatsApp"
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            gallery: "Gallery",
            info: "Info",
            contact: "Contact",
            call: "Call now",
        },
        hero: {
            title_prefix: "Taxi in",
            title_highlight: "Vilassar de Mar",
            description: "Taxi David: fast, punctual, and safe services in El Maresme, hospitals, and airports. 10 years of experience at your service.",
            whatsapp_btn: "Book via WhatsApp",
            call_btn: "630 449 626",
            cards: {
                experience: {
                    title: "10+ Years Service",
                    desc: "A decade of experience ensuring safe transfers throughout the region."
                },
                vehicle: {
                    title: "Premium Vehicle",
                    desc: "Travel in a Toyota Prius hybrid: clean, spacious, and eco-friendly."
                },
                coverage: {
                    title: "All El Maresme",
                    desc: "We reach any point in the region, hospitals, and airports with 24h advance booking."
                }
            }
        },
        services: {
            title_prefix: "Our",
            title_highlight: "Services",
            description: "We offer personalized transport solutions so you arrive at your destination with total peace of mind.",
            items: {
                urban: {
                    title: "Urban Transport",
                    description: "Trips within Vilassar de Mar and El Maresme. Quick and efficient."
                },
                airport: {
                    title: "Airport Transfer",
                    description: "Punctual service to Barcelona-El Prat Airport. Flight tracking included."
                },
                port: {
                    title: "Port Transfers",
                    description: "Specialized service for transfers to the Barcelona Cruise Terminal and marinas."
                },
                business: {
                    title: "Business Service",
                    description: "Mobility solutions for companies and staff transfers with monthly billing available."
                },
                executive: {
                    title: "Executive Services",
                    description: "Discreet and professional transport for events, dinners, or corporate transfers."
                },
                hospital: {
                    title: "Hospital Service",
                    description: "Safe and comfortable transfers to hospitals in El Maresme and Barcelona."
                },
                long_distance: {
                    title: "Long Distance",
                    description: "National and international trips with fixed rates and maximum comfort."
                },
                waiting: {
                    title: "Waiting Service",
                    description: "We offer waiting and return service for all your trips for your peace of mind."
                }
            }
        },
        gallery: {
            title_prefix: "Our Service in",
            title_highlight: "Images",
            description: "See our vehicle and frequent destinations in Vilassar de Mar.",
            vehicle_info: "Our vehicle has capacity for 4 passengers and ample trunk space.",
            items: {
                taxi: {
                    title: "Our Vehicle",
                    description: "Comfort and safety in every trip."
                },
                airport: {
                    title: "Airport Transfers",
                    description: "Punctuality for your national and international flights."
                },
                hospital: {
                    title: "Medical Appointments",
                    description: "Priority service for medical transfers."
                },
                station: {
                    title: "Train Station",
                    description: "Fast connections with train and bus stations."
                }
            }
        },
        info: {
            title: "Professional Trajectory",
            experience_prefix: "10 Years of",
            experience_highlight: "Experience",
            description: "I am David, your trusted taxi driver in Vilassar de Mar. I have been offering reliable, punctual, and professional service for a decade.",
            stats: {
                years: "Years of Experience",
                punctuality: "Specialist Punctuality",
                punctuality_val: "Assured",
                hygiene: "Sanitized Vehicle",
                hygiene_val: "Guaranteed",
                security: "Maximum Security"
            },
            vehicle: {
                title: "Premium Hybrid Vehicle",
                desc: "White Toyota Prius: comfortable, spacious, and spotless."
            }
        },
        contact: {
            title_prefix: "Need a",
            title_highlight: "Taxi now?",
            description: "We are available for your transport requests. We recommend booking 24 hours in advance.",
            cards: {
                call: {
                    title: "Direct Call",
                    subtitle: "With 24h advance booking"
                },
                whatsapp: {
                    title: "WhatsApp",
                    value: "Fast Response",
                    subtitle: "Book via chat"
                },
                instagram: {
                    title: "Instagram",
                    subtitle: "Follow for updates"
                },
                zone: {
                    title: "Service Zone",
                    subtitle: "Maresme Region"
                }
            },
            cta: {
                title: "Book your trip in seconds",
                whatsapp: "Order via WhatsApp",
                call: "Call David"
            }
        },
        faq: {
            title_prefix: "Frequently Asked",
            title_highlight: "Questions",
            subtitle: "Solving your Doubts",
            items: {
                payment: {
                    q: "Can I pay by card?",
                    a: "Yes, we accept all cards except American Express. You can also pay with Bizum."
                },
                child_seat: {
                    q: "Do you have a child seat?",
                    a: "We don't provide a child seat, but you can bring your own and I will install it safely for you."
                },
                booking: {
                    q: "Can I book in advance?",
                    a: "Yes, you can book well in advance to secure your trip at the time you need."
                },
                luggage: {
                    q: "Is there enough luggage space?",
                    a: "Yes, the vehicle has a spacious trunk capable of fitting 4 large suitcases comfortably."
                }
            }
        },
        footer: {
            description: "Reliable and safe transport for 10 years. Your satisfaction and safety are my commitment.",
            quick_links: "Quick Links",
            contact: "Contact",
            follow_us: "Follow Us",
            booking_notice: "24h advance booking",
            region: "Maresme Region",
            experience: "Authorized taxi driver with 10 years of experience.",
            coded_by: "Coded by"
        },
        booking: {
            title: "Book Your Taxi",
            subtitle: "Immediate confirmation via WhatsApp",
            origin: "Origin",
            destination: "Destination",
            date: "Date",
            time: "Time",
            origin_placeholder: "Pickup (e.g., Station)",
            destination_placeholder: "Destination (e.g., Airport)",
            submit: "Book Now via WhatsApp"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            services: "Services",
            gallery: "Galerie",
            info: "Infos",
            contact: "Contact",
            call: "Appeler",
        },
        hero: {
            title_prefix: "Taxi à",
            title_highlight: "Vilassar de Mar",
            description: "Taxi David : services rapides, ponctuels et sûrs dans le Maresme, hôpitaux et aéroports. 10 ans d'expérience à votre service.",
            whatsapp_btn: "Réserver par WhatsApp",
            call_btn: "630 449 626",
            cards: {
                experience: {
                    title: "10+ Ans de Service",
                    desc: "Une décennie d'expérience pour garantir des transferts sûrs dans toute la région."
                },
                vehicle: {
                    title: "Véhicule Premium",
                    desc: "Voyagez en Toyota Prius hybride : propre, spacieuse et respectueuse de l'environnement."
                },
                coverage: {
                    title: "Tout le Maresme",
                    desc: "Nous desservons toute la région, hôpitaux et aéroports sur réservation 24h à l'avance."
                }
            }
        },
        services: {
            title_prefix: "Nos",
            title_highlight: "Services",
            description: "Nous proposons des solutions de transport personnalisées pour que vous arriviez à destination en toute tranquillité.",
            items: {
                urban: {
                    title: "Transport Urbain",
                    description: "Déplacements dans Vilassar de Mar et le Maresme avec rapidité et efficacité."
                },
                airport: {
                    title: "Transfert Aéroport",
                    description: "Service ponctuel vers l'aéroport de Barcelone-El Prat. Suivi des vols inclus."
                },
                port: {
                    title: "Transferts Portuaires",
                    description: "Service spécialisé pour les transferts vers le Terminal de Croisières et les ports de plaisance."
                },
                business: {
                    title: "Service Entreprises",
                    description: "Solutions de mobilité pour les entreprises et le personnel avec facturation mensuelle."
                },
                executive: {
                    title: "Services Exécutifs",
                    description: "Transport discret et professionnel pour événements, dîners ou transferts corporatifs."
                },
                hospital: {
                    title: "Service Hôpital",
                    description: "Transferts sûrs et confortables vers les hôpitaux du Maresme et de Barcelone."
                },
                long_distance: {
                    title: "Longue Distance",
                    description: "Déplacements nationaux et internationaux avec tarifs fixes et confort maximal."
                },
                waiting: {
                    title: "Service d'Attente",
                    description: "Nous proposons un service d'attente et de retour pour tous vos trajets pour votre tranquillité."
                }
            }
        },
        gallery: {
            title_prefix: "Notre Service en",
            title_highlight: "Images",
            description: "Découvrez le véhicule et les destinations fréquentes de notre service à Vilassar de Mar.",
            vehicle_info: "Notre véhicule peut accueillir 4 passagers et dispose d'un grand coffre.",
            items: {
                taxi: {
                    title: "Notre Véhicule",
                    description: "Confort et sécurité à chaque trajet."
                },
                airport: {
                    title: "Transferts Aéroport",
                    description: "Ponctualité pour vos vols nationaux et internationaux."
                },
                hospital: {
                    title: "Rendez-vous Médicaux",
                    description: "Service prioritaire pour les transferts sanitaires."
                },
                station: {
                    title: "Gare de Train",
                    description: "Connexions rapides avec les gares de train et de bus."
                }
            }
        },
        info: {
            title: "Parcours Professionnel",
            experience_prefix: "10 Ans d'",
            experience_highlight: "Expérience",
            description: "Je suis David, votre chauffeur de taxi de confiance à Vilassar de Mar. J'offre un service fiable, ponctuel et professionnel depuis 10 ans.",
            stats: {
                years: "Ans d'Expérience",
                punctuality: "Ponctualité Spécialiste",
                punctuality_val: "Assurée",
                hygiene: "Véhicule Désinfecté",
                hygiene_val: "Garanti",
                security: "Sécurité Maximale"
            },
            vehicle: {
                title: "Véhicule Hybride Premium",
                desc: "Toyota Prius blanche : confortable, spacieuse et impeccable."
            }
        },
        contact: {
            title_prefix: "Besoin d'un",
            title_highlight: "Taxi maintenant ?",
            description: "Nous sommes disponibles pour répondre à vos demandes. Nous recommandons de réserver 24h à l'avance.",
            cards: {
                call: {
                    title: "Appel Direct",
                    subtitle: "Avec réservation 24h avant"
                },
                whatsapp: {
                    title: "WhatsApp",
                    value: "Réponse Rapide",
                    subtitle: "Réservation par chat"
                },
                instagram: {
                    title: "Instagram",
                    subtitle: "Suivez-moi"
                },
                zone: {
                    title: "Zone de Service",
                    subtitle: "Région du Maresme"
                }
            },
            cta: {
                title: "Réservez votre trajet en quelques secondes",
                whatsapp: "Commander par WhatsApp",
                call: "Appeler David"
            }
        },
        faq: {
            title_prefix: "Questions",
            title_highlight: "Fréquentes",
            subtitle: "Nous répondons à vos doutes",
            items: {
                payment: {
                    q: "Puis-je payer par carte ?",
                    a: "Oui, nous acceptons toutes les cartes sauf American Express. Vous pouvez aussi payer avec Bizum."
                },
                child_seat: {
                    q: "Avez-vous un siège enfant ?",
                    a: "Nous ne fournissons pas de siège auto, mais vous pouvez apporter le vôtre et je l'installerai en toute sécurité."
                },
                booking: {
                    q: "Puis-je réserver à l'avance ?",
                    a: "Oui, vous pouvez réserver longtemps à l'avance pour garantir votre trajet."
                },
                luggage: {
                    q: "Le coffre est-il spacieux ?",
                    a: "Oui, le véhicule dispose d'un coffre spacieux pouvant accueillir 4 grandes valises sans problème."
                }
            }
        },
        footer: {
            description: "Transport fiable et sûr depuis 10 ans. Votre satisfaction et votre sécurité sont mon engagement.",
            quick_links: "Liens Rapides",
            contact: "Contact",
            follow_us: "Suivez-nous",
            booking_notice: "Réservation 24h avant",
            region: "Région du Maresme",
            experience: "Chauffeur agréé avec 10 ans d'expérience.",
            coded_by: "Codé par"
        },
        booking: {
            title: "Réservez Votre Taxi",
            subtitle: "Confirmation immédiate par WhatsApp",
            origin: "Origine",
            destination: "Destination",
            date: "Date",
            time: "Heure",
            origin_placeholder: "Départ (Ex: Gare)",
            destination_placeholder: "Arrivée (Ex: Aéroport)",
            submit: "Réserver via WhatsApp"
        }
    }
};
