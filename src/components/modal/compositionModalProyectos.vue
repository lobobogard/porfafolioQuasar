<template lang="">
  <div>
    <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="persistente" persistente transition-show="scale" transition-hide="scale">
      <q-card class="text-white" style="width: 700px; max-width: 80vw;">
        <q-card-section class="bg-teal">
          <div class="text-h6 text-center">PROYECT GO</div>
        </q-card-section>

        <q-card-section class="q-pt-none bg-teal-1 text-teal q-pt-md">
          <p class="text-weight-bold">BRIEF EXPLANATION</p>
          {{explicacion}}
        </q-card-section>

        <q-card-section class="q-pt-none bg-teal-1 text-teal q-pt-md text-center pointer-modal">
         <a :href="url" target="_blank"><q-img src="~assets/iconos/proyecto.png" spinner-color="white" fit="fill" style="height: 40px; max-width: 40px" class="img-exp" /></a>
        </q-card-section>

        <q-card-section class="q-pt-none bg-teal-1 text-teal q-pt-md">
          <label class="text-weight-bold">NOTE:</label> <label>{{nota}}</label>
        </q-card-section>

        <q-card-actions align="right" class="bg-teal text-white q-pr-md">
          <q-btn push round color="cyan-10" icon="arrow_back_ios_new" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const persistente = ref(false)
    const explicacion = ref('')
    const nota = ref('')
    const url = ref('')
    const modalProyecto = (lenguaje: string) => {
      persistente.value = true
      if (lenguaje === 'go') {
        explicacion.value = 'Aqui te muestro un proyecto realizado en golang si puedes ver abajo se encuentra algunas de las herramientas que utilizamos para desarrollarlo solo presiona el icono del proyecto para acceder.'
        nota.value = 'Al final del desarrollo de los detalles viene un archivo pdf de forma todo resumido para ver las herramientas del desarrollo del proyecto.'
        url.value = 'http://localhost:8080/projectGolan'
      }

      if (lenguaje === 'php') {
        explicacion.value = 'Aqui te muestro un proyecto realizado en golang si puedes ver abajo se encuentra algunas de las herramientas que utilizamos para desarrollarlo.'
        nota.value = 'Al final del desarrollo de los detalles viene un archivo pdf de forma todo resumido para ver las herramientas del desarrollo del proyecto.'
        url.value = 'https://www.freecodecamp.org/'
      }
    }

    return { modalProyecto, persistente, explicacion, nota, url }
  }
})
</script>

<style lang="css" scoped>
.img-modal {
  height: 40px; max-width: 40px
}
.pointer-modal {
  cursor: pointer
}
</style>
