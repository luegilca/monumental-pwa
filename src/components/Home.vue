<template>
  <div>
    <h2>You are currently at: </h2>
    <p>X: {{posX}}</p>
    <p>Y: {{posY}}</p>
    <button @click="changeStatus">{{ !status ? 'Iniciar la búsqueda' : 'Parar de buscar' }}</button>
  </div>
</template>
<script>
export default {
  data( ) {
    return {
      status: false,
      posX: null,
      posY: null
    }
  },
  methods: {
    changeStatus( ) {
      this.status = !this.status;
      this.getLocation( );
    },
    getLocation( ) {
      if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( this.showPosition );
      }
      else {
        alert( "Geo Location not supported by browser" );
      }
    },
    showPosition( position ) {
      this.posX = position.coords.longitude;
      this.posY = position.coords.latitude;
    }
  }
}
</script>
