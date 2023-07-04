<script setup>
const selectedAccordion = ref("1");
</script>

<template>
  <div>
    <!-- HERO -->
    <div class="hero min-h-screen bg-base-200 pt-20 md:pt-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/heroimg1.jpg" class="max-w-[18rem] md:max-w-sm rounded-lg shadow-2xl w-[450px] h-[600]" />
        <div class="text-center lg:text-left">
          <h1 class="text-3xl lg:text-5xl font-bold">NG STORE</h1>
          <p class="py-6 md:pr-6">Explore NG Store, an innovative online marketplace offering livable houses, used goods, and more. With a wide range of products and affordable options, we cater to diverse needs and provide a delightful shopping experience. Our commitment lies in providing top-notch merchandise that is both functional and affordable. Whether you're searching for a cozy home or unique pre-owned items.</p>
          <NuxtLink class="btn btn-primary" to="/store">Let's Explore</NuxtLink>
        </div>
      </div>
    </div>
    <!-- PREVIEW ITEM -->
    <div class="text-center">
      <h1 class="text-center font-bold text-3xl pt-3 uppercase">Items</h1>
      <div class="flex justify-center items-center gap-4 pt-3 px-3 md:px-0 flex-wrap">
        <div class="card w-72 md:w-80 lg:w-96 bg-base-100 shadow-xl py-3">
          <figure><img src="/rpg1.jpeg" alt="Shoes" class="w-[325px] h-[325px] md:w-[385px] md:h-[385px]" /></figure>
          <div class="card-body">
            <h2 class="card-title text-lg md:text-xl">Rumah Hook Daerah Jati Asih</h2>
            <p class="text-sm md:text-base">Di Jual Rumah Hook (Pojok) Strategis dengan Suasana Tenang dan Nyaman</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn btn-primary" to="/store/rumahjatiasih">View Details</NuxtLink>
            </div>
          </div>
        </div>
        <div class="card w-72 md:w-80 lg:w-96 bg-base-100 shadow-xl py-3">
          <figure><img src="/rumahbandung1.png" class="w-[325px] h-[325px] md:w-[385px] md:h-[385px]" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title text-lg md:text-xl">Rumah Daerah Kab.Bandung</h2>
            <p class="text-sm md:text-base">Di Jual Rumah Daerah Kab.Bandung Strategis Bebas Banjir</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn btn-primary" to="/store/rumahbandung">View Details</NuxtLink>
            </div>
          </div>
        </div>
        <div class="card w-72 md:w-80 lg:w-96 bg-base-100 shadow-xl py-3">
          <figure><img src="/rumahbogor1.png" class="w-[325px] h-[325px] md:w-[385px] md:h-[385px]" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title text-lg md:text-xl">Rumah Minimalis Daerah Bogor</h2>
            <p class="text-sm md:text-base">Di Jual Rumah Minimalis 2 Lantai Strategis dengan Suasana Tenang dan Nyaman</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn btn-primary" to="/store/rumahbogor">View Details</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <NuxtLink class="btn btn-neutral px-10 text-base md:text-lg" to="/store">See More</NuxtLink>
      </div>
    </div>
    <!-- FAQ -->
    <div class="px-3 md:px-20 lg:px-56 xl:px-96 mb-5">
      <h1 class="text-center font-bold text-3xl py-3 uppercase">Faq</h1>
      <div class="pt-2">
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" v-model="selectedAccordion" value="1" />
          <div class="collapse-title text-base md:text-xl font-medium">Are the items displayed, actually for sale?</div>
          <div class="collapse-content">
            <p class="text-sm md:text-lg">Yes, the items shown are actually for sale</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" v-model="selectedAccordion" value="2" />
          <div class="collapse-title text-base md:text-xl font-medium">How to buy the items shown?</div>
          <div class="collapse-content">
            <p class="text-sm md:text-lg">To buy the items displayed, you can directly click the button to contact the seller directly via Whatsapp</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" v-model="selectedAccordion" value="3" />
          <div class="collapse-title text-base md:text-xl font-medium">Is the photo of the item shown the original item or the original image?</div>
          <div class="collapse-content">
            <p class="text-sm md:text-lg">Yes, the image of the item shown is the original image taken directly by the seller</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" v-model="selectedAccordion" value="4" />
          <div class="collapse-title text-base md:text-xl font-medium">Does the item displayed mean stock is available?</div>
          <div class="collapse-content">
            <p class="text-sm md:text-lg">Of course, you can directly discuss further with the seller via Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTACT -->
    <div class="px-3 md:px-20 lg:px-56 xl:px-96 mb-5">
      <h1 class="text-center font-bold text-3xl py-3 uppercase">Contact</h1>
      <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="/whatsapp.jpg" class="w-[250px] h-[350px]" alt="Movie" /></figure>
        <div class="card-body">
          <h2 class="card-title text-lg md:text-xl">Contact on Whatsapp</h2>
          <p class="text-sm md:text-base">Click the button for contact, feel free to ask 👍</p>
          <div class="card-actions justify-end">
            <NuxtLink class="btn btn-accent text-xs md:text-sm" to="https://wa.me/6285155012135?text=Halo, Saya ingin bertanya mengenai barang yang ada di Website NG STORE." target="_blank"><img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp"/>Send a Message</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
