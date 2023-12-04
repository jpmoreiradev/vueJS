<template>
    <h1>Meu nome é: {{nome}}. </h1>
</template>

<script>
export default{
    name: 'SegundoComponente',
    data(){
        return{
            nome: 'Valor'
        }
    },
    created(){
        setTimeout(() => {
            this.nome = 'Wendel'
        }, 1000);
    },
    mounted(){
        setTimeout(() => {
            this.nome = 'Ana'
        }, 2000);
    }
}
</script>
