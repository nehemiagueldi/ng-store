<script setup>
const colorMode = useColorMode();
const themes = ["system", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

const route = useRoute();
const router = useRouter();

function navigateTo(path) {
  router.push(path);
}
</script>

<template>
  <div>
    <div>
      <!-- NAVBAR -->
      <div class="navbar bg-base-100 fixed z-10">
        <!-- BOTTOM NAVBAR -->
        <div class="navbar-start">
          <div class="dropdown">
            <!-- BOTTOM NAVIGATION -->
            <div class="btm-nav lg:hidden">
              <button :class="{ active: route.path === '/home' }" @click="navigateTo('/home')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </button>
              <button :class="{ active: route.path === '/store' }" @click="navigateTo('/store')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                  <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd" />
                </svg>
              </button>
              <button :class="{ active: route.path === '/about' }" @click="navigateTo('/about')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <NuxtLink class="btn btn-ghost normal-case text-xl md:text-3xl font-bold" to="/">NG STORE</NuxtLink>
        </div>
        <!-- NORMAL NAVIGATION -->
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 space-x-4">
            <li><NuxtLink to="/home" class="btn btn-ghost normal-case text-lg">Home</NuxtLink></li>
            <li><NuxtLink to="/store" class="btn btn-ghost normal-case text-lg">Store</NuxtLink></li>
            <li><NuxtLink to="/about" class="btn btn-ghost normal-case text-lg">About</NuxtLink></li>
          </ul>
        </div>
        <!-- THEME -->
        <div class="navbar-end">
          <select class="select select-bordered w-full max-w-xs btn" v-model="colorMode.preference">
            <option disabled selected>Theme</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
