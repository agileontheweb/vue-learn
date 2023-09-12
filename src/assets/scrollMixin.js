export default {
    methods: {
      scrollToSection(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  