<template lang="">
  <div>
    <div class="letra text-center">
      <q-img src="~assets/codigo.jpg" spinner-color="white" fit="fill" style="height: 400px; max-width: 1400px" class="img" />
      <div class="gallery-text">
        <x-sign>---- NOV.11.2021 ----</x-sign>
        <x-sign><h5>A LITTLE CURIOSITY IS THE START OF AN ENTIRE CAREER</h5></x-sign>
        <x-sign><label> BY LUIS PULIDO xxx</label></x-sign>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted () {
    const signs = document.querySelectorAll('x-sign')
    const randomIn = (min: number, max: number) => (
      Math.floor(Math.random() * (max - min + 1) + min)
    )

    const mixupInterval = (el: any) => {
      const ms = randomIn(2000, 4000)
      el.style.setProperty('--interval', `${ms}ms`)
    }

    signs.forEach(el => {
      mixupInterval(el)
      el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el)
      })
    })
  }
})
</script>

<style lang="css" scoped>
  .fondo {
    background-color: #020202
  }

  .letra{
    color: white;
  }
 .img {
  opacity: 0.3;
 }

.gallery-text{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*efecto*/
x-sign {
  --interval: 1s;
  display: block;
  text-shadow:
    0 0 10px var(--color1),
    0 0 20px var(--color2),
    0 0 40px var(--color3),
    0 0 80px var(--color4);
  will-change: filter, color;
  filter: saturate(60%);
  animation: flicker steps(100) var(--interval) 1s infinite;
}

x-sign {
  color: tomato;
  --color1: orangered;
  --color2: firebrick;
  --color3: maroon;
  --color4: darkred;
  font-family: Permanent Marker;
}

@keyframes flicker {
  50% {
    color: white;
    filter: saturate(200%) hue-rotate(20deg);
  }
}

</style>
