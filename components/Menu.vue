<!-- eslint-disable no-tabs -->
<template>
  <!-- eslint-disable max-len -->
  <header class="w-full">
    <nav class="text-white">
      <div class="bg-dark-accent py-4 shadow">
        <div class="container mx-auto flex flex-row items-center justify-center gap-2">
          <div class="pl-6 md:w-1/6">
            <div class="grid cursor-pointer">
              <img
                src="~/assets/image/logo64.webp"
                width="32px"
                height="32px"
                alt="logo"
                title="logo"
                @click="$router.push('/')"
              >
            </div>
          </div>
          <div id="menus-desktop" class="md:w-4/6 hidden lg:flex items-center justify-center">
            <ul>
              <li
                v-for="(menu, index) in menus"
                :key="index"
                class="px-4 md:px-6 text-sm md:text-base inline cursor-pointer dropdown relative"
              >
                <a
                  class="inline-block text-dark-shade focus:text-primary-light-40 active:text-primary-light-40 hover:text-primary-light-40 font-ubuntu capitalize font-bold transition ease-in-out"
                  @click="handleClickMenu(menu)"
                >
                  {{ menu.title }}
                </a>
              </li>
            </ul>
          </div>
          <!-- Social -->
          <div class="pr-6 md:w-1/6">
            <div
              class="flex flex-wrap gap-2 md:gap-4 items-center justify-end cursor-pointer text-dark-shade"
            >
              <a
                href="https://discord.gg/vEA8ypcUeG"
                target="_blank"
              >
                <svg
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                  class="w-6 transition ease-in-out fill-current hover:text-primary-light-20"
                >
                  <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                  </g>
                </svg>
              </a>
              <a href="https://innerwave.fandom.com/wiki/Innerwave_Wiki" target="_blank">
                <svg
                  id="wds-brand-fandom-logomark"
                  x="0px"
                  y="0px"
                  viewBox="0 0 438 354"
                  style="enable-background:new 0 0 438 354;"
                  xml:space="preserve"
                  class="w-8 rounded-full transition ease-in-out bg-transparent hover:bg-primary-light-20"
                >
                  <style type="text/css">
                    .st0{fill:#FA005A;}
                    .st1{fill:#FFC500;}
                  </style>
                  <path
                    class="st0"
                    d="M298.9,174.1L182.1,57.3c-0.6-0.6-1.4-1-2.2-1.2c-0.8-0.2-1.7-0.1-2.5,0.2s-1.5,0.9-1.9,1.6s-0.7,1.5-0.7,2.4
	v98.3l-35.4-35.4c-0.6-0.6-1.4-1-2.2-1.2s-1.7-0.1-2.5,0.2c-0.8,0.3-1.5,0.9-1.9,1.6s-0.7,1.5-0.7,2.4v101.5c0,3.2,0.6,6.3,1.8,9.2
	c1.2,2.9,3,5.6,5.2,7.8l46,46.1c4.5,4.5,10.7,7.1,17.1,7.1h33.7c6.4,0,12.5-2.5,17.1-7.1l46-46.1c2.2-2.2,4-4.9,5.2-7.8
	c1.2-2.9,1.8-6.1,1.8-9.2v-36.5c0-3.2-0.6-6.3-1.8-9.2C303,179,301.2,176.4,298.9,174.1L298.9,174.1z"
                  />
                  <path
                    class="st1"
                    d="M263.3,216.9c0,1.9-0.8,3.8-2.1,5.1l-37.1,37.3c-0.7,0.7-1.5,1.2-2.4,1.6c-0.9,0.4-1.8,0.6-2.8,0.6
	s-1.9-0.2-2.8-0.6c-0.9-0.4-1.7-0.9-2.4-1.6l-37-37.3c-1.4-1.4-2.1-3.2-2.1-5.1v-14.2c0-1,0.2-1.9,0.6-2.8c0.4-0.9,0.9-1.7,1.6-2.3
	l13.3-13.3c0.7-0.7,1.5-1.2,2.3-1.6c0.9-0.4,1.8-0.6,2.8-0.6s1.9,0.2,2.8,0.6c0.9,0.4,1.7,0.9,2.3,1.6l18.6,18.6l18.6-18.6
	c0.7-0.7,1.5-1.2,2.3-1.6c0.9-0.4,1.8-0.6,2.8-0.6c1,0,1.9,0.2,2.8,0.6c0.9,0.4,1.7,0.9,2.3,1.6l13.3,13.3c0.7,0.7,1.2,1.5,1.6,2.3
	c0.4,0.9,0.6,1.8,0.6,2.8V216.9L263.3,216.9z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
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

<style scoped></style>
