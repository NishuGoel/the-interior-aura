// Pricing note: the ₹40/sq ft nylon carpet rate is confirmed from the company's
// public IndiaMART listing. All other prices are indicative Gurgaon-market
// starting rates ("from ₹X") — adjust here as the business confirms its list.

export const company = {
	name: 'The Interior Aura',
	tagline: 'Surfaces, considered',
	description:
		'Interior surfaces, considered — flooring, walls, ceilings and soft layers, sourced and crafted by hand in India.',
	established: 2022,
	address: {
		line1: '820/28, Jyoti Park, Gali No. 13',
		line2: 'Sector 7 Extension, Gurugram',
		state: 'Haryana',
		pincode: '122006',
		full: 'The Interior Aura, Sector 7 Extension, Gurugram, Haryana 122006, India'
	},
	gst: '06CENPG0052F2ZV',
	serviceAreas: ['Gurgaon', 'Faridabad', 'Manesar', 'Sohna', 'Delhi NCR'],
	contactPerson: 'Saksham Goel',
	phone: '+91 80477 92861',
	phoneHref: 'tel:+918047792861',
	email: 'hello@theinterioraura.com',
	hours: 'Mon – Sat: 10:00 AM – 7:00 PM'
};

export interface Product {
	name: string;
	nameDe: string;
	description: string;
	descriptionDe: string;
	image: string;
	price: string;
	unit: string;
}

export interface Collection {
	slug: string;
	title: string;
	shortTitle: string;
	layerNo: string;
	plate: string;
	/** Photograph shown in this collection's plate on the home and overview pages. */
	image: string;
	term: string;
	description: string;
	kinds: string;
	scene: 'scene-warm' | 'scene-clay' | 'scene-green' | 'scene-stone' | 'scene-soft';
	darkPlate: boolean;
	products: Product[];
}

