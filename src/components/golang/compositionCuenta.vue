<template lang="">
  <div>
    <q-form action="https://some-url.com" method="post">
       <div class="row q-mt-md justify-center" style="height: 0px">
         <div class="col-3">
          <div class="row shadow-2 redondo bg-pink-10">
            <div class="col">
               <div class="row text-center">
                 <div class="col q-mt-md">
                    <label class="text-white font">Create Account</label>
                 </div>
              </div>
              <div class="row text-center">
                 <div class="col">
                    <q-img src="~assets/golang/project.png" spinner-color="white" fit="fill" style="height: 120px; max-width: 120px" class="img-exp q-mt-sm" />
                 </div>
              </div>
              <div class="row justify-center q-mt-xl">
                 <div class="col-9">
                     <q-input rounded outlined dense v-model="nombre" label="Name" label-color="white" bg-color="pink-8">
                      <template v-slot:append>
                        <q-icon name="account_circle" color="white"/>
                      </template>
                    </q-input>
                 </div>
              </div>
               <div class="row justify-center">
                 <q-slide-transition>
                 <div class="col-9 q-ml-md" v-show="validaNombre">
                    <label class="font_advertencia">{{validaNombre}} </label><q-icon class="q-pl-sm" name="info" style="color: white; font-size: 1em;" />
                 </div>
                 </q-slide-transition>
              </div>
              <div class="row justify-center q-mt-md">
                 <div class="col-9">
                     <q-input rounded outlined dense v-model="contrasena" :type="visibilidad" label="password" class="text-color-white" label-color="white" bg-color="pink-8" >
                      <template v-slot:append>
                        <q-icon name="visibility" color="white" @click="visibilidadPassword" class="pointer"/>
                      </template>
                    </q-input>
                 </div>
              </div>
              <div class="row justify-center">
                 <q-slide-transition>
                 <div class="col-9 q-ml-md" v-show="validaContrasena">
                    <label class="font_advertencia"> {{validaContrasena}} </label><q-icon class="q-pl-sm" name="info" style="color: white; font-size: 1em;" />
                 </div>
                 </q-slide-transition>
              </div>
              <div class="row justify-center q-mt-md text-center">
                 <div class="col-9">
                     <q-checkbox class="font_checkbox" keep-color v-model="cyan" size="xs" label="keep Me Logged In" color="pink-8" />
                 </div>
              </div>
              <div class="row justify-center q-mt-md text-center q-mt-xl" style="height: 100px">
                 <div class="col-9">
                     <q-btn rounded color="pink-12" class="full-width" text-color="white" label="Login" @click="generarCuenta">
                       <div v-show="spinnerGenerar"><q-spinner-pie class="q-ml-sm" color="pink-1" /></div>
                      </q-btn>
                 </div>
              </div>
            </div>
          </div>
          </div>
       </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { Notificacion } from 'components/notificaciones'

export default defineComponent({
  setup () {
    const nombre = ref('')
    const contrasena = ref('')
    const validaNombre = ref('')
    const validaContrasena = ref('')
    const $q = useQuasar()
    const spinnerGenerar = ref(false)
    const visibilidad = ref('password')

    const generarCuenta = () => {
      spinnerGenerar.value = true
      if (validarCuenta()) {
        guardarCuenta()
      } else {
        spinnerGenerar.value = false
      }
    }

    const guardarCuenta = () => {
      setTimeout(() => { spinnerGenerar.value = false }, 5000)
      Notificacion('Successfully Generated', 'cyan-10')
    }

    const validarCuenta = () => {
      let validacion = true

      if (nombre.value === '') {
        validacion = false
        validaNombre.value = 'Name is required'
      } else if (nombre.value.length > 12) {
        validacion = false
        validaNombre.value = 'Name should not exceed 12 characters'
      } else {
        validaNombre.value = ''
      }

      if (contrasena.value === '') {
        validacion = false
        validaContrasena.value = 'Password is required'
      } else if (contrasena.value.length > 8) {
        validacion = false
        validaContrasena.value = 'Password should not exceed 8 characters'
      } else {
        validaContrasena.value = ''
      }
      return validacion
    }

    const visibilidadPassword = () => {
      visibilidad.value = 'text'
      setTimeout(() => { visibilidad.value = 'password' }, 2000)
    }

    const notificacion = (mensaje: string) => {
      $q.notify({
        message: mensaje,
        color: 'purple'
      })
    }

    return {
      nombre,
      contrasena,
      validaNombre,
      validaContrasena,
      cyan: ref(true),
      visibilidad,
      spinnerGenerar,
      generarCuenta,
      validarCuenta,
      guardarCuenta,
      visibilidadPassword,
      notificacion
    }
  }
})
</script>

<style scoped>
.redondo {
 border-radius: 15px;
}

.font {
  font-family: serif;
  font-size:200%
}

.font_checkbox {
  font-family: serif;
  font-size:70%;
  color: white;
}

.font_advertencia {
  font-family: serif;
  font-size:70%;
  color: white;
}

.pointer {
  cursor: pointer
}
</style>
