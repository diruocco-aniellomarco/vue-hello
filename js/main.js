const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Prof!',
        immagine: 'https://picsum.photos/200'
      }
    }
  }).mount('#app')