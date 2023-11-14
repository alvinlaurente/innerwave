<template>
  <div class="w-full p-8 mx-auto">
    <div class="grid grid-cols-2">
      <div class="flex flex-col gap-4">
        <img src="~/assets/image/logo.png" class="md:w-1/6">
      </div>
      <div class="">
        <div class="flex flex-col md:flex-row justify-end gap-4">
          <div class="flex flex-col md:text-right">
            <!-- <h3 class="text-xl font-bold mb-4">
              Menu
            </h3> -->
            <ul class="flex flex-col list-outside">
              <li
                v-for="(menu, index) in menus"
                :key="index"
                class="text-sm md:text-base inline cursor-pointer dropdown relative"
              >
                <a
                  class="inline-block text-light-shade focus:text-primary-light-40 active:text-primary-light-40 hover:text-primary-light-40 font-ubuntu capitalize font-bold transition ease-in-out"
                  @click="handleClickMenu(menu)"
                >
                  {{ menu.title }}
                </a>
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-1 justify-items-end gap-4 w-32">
            <img src="https://dndjakarta.files.wordpress.com/2018/09/news-discord-join-1024x443-e1538055978359.jpg?w=640" class="rounded-sm md:rounded-xl cursor-pointer md:mb-4" @click="goTo('https://discord.gg/vEA8ypcUeG')">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Fandom.svg/1200px-Fandom.svg.png" class="cursor-pointer" @click="goTo('https://innerwave.fandom.com/wiki/Innerwave_Wiki')">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h3 class="text-center">
      &copy;Innerwave 2023
    </h3>
  </div>
</template>

<script>
export default {
  name: 'UniMenu',
  data () {
    return {
      menus: [
        {
          title: 'story',
          to: '/story'
        },
        {
          title: 'member',
          to: '/member'
        },
        {
          title: 'activities',
          to: '/activities'
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
    }
  }
}
</script>
