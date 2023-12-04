const MyApp = {
  data(){
      return{
          nome: "",
          inputName: ""
      }
  },

  methods: {
    submitForm(e) {
      e.preventDefault()
      this.nome = this.inputName;
    }
  }
}
Vue.createApp(MyApp).mount("#app");