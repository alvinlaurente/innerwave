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
      <div class="grid grid-cols-2 mt-4">
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
        <img src="~/assets/image/welcome.png" class="object-cover w-1/2 rounded-xl">
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
        <img src="~/assets/image/welcome.png" class="object-cover w-1/2 rounded-xl">
      </div>
    </div>

    <div id="others" class="p-8 md:px-24 text-center mt-8 bg-dark-accent">
      <h3 class="text-3xl font-semibold capitalize">
        Others
      </h3>
      <div class="grid grid-cols-3 gap-8 mt-4 text-md md:text-3xl text-dark-accent ">
        <div class="p-4 rounded-xl bg-light-accent">
          <i class="fas fa-scroll" />
          <p>Story</p>
        </div>
        <div class="p-4 rounded-xl bg-light-accent">
          <i class="fas fa-users" />
          <p>Members</p>
        </div>
        <div class="p-4 rounded-xl bg-light-accent">
          <i class="fas fa-snowboarding" />
          <p>Activities</p>
        </div>
      </div>
    </div>
  </div>
</template>
