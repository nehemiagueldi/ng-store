<script setup>
  const items = ref([
    // Define your items here
    {
      id: 1,
      image: "rpg1.jpeg",
      title: "Rumah Hook Daerah Jati Asih",
      description: "Di Jual Rumah Hook (Pojok) Strategis dengan Suasana Tenang dan Nyaman",
      link: "/store/rumahjatiasih"
    },
    {
      id: 2,
      image: "rumahbandung1.png",
      title: "Rumah Daerah Kab.Bandung",
      description: "Di Jual Rumah Daerah Kab.Bandung Strategis Bebas Banjir",
      link: "/store/rumahbandung"
    },
    {
      id: 3,
      image: "rumahbogor1.png",
      title: "Rumah Minimalis Daerah Bogor",
      description: "Di Jual Rumah Minimalis 2 Lantai Strategis dengan Suasana Tenang dan Nyaman",
      link: "/store/rumahbogor"
    },
    // Add more items as needed
  ]);

  const itemsPerPage = 8; // Number of items to display per page
  const itemsPerGroup = 4; // Number of items per group
  const currentPage = ref(1); // Current active page

  const displayedItems = computed(() => {
    // Calculate the range of items to display based on the current page
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedItems = items.value.slice(startIndex, endIndex);
    
    // Split the sliced items into groups of 4
    const groups = [];
    for (let i = 0; i < slicedItems.length; i += itemsPerGroup) {
      const group = slicedItems.slice(i, i + itemsPerGroup);
      groups.push(group);
    }
    
    return groups;
  });

  const totalPages = computed(() => {
    // Calculate the total number of pages based on the number of items and items per page
    return Math.ceil(items.value.length / itemsPerPage);
  });

  function changePage(page) {
    // Update the current page when the pagination radio button is changed
    currentPage.value = page;
  }
</script>

<template>
  <div>
    <!-- ITEM -->
    <div class="text-center min-h-screen pt-20 md:pt-24 mb-10"> 
      <h1 class="text-center font-bold text-3xl pt-3 uppercase">Items</h1>
      <div class="flex justify-center items-center gap-4 pt-3 px-3 md:px-0 flex-wrap">
        <!-- Display items based on the active page -->
        <div v-for="row in displayedItems" :key="rowIndex" class="flex items-center justify-center gap-5 flex-wrap">
          <div v-for="item in row" :key="item.id" class="card w-[19.5rem] sm:w-80 md:w-96 bg-base-100 shadow-xl py-3">
            <figure><img :src="item.image" :alt="item.title" class="w-[325px] h-[325px] md:w-[385px] md:h-[385px]" /></figure>
            <div class="card-body">
              <h2 class="card-title text-lg md:text-xl">{{ item.title }}</h2>
              <p class="text-sm md:text-base">{{ item.description }}</p>
              <div class="card-actions justify-end">
                <NuxtLink class="btn btn-primary" :to="item.link">View Details</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="join mt-7">
        <input v-for="page in totalPages" :key="page" class="join-item btn btn-square" type="radio" name="options" :aria-label="page.toString()" :checked="currentPage === page" @change="changePage(page)" />
      </div>
    </div>
  </div>
</template>
