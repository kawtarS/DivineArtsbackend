const navigation = {
    categories: [
        {
            id: 'oeuvres',
            name: 'Œuvres',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'peinture',
                    name: 'Peinture',
                    subSections: [
                        {
                            id: 'peinture_theme',
                            name: 'Themes en peinture',
                            items: [
                                { name: 'Nature morte', href: '#' },
                                { name: 'Nu', href: '#' },
                                { name: 'Paysage', href: '#' },
                                { name: 'Portrait', href: '#' },
                                { name: 'Scene de genre', href: '#' },
                                { name: 'Street Art', href: '#' },
                            ]
                        },
                        {
                            id: 'peinture_styles',
                            name: 'Styles en peinture',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Classique', href: '#' },
                                { name: 'Fantaisie', href: '#' },
                                { name: 'Figuratif', href: '#' },
                                { name: 'Pop Art', href: '#' },
                                { name: 'Semi-Abstrait', href: '#' },
                            ]
                        },
                    ]
                },
                {
                    id: 'sculpture',
                    name: 'Sculpture',
                    subSections: [
                        {
                            id: 'types_sculpture',
                            name: 'Types de sculpture',
                            items: [
                                { name: 'Buste', href: '#' },
                                { name: 'Installation', href: '#' },
                                { name: 'Objet', href: '#' },
                                { name: 'Objet mural', href: '#' },
                                { name: "Sculpture d'extérieur", href: '#' },
                                { name: 'Sculpture de plein-pied', href: '#' },
                            ]
                        },
                        {
                            id: 'materiaux_sculpture',
                            name: 'Materiaux en sculpture',
                            items: [
                                { name: 'Acier', href: '#' },
                                { name: 'Aluminium', href: '#' },
                                { name: 'Bois', href: '#' },
                                { name: 'Bronze', href: '#' },
                                { name: 'Néon', href: '#' },
                                { name: 'Résine', href: '#' },
                            ]
                        },
                    ]
                },
                {

                    id: 'photographie',
                    name: 'Photographie',
                    subSections: [
                        {
                            id: 'theme_en_photographie',
                            name: 'Theme en Photographie',
                            items: [
                                { name: 'Abstrait', href: '#' },
                                { name: 'Documentaire', href: '#' },
                                { name: 'Mise en scène', href: '#' },
                                { name: 'Nature', href: '#' },
                                { name: "Portrait", href: '#' },
                                { name: 'Voyage', href: '#' },
                            ]
                        },
                        {
                            id: 'materiaux_sculpture',
                            name: 'Les styles en photographie',
                            items: [
                                { name: 'Couleur', href: '#' },
                                { name: 'Création digitale', href: '#' },
                                { name: 'Moderne', href: '#' },
                                { name: 'Noir et blanc', href: '#' },
                                { name: 'Panoramique', href: '#' },
                                { name: 'Photo de rue', href: '#' },
                            ]
                        },
                    ]
                },
            ],
        },
        {
            id: 'artistes',
            name: 'Artistes',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'type_artistes',
                    name: "Type d'artistes",
                    items: [
                        { name: 'Peintres', href: '#' },
                        { name: 'Photographes', href: '#' },
                        { name: 'Sculpteurs', href: '#' },
                    ]
                },
            ]
        },
        {
            id: 'collections',
            name: 'Collections',
            featured: [],
            sections: []
        }
    ],
}


export default navigation