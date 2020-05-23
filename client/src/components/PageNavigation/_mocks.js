export default {
  props: {
    position: '',
    fullWidth: false,
    theme: 'default',
    logo: {
      desktop: {
        image: 'https://via.placeholder.com/150?desktop-logo',
        text: 'Minh M. Tran',
        alt: 'brand logo'
      },
      tablet: null,
      mobile: {
        image: 'https://via.placeholder.com/mobile-logo',
        text: 'Minhtality',
        alt: 'brand logo'
      }
    },
    links: [1, 2, 3]
  }
};
