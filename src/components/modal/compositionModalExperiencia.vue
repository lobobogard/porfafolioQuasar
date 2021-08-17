<template lang="">
  <div>
    <div class="q-pa-md q-gutter-sm">
    <!-- <q-btn label="Click me" color="primary" @click="modalExperiencia(1)" /> -->

    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="text-white" style="width: 700px; max-width: 80vw;">
        <q-card-section class="bg-teal">
          <div class="text-h6 text-center">LENGUAJE GO</div>
        </q-card-section>

        <q-card-section class="q-pt-none bg-teal-1 text-teal q-pt-md">
          <p class="text-weight-bold">Mi experiencia</p>
          {{experiencia}}
        </q-card-section>

        <q-card-section class="q-pt-none bg-teal-1 text-teal q-pt-md">
          <p class="text-weight-bold">{{pregunta}}</p>
          {{respuesta}}
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
import { ref, reactive, defineComponent } from 'vue'

export default defineComponent({
  // data () {
  //   return {
  //     persistent: false,
  //     experiencia: '',
  //     pregunta: '',
  //     respuesta: '',
  //     opcion: [
  //       {'experiencia': 'llevo manejando golang tan solo dos meses que para mi lo mas importante sera el manejo de structs, slices, funciones, metodos, concurrencias, control statements etc, todo el tour de golang y actualmente sigo aprendiendo caracteristicas del lenguaje entre otras cosas mi meta es hacerme experto en golang especializandome en el manejo de las concurrencias la cual daria grandes soluciones a las grandes empresas.',
  //        'pregunta': 'Porque golang?',
  //        'respuesta': 'Despues de aprender laravel estaba indeciso en que lenguaje aprender que era escala, nodejs or principalmente rust al final decidi que golang era la mejor opción como apuesta en el futuro de que sera uno de los lenguajes mas demandados ya que sus caracteristicas y filosofias en lo personal creo que son de lo mas correcto pero nuevamente aclaro es en mi opinión personal.'
  //       },
  //       {'experiencia': 'llevoxx manejando golang tan solo dos meses que para mi lo mas importante sera el manejo de structs, slices, funciones, metodos, concurrencias, control statements etc, todo el tour de golang y actualmente sigo aprendiendo caracteristicas del lenguaje entre otras cosas mi meta es hacerme experto en golang especializandome en el manejo de las concurrencias la cual daria grandes soluciones a las grandes empresas.',
  //        'pregunta': 'Porquexx golang?',
  //        'respuesta': 'Despuesxx de aprender laravel estaba indeciso en que lenguaje aprender que era escala, nodejs or principalmente rust al final decidi que golang era la mejor opción como apuesta en el futuro de que sera uno de los lenguajes mas demandados ya que sus caracteristicas y filosofias en lo personal creo que son de lo mas correcto pero nuevamente aclaro es en mi opinión personal.'
  //       }
  //     ]
  //   }
  // },
  // methods: {
  //    modalExperiencia (opcion: number) {
  //      this.persistent = true
  //      this.experiencia = this.opcion[opcion].experiencia
  //      this.pregunta = this.opcion[opcion].pregunta
  //      this.respuesta = this.opcion[opcion].respuesta
  //    }
  // }
  setup () {
    const persistent = ref(false)
    const experiencia = ref('')
    const pregunta = ref('')
    const respuesta = ref('')
    const opciones = reactive([
      {
        experiencia: 'llevo manejando golang tan solo dos meses que para mi lo mas importante sera el manejo de structs, slices, funciones, metodos, concurrencias, control statements etc, todo el tour de golang y actualmente sigo aprendiendo caracteristicas del lenguaje entre otras cosas mi meta es hacerme experto en golang especializandome en el manejo de las concurrencias la cual daria grandes soluciones a las grandes empresas.',
        pregunta: 'Porque golang?',
        respuesta: 'Despues de aprender laravel estaba indeciso en que lenguaje aprender que era escala, nodejs or principalmente rust al final decidi que golang era la mejor opción como apuesta en el futuro de que sera uno de los lenguajes mas demandados ya que sus caracteristicas y filosofias en lo personal creo que son de lo mas correcto pero nuevamente aclaro es en mi opinión personal.'
      },
      {
        experiencia: 'llevoxx manejando golang tan solo dos meses que para mi lo mas importante sera el manejo de structs, slices, funciones, metodos, concurrencias, control statements etc, todo el tour de golang y actualmente sigo aprendiendo caracteristicas del lenguaje entre otras cosas mi meta es hacerme experto en golang especializandome en el manejo de las concurrencias la cual daria grandes soluciones a las grandes empresas.',
        pregunta: 'Porquexx golang?',
        respuesta: 'Despuesxx de aprender laravel estaba indeciso en que lenguaje aprender que era escala, nodejs or principalmente rust al final decidi que golang era la mejor opción como apuesta en el futuro de que sera uno de los lenguajes mas demandados ya que sus caracteristicas y filosofias en lo personal creo que son de lo mas correcto pero nuevamente aclaro es en mi opinión personal.'
      }
    ])
    const modalExperiencia = (lenguaje: string, opcion: number) => {
      persistent.value = true
      if (lenguaje === 'go') {
        experiencia.value = opciones[opcion].experiencia
        pregunta.value = opciones[opcion].pregunta
        respuesta.value = opciones[opcion].respuesta
      }

      if (lenguaje === 'php') {
        experiencia.value = opciones[opcion].experiencia
        pregunta.value = opciones[opcion].pregunta
        respuesta.value = opciones[opcion].respuesta
      }
    }

    return { modalExperiencia, persistent, experiencia, pregunta, respuesta }
  }
})
</script>

<style lang="css">
.img-modal {
  height: 40px; max-width: 40px
}
.pointer-modal {
  cursor: pointer
}
</style>
