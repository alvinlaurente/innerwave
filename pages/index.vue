<template>
  <div>
    <div class="w-full mx-auto container">
      <div id="hero" class="mb-8 flex flex-col-reverse px-8 gap-4 md:flex-row items-center w-full justify-between">
        <div class="text-center md:text-left">
          <h1 class="font-bold text-4xl">
            Lorem, ipsum dolor.
          </h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, blanditiis.</h3>
        </div>
        <img src="~/assets/image/logo.png" class="object-cover w-fit">
      </div>
    </div>

    <div id="who" class="p-8 text-center my-8 bg-dark-accent">
      <h3 class="text-3xl font-semibold capitalize">
        Who are us?
      </h3>
      <div class="grid grid-cols-2 mt-4 text-left md:text-center">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quasi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quasi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quasi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quasi.</p>
      </div>
    </div>

    <div class="w-full mx-auto container">
      <div id="hood" class="mb-8 flex flex-col-reverse px-8 gap-4 md:flex-row-reverse items-center w-full justify-between">
        <div class="text-center md:text-left w-full md:w-1/3">
          <h3 class="font-bold text-3xl">
            Hood Location
          </h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, blanditiis.</h3>
        </div>
        <img src="~/assets/image/skull.png" class="object-cover w-1/2 rounded-xl h-72">
      </div>

      <div id="gang-activities" class="mb-8 flex flex-col-reverse px-8 gap-4 md:flex-row-reverse items-center w-full justify-between">
        <div class="text-center md:text-left w-full md:w-1/3">
          <h3 class="font-bold text-3xl">
            Gang Activities
          </h3>
          <ul class="list-outside md:list-inside list-none md:list-disc">
            <li>Robbery</li>
            <li>LTD</li>
            <li>Gang War</li>
          </ul>
        </div>
        <img src="~/assets/image/yakuza.jpg" class="object-cover w-1/2 rounded-xl h-72">
      </div>
    </div>

    <div id="others" class="p-8 md:px-24 text-center mt-8 bg-dark-accent">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 text-3xl uppercase text-light-accent ">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="rounded-xl overflow-hidden relative cursor-pointer hover:bg-[#000]/90 transition ease duration-300"
          @mouseover="detect(index)"
          @mouseleave="leave(index)"
          @click="goTo(menu.to)"
        >
          <img :src="`/_nuxt/assets/image/${menu.img}`" class="object-cover rounded-xl hover:opacity-25">
          <p class="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded">
            {{ menu.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      title: ['story', 'member', 'activities'],
      menus: [
        {
          title: '',
          to: '/story',
          img: 'yakuza2.png'
        },
        {
          title: '',
          to: '/member',
          img: 'yakuza3.jpg'
        },
        {
          title: '',
          to: '/activities',
          img: 'yakuza4.jpg'
        }
      ]
    }
  },
  methods: {
    handleClickMenu (menu) {
      if (menu.to !== '#') {
        this.$router.push(menu.to)
      } else {
        this.$router.go()
      }
    },
    goTo (url) {
      if (url) {
        window.location.assign(url, '_blank')
      }
    },
    detect (i) {
      this.menus[i].title = this.title[i]
    },
    leave (i) {
      this.menus[i].title = ''
    }
  }
}
</script>
