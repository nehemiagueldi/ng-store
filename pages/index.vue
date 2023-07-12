<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>

<style>
.backgroundimg{
  background-image: url(../public/landingpage3.jpg);
  background-size: cover;
}

</style>

<template>
  <div>
    <div class="hero min-h-screen backgroundimg">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-primary-content">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-2xl md:text-5xl font-bold">Welcome to NG STORE</h1>
          <p class="mb-5 text-base md:text-lg">Explore our online store and embark on a journey of discovery. We take pride in offering a diverse selection of high-quality products that cater to your needs and preferences.</p>
          <NuxtLink class="btn btn-primary" :to="{ name: 'home' }">Let's Start</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
