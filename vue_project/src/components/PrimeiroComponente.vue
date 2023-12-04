<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é: {{nome}} e tenho {{idade}} anos.
        </p>
    </div>
</template>

<script>
    export default{
        name: 'PrimeiroComponente',
        data(){
            return{
                nome: 'Wendel',
                idade: 18
            }
        }
    }
</script>

<style>

/* Estilo para o componente pai */
div {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  /* Estilo para o formulário dentro do componente pai */
  form {
    margin-bottom: 20px;
  }
  
  /* Estilo para os campos do formulário */
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
  
  /* Estilo para o botão de envio */
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  
  /* Estilo para os dados exibidos após o envio do formulário */
  p {
    margin-bottom: 10px;
  }
  
  /* Estilo para destacar os dados */
  p strong {
    font-weight: bold;
    color: #333;
  }
  
</style>