export const collections: Collection[] = [
	{
		slug: 'flooring',
		title: 'Flooring',
		shortTitle: 'Flooring',
		layerNo: 'Layer i',
		plate: 'Pl. 02 — Flooring',
		image: '/images/plate-flooring.jpg',
		term: '— underfoot',
		description:
			'The plane you live on, and the one a room is judged by first. Warm, quiet, and built to last a generation.',
		kinds:
			'Engineered & laminate wood · SPC stone-composite · luxury vinyl tile & plank · waterproof matte finishes',
		scene: 'scene-warm',
		darkPlate: true,
		products: [
			{
				name: 'Laminate wood',
				nameDe: 'Laminatparkett',
				description:
					'High-density laminate in 8–12 mm — oak, walnut, maple and teak, in straight plank.',
				descriptionDe: 'Hochdichtes Laminat in 8–12 mm — Eiche, Walnuss, Ahorn und Teak, in gerader Diele.',
				image: '/images/laminate.jpg',
				price: 'from ₹75',
				unit: 'sq ft'
			},
			{
				name: 'Herringbone & chevron',
				nameDe: 'Fischgrät & Chevron',
				description: 'Patterned wood flooring, cut and laid for rooms that deserve ceremony.',
				descriptionDe: 'Gemustertes Holzparkett, zugeschnitten und verlegt für Räume mit Anspruch.',
				image: '/images/herringbone.jpg',
				price: 'from ₹120',
				unit: 'sq ft'
			},
			{
				name: 'SPC stone-composite',
				nameDe: 'SPC-Steinverbund',
				description:
					'Fully waterproof stone-polymer planks with a click-lock fit. Warm underfoot, calm to live with.',
				descriptionDe: 'Vollständig wasserfeste Stein-Polymer-Dielen mit Klicksystem. Warm unter den Füßen, ruhig im Alltag.',
				image: '/images/spc.jpg',
				price: 'from ₹90',
				unit: 'sq ft'
			},
			{
				name: 'Luxury vinyl tile & plank',
				nameDe: 'Luxus-Vinyl in Fliese & Diele',
				description:
					'Quiet, resilient vinyl in wood and stone readings — for hardworking rooms.',
				descriptionDe: 'Leises, strapazierfähiges Vinyl in Holz- und Steinoptik — für stark genutzte Räume.',
				image: '/images/lvt.jpg',
				price: 'from ₹35',
				unit: 'sq ft'
			},
			{
				name: 'Deck flooring',
				nameDe: 'Terrassendielen',
				description: 'Weathered-in composite decking for balconies, terraces and open air.',
				descriptionDe: 'Witterungsbeständige Kompositdielen für Balkon, Terrasse und den Außenbereich.',
				image: '/images/deck.jpg',
				price: 'from ₹180',
				unit: 'sq ft'
			}
		]
	},
	{
		slug: 'walls',
		title: 'Walls',
		shortTitle: 'Walls & wallpaper',
		layerNo: 'Layer ii',
		plate: 'Pl. 03 — Walls',
		image: '/images/plate-walls.jpg',
		term: '— the vertical plane',
		description:
			'Where a room finds its character. From the barely-there to the unmistakably ornate, made to your wall and your mood.',
		kinds:
			'Designer & imported wallpaper · PVC & WPC panelling · charcoal & louvered panels · custom and royal patterns',
		scene: 'scene-clay',
		darkPlate: false,
		products: [
			{
				name: 'Designer wallpaper',
				nameDe: 'Designertapeten',
				description:
					'Brand and imported papers — botanical, geometric, jewel-toned. Washable, long-lived.',
				descriptionDe: 'Marken- und Importtapeten — botanisch, geometrisch, in Juwelentönen. Abwaschbar und langlebig.',
				image: '/images/wallpaper-designer.jpg',
				price: 'from ₹1,500',
				unit: 'roll'
			},
			{
				name: 'Custom-printed murals',
				nameDe: 'Individuell bedruckte Wandbilder',
				description: 'Your artwork, photograph or pattern, printed to the exact wall.',
				descriptionDe: 'Ihr Motiv, Foto oder Muster, passgenau auf die Wand gedruckt.',
				image: '/images/wallpaper-custom.jpg',
				price: 'from ₹80',
				unit: 'sq ft'
			},
			{
				name: 'PVC & WPC panelling',
				nameDe: 'PVC- & WPC-Paneele',
				description:
					'Fluted, louvered and wood-grain panels — moisture-proof and made to meet cleanly.',
				descriptionDe: 'Geriffelte, Lamellen- und Holzdekor-Paneele — feuchtigkeitsbeständig und sauber gefügt.',
				image: '/images/panelling.jpg',
				price: 'from ₹60',
				unit: 'sq ft'
			},
			{
				name: 'HD & vinyl-backed paper',
				nameDe: 'HD- & vinylkaschierte Tapeten',
				description: 'Heavy-duty textured papers for commercial walls and high-touch rooms.',
				descriptionDe: 'Robuste Strukturtapeten für gewerbliche Wände und stark beanspruchte Räume.',
				image: '/images/wallpaper-hd.jpg',
				price: 'from ₹2,200',
				unit: 'roll'
			}
		]
	},
	{
		slug: 'ceilings',
		title: 'Ceilings',
		shortTitle: 'Ceilings',
		layerNo: 'Layer iii',
		plate: 'Pl. 04 — Ceilings',
		image: '/images/plate-ceilings.jpg',
		term: '— the fifth wall',
		description:
			'The surface most rooms forget. Dressed well, it is the difference between a space and a setting.',
		kinds: 'PVC & WPC ceiling panels · decorative false ceilings · grid systems · feature ceiling work',
		scene: 'scene-green',
		darkPlate: true,
		products: [
			{
				name: 'Decorative false ceilings',
				nameDe: 'Dekorative abgehängte Decken',
				description: 'Coves, trays and shadow lines — the quiet architecture overhead.',
				descriptionDe: 'Voutenlicht, Deckenspiegel und Schattenfugen — die leise Architektur über Ihnen.',
				image: '/images/ceiling-false.jpg',
				price: 'from ₹85',
				unit: 'sq ft'
			},
			{
				name: 'Feature & cove work',
				nameDe: 'Licht- & Voutendecken',
				description:
					'Timber-lined coves and sculpted features, drawn to the room and lit from within.',
				descriptionDe: 'Holzgefasste Vouten und skulpturale Deckenelemente, auf den Raum gezeichnet und von innen beleuchtet.',
				image: '/images/ceiling-feature.jpg',
				price: 'from ₹120',
				unit: 'sq ft'
			}
		]
	},
	{
		slug: 'carpets',
		title: 'Carpets & Textiles',
		shortTitle: 'Carpets',
		layerNo: 'Layer iv',
		plate: 'Pl. 05 — Carpets & Textiles',
		image: '/images/plate-carpets.jpg',
		term: '— the soft layer',
		description:
			'The final layer, and the one you feel. Warmth, hush and texture that turn a finished room into a lived-in one.',
		kinds:
			'Designer & printed carpets · modular carpet tiles · wall-to-wall · hand-loom floor pieces',
		scene: 'scene-soft',
		darkPlate: true,
		products: [
			{
				name: 'Nylon carpet, fitted',
				nameDe: 'Nylonteppich, verlegt',
				description: 'The house staple — soft, even, everyday. Material and fitting included.',
				descriptionDe: 'Der Klassiker des Hauses — weich, gleichmäßig, alltagstauglich. Material und Verlegung inklusive.',
				image: '/images/carpet-fitted.jpg',
				price: '₹40',
				unit: 'sq ft'
			},
			{
				name: 'Modular carpet tiles',
				nameDe: 'Modulare Teppichfliesen',
				description: 'Tiles for offices and studios — replace one, not the room.',
				descriptionDe: 'Fliesen für Büros und Studios — eine austauschen statt den ganzen Raum.',
				image: '/images/carpet-tiles.jpg',
				price: 'from ₹55',
				unit: 'sq ft'
			}
		]
	}
];

