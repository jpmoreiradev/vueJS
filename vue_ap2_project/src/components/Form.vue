<template>
  <div class="form">
    <h1>Person Data</h1>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Typing person data</legend>
        <p>
          <label>Name:</label>
          <br>
          <input v-model="formData.name" placeholder="type your name" type="text" name="Name" id="name" required />
        </p>
        <p>
          <label>Email:</label>
          <br>
          <input v-model="formData.email" placeholder="type your email" type="email" name="Email" id="email" required />
        </p>
        <p>
          <label> Age:</label> 
          <br>
          <input v-model="formData.age" placeholder="type your age" type="number" name="Age" id="age" min="0" max="125" required />
        </p>
        <p>
          <label>Description about you:</label>
          <br>
          <textarea v-model="formData.about" name="about" cols="50" rows="10" maxlength="128" required> </textarea>
        </p>
        <input type="submit" value="Submit">
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormData',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        age: null,
        about: '',
        formName: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      const formattedData = {
        name: `Name: ${this.formData.name}`,
        email: `Email: ${this.formData.email}`,
        age: `Age: ${this.formData.age}`,
        about: `About: ${this.formData.about}`,
        formName: 'Form Result'
      };
      this.$emit('form-submitted', formattedData);

      this.formData = {
        name: '',
        email: '',
        age: null,
        about: '',
        formName: ''
      }

    }
  }
};
</script>

<style>


  input,
  textarea {
    width: 95%;
    padding: 8px;
  }

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  margin-left: 10px;
}
fieldset {
  border: 2px solid black;
  border-radius: 8px;
  margin-top: 0px;
  margin-bottom: 80px;
}
h1 {
  margin-top: 0px;
  margin-bottom: 10px;
}


</style>