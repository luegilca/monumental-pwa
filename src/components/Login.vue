<template>
  <div>
    <p>Correo Electrónico: </p> 
    <input type="text" v-model="email">
    <p>Contraseña: </p> 
    <input type="password" v-model="password">
    <p></p>
    <button @click="login">Iniciar Sesión</button>
  </div>
</template>
<script>
export default {
  data( ) {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login( ) {
      this.$router.push( { name: 'Home' } );
    }  
  }
}
</script>