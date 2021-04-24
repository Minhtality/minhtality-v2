export default {
    component: 'Homepage Hero',
    props: {
        id: 'Homepage',
        heading: 'Minh Tran',
        description: 'Frontend Developer',
        heroImage: {
            desktop: {
                src: 'https://via.placeholder.com/1920x1080',
                alt: 'Minhtality'
            }
        },
        cta: {
            text: 'Contact',
            href: 'mailto:mtran1712@gmail.com',
            target: '_blank',
        }
        
    }
}