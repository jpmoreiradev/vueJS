<template>
  <div>
    <PrimeiroComponente />
    <p>Os dados estão em: {{dados}}.</p>
    <SegundoComponente />
    <Pessoa />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import SegundoComponente from './components/SegundoComponente.vue'
  import Pessoa from './components/Pessoa.vue'
  export default{
    name: 'App',
    components: {
      PrimeiroComponente,
      SegundoComponente,
      Pessoa
    },
    data(){
      return{
        dados: Pessoa
      }
    }
  }
</script>
