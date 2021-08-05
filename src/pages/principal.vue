<template>
  <q-page class="fondo">
    <compositionInicio/>
  <br>
    <compositionExperiencia/>
   <br>
   <br>
  </q-page>
</template>
<script>
import compositionInicio from 'components/compositionInicio.vue'
import compositionExperiencia from 'components/compositionExperiencia.vue'

export default {
  components: {
    compositionInicio,
    compositionExperiencia
  },
  name: 'prueba',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css">

</style>
