import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4caf50',
        secondary: '#8bc34a',
        accent: '#cddc39',
        error: '#f44336',
        info: '#607d8b',
        success: '#009688',
        warning: '#ff5722'
      },
    },
  },
});
