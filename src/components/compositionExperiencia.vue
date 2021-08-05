<template lang="">
  <div>
    <div class="row q-mt-xl text-center">
     <div class="col">
        <q-img src="~assets/iconos/portafolio.png" spinner-color="white" fit="fill" style="height: 100px; max-width: 100px" class="img-exp" />
     </div>
  </div>
  <div class="row text-center q-mt-sm">
    <div class="col text-grey-2" style="font-family:verdana;">
      <h5>My projects were always web maintenance and new or maintenance application for companies so I created these two little projects as examples </h5>
    </div>
  </div>
  <div class="row q-mt-xl text-center justify-center">
     <div class="col-5 bg-pink-10 rcorners-exp pointer-exp" @click="$refs.myChild.modalExperiencia('go', 0)">
        <q-img src="~assets/iconos/go.png" spinner-color="white" fit="fill" style="height: 40px; max-width: 40px" class="img-exp" />
     </div>
    <div class="col-5 bg-deep-orange-11 rcorners-exp pointer-exp" @click="$refs.myChild.modalExperiencia('php', 1)">
        <q-img src="~assets/iconos/php.png" spinner-color="white" fit="fill" style="height: 30px; max-width: 30px" class="img-exp q-mt-sm" />
     </div>
   </div>
   <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp" @click="$refs.myChild.modalExperiencia('go', 0)">
       <div class="row" style="height: 20px">
         <div class="col">FRAMEWORK</div>
         <div class="col"><q-img src="~assets/iconos/framework.png" spinner-color="white" fit="fill" class="img-exp" @click="$refs.myChild.modalExperiencia('php', 0)" /></div>
         <div class="col">FIBER</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">FRAMEWORK</div>
         <div class="col"><q-img src="~assets/iconos/framework.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">LARAVEL</div>
       </div>
     </div>
   </div>
    <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">ORM</div>
         <div class="col"><q-img src="~assets/iconos/framework2.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">GORM</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">ORM</div>
         <div class="col"><q-img src="~assets/iconos/framework2.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">ELOQUENT</div>
       </div>
     </div>
   </div>
  <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">BACKEND</div>
         <div class="col"><q-img src="~assets/iconos/backend.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">FRAMEWORK QUASAR</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">BACKEND</div>
         <div class="col"><q-img src="~assets/iconos/backend.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">BLADE LARAVEL</div>
       </div>
     </div>
   </div>
   <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">DATABASE</div>
         <div class="col"><q-img src="~assets/iconos/database.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">MYSQL</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">DATABASE</div>
         <div class="col"><q-img src="~assets/iconos/database.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">MYSQL</div>
       </div>
     </div>
   </div>
   <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">SERVER</div>
         <div class="col"><q-img src="~assets/iconos/server.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">AMAZON WS</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">SERVER</div>
         <div class="col"><q-img src="~assets/iconos/server.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">VULTRA</div>
       </div>
     </div>
   </div>
   <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">CONTROL VERSION</div>
         <div class="col"><q-img src="~assets/iconos/controlVersion.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">GITHUB</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">CONTROL VERSION</div>
         <div class="col"><q-img src="~assets/iconos/controlVersion.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">GITHUB</div>
       </div>
     </div>
   </div>
     <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">IDE</div>
         <div class="col"><q-img src="~assets/iconos/ide.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">VSCODE, ATOM</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">IDE</div>
         <div class="col"><q-img src="~assets/iconos/ide.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">VSCODE, ATOM</div>
       </div>
     </div>
   </div>
  <div class="row justify-center q-mt-sm">
     <div class="col-5 text-grey-2 bg-indigo-8 text-center rcorners-exp">
       <div class="row" style="height: 20px">
         <div class="col">SYSTEM OPERATIVE</div>
         <div class="col"><q-img src="~assets/iconos/os.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">LINUX UBUNTU</div>
       </div>
     </div>
     <div class="col-5 text-grey-2 bg-indigo-5 text-center rcorners-exp">
      <div class="row text-pink-10" style="height: 20px">
         <div class="col">SYSTEM OPERATIVE</div>
         <div class="col"><q-img src="~assets/iconos/os.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col">LINUX UBUNTU</div>
       </div>
     </div>
   </div>
     <div class="row justify-center q-mt-sm" id="foo" >
     <div class="col-7 bg-teal-10 text-center rcornersDownload-exp">
       <div class="row" style="height: 20px">
         <div class="col text-white">DOWNLOAD</div>
         <div class="col"><q-img src="~assets/iconos/download.png" spinner-color="white" fit="fill" class="img-exp" /></div>
         <div class="col text-white">FILE PDF</div>
       </div>
     </div>
   </div>
   <compositionModalExperiencia ref="myChild" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import compositionModalExperiencia from 'components/modal/compositionModalExperiencia.vue'

export default defineComponent({
  components: {
    compositionModalExperiencia
  },
  methods: {

  }
})
</script>

<style lang="css">

.img-exp {
  height: 40px; max-width: 40px
}
.pointer-exp {
  cursor: pointer
}

.rcorners-exp{
  border-radius: 25px 100px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
  transition: border-bottom 0s;
  text-decoration: none;
}

.rcorners-exp:hover {
    border: 3px solid #01FF70;
    color: #333;
}

.rcorners-exp:hover .img-exp{
  height: 30px; max-width: 30px
}

.rcornersDownload-exp{
  border-radius: 100px 25px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
  transition: border-bottom 0s;
  text-decoration: none;
}

.rcornersDownload-exp:hover {
    border: 3px solid red;
    color: #333;
}

.rcornersDownload-exp:hover .img-exp{
  height: 30px; max-width: 30px
}

</style>
