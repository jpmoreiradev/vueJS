<template>
  <div class="container">
    <button @click="changePalette" :class="{ 'dark-btn': currentTheme === 'Dark theme', 'light-btn': currentTheme === 'Light theme' }">{{ currentTheme }}</button>
    <FormData @form-submitted="handleFormSubmitted" />
  </div>
  <div class="result" :style="{ backgroundColor: selectedPalette.background, color: selectedPalette.text }">
    <h1 class="result-title">{{ formData.formName }}</h1>
    <p> {{ formData.name }} </p>
    <p>  {{ formData.email }} </p>
    <p>  {{ formData.age }} </p>
    <p>  {{ formData.about }} </p>
  </div>
</template>

<script>
import FormData from './components/Form.vue';

export default {
  components: {
    FormData
  },
  data() {
    return {
      currentTheme: 'Dark theme',
      formData: {
        name: '',
        email: '',
        age: null,
        about: '',
        formName: '',
      },
      palettes: {
        dark: {
          background: '#333', 
          text: '#fff'
        },
        light: {
          background: '#fff',
          text: '#333'
        },
      },
      selectedPalette: {
        background: '#fff',
        text: '#000'
      } 
    };
  },
  methods: {
    handleFormSubmitted(formData) {
      this.formData = formData;
    },
   
    changePalette() {
      if (this.currentTheme === 'Light theme') {
        this.currentTheme = 'Dark theme';
        this.selectedPalette = this.palettes.light;
      } else {
        this.currentTheme = 'Light theme';
        this.selectedPalette = this.palettes.dark;
      }

      document.body.style.backgroundColor = this.selectedPalette.background;
      document.body.style.color = this.selectedPalette.text;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.container {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 550px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}


button {
margin-top: 25px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
}

.dark-btn {
  background-color: #333;
  color: #fff;
}

.light-btn {
  background-color: #fff;
  color: #333;
}

.result {
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.result-title {
  color: #3498db;
  font-size: 24px;
  margin-bottom: 15px;
}

.result p {
  margin: 10px 0;
  font-size: 16px;
}

</style>