export const heroImage = '/images/plate-hero.jpg';
export const atelierImage = '/images/plate-atelier.jpg';

export interface Service {
	name: string;
	nameDe: string;
	description: string;
	descriptionDe: string;
}

export const services: Service[] = [
	{
		name: 'Doorstep sampling',
		nameDe: 'Muster an Ihrer Tür',
		description:
			'We bring physical samples to your home or office, so you judge the material in the room it will live in.',
		descriptionDe:
			'Wir bringen physische Muster zu Ihnen nach Hause oder ins Büro — Sie beurteilen das Material im Raum, in dem es leben wird.'
	},
	{
		name: 'Measurement & estimate',
		nameDe: 'Aufmaß & Angebot',
		description:
			'Precise measurement and an honest, all-inclusive estimate before any work begins.',
		descriptionDe: 'Präzises Aufmaß und ein ehrliches Komplettangebot, bevor die Arbeit beginnt.'
	},
	{
		name: 'Fitting & installation',
		nameDe: 'Verlegung & Montage',
		description:
			'Flooring, wallpaper, panelling and ceilings — laid and finished by our own hands.',
		descriptionDe:
			'Böden, Tapeten, Paneele und Decken — verlegt und vollendet von unseren eigenen Händen.'
	},
	{
		name: 'Custom & bespoke work',
		nameDe: 'Maßanfertigung',
		description:
			'Printed wallpaper from your artwork, feature ceilings, heritage panelling — made to the room.',
		descriptionDe:
			'Bedruckte Tapeten nach Ihrem Motiv, gestaltete Decken, Heritage-Paneele — gefertigt für den Raum.'
	},
	{
		name: 'Trade & projects',
		nameDe: 'Handel & Projekte',
		description:
			'Supply and fit-out for builders, designers and commercial projects across Delhi NCR.',
		descriptionDe:
			'Lieferung und Ausbau für Bauträger, Planer und Gewerbeprojekte im Raum Delhi NCR.'
	},
	{
		name: 'Aftercare',
		nameDe: 'Nachsorge',
		description:
			'Guidance on living with each surface, and repair or refit when you need us again.',
		descriptionDe:
			'Rat für das Leben mit jeder Oberfläche — und Reparatur oder Neuverlegung, wenn Sie uns wieder brauchen.'
	}
];
