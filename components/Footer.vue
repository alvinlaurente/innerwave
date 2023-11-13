<template>
  <div class="w-full container p-8">
    <div class="grid grid-cols-2">
      <div class="flex flex-col gap-4">
        <img src="~/assets/image/logo.png" class="w-1/3">
      </div>
      <div class="grid gap-4 grid-rows-2">
        <div class="flex justify-end gap-4">
          <div class="flex flex-col text-right">
            <h3 class="text-xl font-bold mb-4">
              Menu
            </h3>
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
          <div class="w-1/4">
            <img src="https://dndjakarta.files.wordpress.com/2018/09/news-discord-join-1024x443-e1538055978359.jpg?w=640" class="rounded-xl cursor-pointer mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Fandom.svg/1200px-Fandom.svg.png" class="cursor-pointer">
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
    }
  }
}
</script>
