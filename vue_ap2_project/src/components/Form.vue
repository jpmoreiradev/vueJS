<template>
  <div>
    <h1>Person Data</h1>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Typing person data</legend>
        <p>
          <label>Name:</label>
          <input v-model="formData.name" placeholder="type your name" type="text" name="Name" id="name" required />
        </p>
        <p>
          <label>Email:</label>
          <input v-model="formData.email" placeholder="type your email" type="email" name="Email" id="email" required />
        </p>
        <p>
          <label>Age:</label>
          <input v-model="formData.age" placeholder="type your age" type="number" name="Age" id="age" required />
        </p>
        <p>
          <label>Description about you:</label>
          <br>
          <textarea v-model="formData.about" name="about" cols="50" rows="10" maxlength="128"></textarea>
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
        about: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('form-submitted', this.formData);
    }
  }
};
</script>
