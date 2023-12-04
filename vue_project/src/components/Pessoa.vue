<template>
    <div>
        <h2>Esta é a descrição de uma pessoa: {{ nome }} </h2>
        <Informacao />
        <Form />
    </div>
</template>

<script>
import Informacao from './Informacao.vue'
import Form from './Form.vue'
export default{
    name: 'Pessoa',
    components: {
        Informacao,
        Form
    },
    data(){
        return{
            nome: 'Wendel'
        }
    }
}
</script>