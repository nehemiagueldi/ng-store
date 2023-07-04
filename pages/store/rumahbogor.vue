<template>
  <div>
    <div class="pt-20 md:pt-24">
      <div class="px-5 mb-5 md:px-16 lg:px-32">
        <NuxtLink class="btn mb-4" to="/store">Back to Store</NuxtLink>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center flex-col items-center px-4 py-5 bg-base-200">
            <!-- TITLE AND PRICE -->
            <h1 class="text-center font-bold text-2xl md:text-3xl mb-3 uppercase">Rumah Daerah Bogor</h1>
            <h1 class="text-center font-bold text-xl md:text-3xl mb-3 uppercase">Rp 1.600.000.000</h1>
            <!-- IMAGE -->
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral items-center rounded-box">
              <div class="carousel-item">
                <img src="/rumahbogor1.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/rumahbogor2.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/rumahbogor3.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/rumahbogor4.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/rumahbogor5.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/rumahbogor6.png" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
            </div>
            <!-- INFO FOR SLIDE IMAGE -->
            <div class="mt-4 space-y-1 border rounded-xl shadow-md">
              <div class="alert ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>If you are using the Website and want to see more pictures, you can click on the pictures and then use the left or right arrow keys on your keyboard to view other pictures.</span>
              </div>
              <div class="alert ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info  shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>If you are using a Mobile and want to see more pictures, you can swipe the picture right away.</span>
              </div>
            </div>
            <!-- DESCRIPTION, VIDEO, MAP, AND CONTACT -->
            <div class="mt-4 space-y-3 text-sm lg:text-base">
              <!-- DETAIL 1 -->
              <div>
                <h2 class="font-semibold text-lg md:text-xl text-center md:text-left uppercase">DiJual Rumah Daerah Bogor Minimalis 2 Lantai Strategis dengan Suasana Tenang dan Nyaman</h2>
                <p class="text-accent font-mono">> Lokasi : Indra Pastra Town House Jl. Gatot Kaca Raya Blok C3 Warung Jambu - Bantar Jati Bogor</p>
                <p class="text-accent font-mono">> Luas Tanah : 97 m2</p>
                <p class="text-accent font-mono">> Luas Bangunan : 194 m2</p>
                <p class="text-accent font-mono">> Kamar Tidur : 3</p>
                <p class="text-accent font-mono">> Kamar Mandi : 2</p>
                <p class="text-accent font-mono">> Sertifikat : Sertifikat Hak Milik (SHM)</p>
                <p class="text-accent font-mono">> Kondisi : Baru</p>
              </div>

              <!-- DETAIL 2 -->
              <div>
                <h2 class="font-semibold text-lg md:text-xl text-center md:text-left uppercase">Fasilitas</h2>
                <p class="text-warning font-mono">1 Lantai keramik</p>
                <p class="text-warning font-mono">2 Garasi</p>
                <p class="text-warning font-mono">3 Carport</p>
                <p class="text-warning font-mono">4 Dapur</p>
                <p class="text-warning font-mono">5 Balkon</p>
              </div>

              <!-- MAP -->
              <div>
                <img src="/lokasirumahbogor.png" alt="Lokasi Rumah" class="w-96 mx-auto justify-center rounded-md object-cover" />
              </div>

              <!-- VIDEO -->
              <!-- <div>
                <h2 class="font-semibold text-lg md:text-xl text-center uppercase">Video Rumah</h2>
                <div class="mt-2">
                  <video controls controlslist="nodownload" class="rounded-md mx-auto items-center">
                    <source src="/videorumahbogor.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div> -->

              <!-- CONTACT -->
              <div class="text-center">
                <h2 class="font-semibold text-base md:text-lg">Jika Anda memiliki pertanyaan atau ingin negosiasi harga, silahkan langsung menghubungi penjual melalui WhatsApp dengan mengklik tombol di bawah ini.</h2>
                <NuxtLink class="btn btn-accent mt-2" target="_blank" to="https://wa.me/6281290527844?text=Halo, Saya ingin bertanya mengenai Rumah Daerah Bogor Warung Jambu - Bantar Jati"> <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp" /> Contact Seller </NuxtLink>
                <h2 class="font-semibold text-base mt-1 md:text-lg">a.n. Monica (Ibu)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>