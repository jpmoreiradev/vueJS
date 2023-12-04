<template>
  <div>
    <FormData @form-submitted="handleFormSubmitted" />
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Age: {{ formData.age }}</p>
    <p>About: {{ formData.about }}</p>
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
      formData: {
        name: '',
        email: '',
        age: null,
        about: ''
      }
    };
  },
  methods: {
    handleFormSubmitted(formData) {
      this.formData = formData;
    }
  }
};
</script>

<style>

div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}


input[type="submit"] {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}


p {
  margin-bottom: 10px;
}


p strong {
  font-weight: bold;
  color: #333;
}

</style>
