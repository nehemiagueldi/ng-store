<template>
  <div>
    <div class="pt-20 md:pt-24">
      <div class="px-5 mb-5 md:px-16 lg:px-32">
        <NuxtLink class="btn mb-4" to="/store">Back to Store</NuxtLink>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center flex-col items-center px-4 py-5 bg-base-200">
            <!-- TITLE AND PRICE -->
            <h1 class="text-center font-bold text-2xl md:text-3xl mb-3 uppercase">DiJual Aluminium Foil Roll</h1>
            <h1 class="text-center font-bold text-xl md:text-3xl mb-3 uppercase">Rp 300.000</h1>
            <!-- IMAGE -->
            <div class="carousel carousel-center max-w-[18rem] md:max-w-md p-4 space-x-4 bg-neutral items-center rounded-box">
              <div class="carousel-item">
                <img src="/aluminiumroll1.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll2.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll3.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll4.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll5.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll6.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
              <div class="carousel-item">
                <img src="/aluminiumroll7.jpg" class="rounded-box w-64 md:w-80 h-80 md:h-96 object-cover" />
              </div>
            </div>
            <!-- INFO FOR SLIDE IMAGE -->
            <div class="mt-4 space-y-1 border rounded-xl shadow-md">
              <div class="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>If you are using the Website and want to see more pictures, you can click on the pictures and then use the left or right arrow keys on your keyboard to view other pictures.</span>
              </div>
              <div class="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>If you are using a Mobile and want to see more pictures, you can swipe the picture right away.</span>
              </div>
            </div>
            <!-- DESCRIPTION, VIDEO, MAP, AND CONTACT -->
            <div class="mt-4 space-y-3 text-sm lg:text-base">
              <!-- DETAIL 1 -->
              <div>
                <h2 class="font-semibold text-lg md:text-xl text-center md:text-left uppercase">DiJual Aluminium Foil Roll untuk Kebutuhan Rumah Tangga dan Industri</h2>
                <p class="text-accent font-mono">> Lokasi : Perumahan Kemang Regency Blok K1 No.22 RT 05/RW 20 Katulampa, Bantarkemang, Kota Bogor, Bogor Timur, Jawa Barat</p>                
                <p class="text-accent font-mono">> Aluminium foil adalah lembaran logam tipis yang terbuat dari aluminium yang digunakan untuk membungkus, melindungi, dan mengawetkan makanan.</p>
                <p class="text-accent font-mono">> Aluminium foil sangat populer dalam kegiatan memasak dan pengemasan makanan karena mudah dibentuk dan tahan terhadap suhu tinggi.</p>
                <p class="text-accent font-mono">> Aluminium foil ini juga dapat digunakan untuk menghindari kontaminasi dan membantu menjaga kelembaban makanan agar tetap segar.</p>
                <p class="text-accent font-mono">> Aluminium foil ini lebih tebal umumnya digunakan untuk keperluan industri.</p>
                <p class="text-accent font-mono">> Kondisi : Bekas</p>
                <p class="text-accent font-mono">> Panjang Roll : ± 1 m</p>
                <p class="text-accent font-mono">> Sisa Roll : ± 20 m</p>
                <p class="text-accent font-mono">> Harga : Rp 300.000 (tidak termasuk ongkos kirim)</p>
                <p class="text-accent font-mono">> Jika pembelian ingin COD (Cash on Delivery), hanya berlaku untuk domisili Kota Bogor</p>
              </div>

              <!-- DETAIL 2 -->
              <!-- <div>
                <h2 class="font-semibold text-lg md:text-xl text-center md:text-left uppercase">Fasilitas</h2>
                <p class="text-warning font-mono">1 Lantai keramik</p>
                <p class="text-warning font-mono">2 Garasi</p>
                <p class="text-warning font-mono">3 Carport</p>
                <p class="text-warning font-mono">4 Dapur</p>
                <p class="text-warning font-mono">5 Teras belakang</p>
              </div> -->

              <!-- MAP -->
              <div>
                <h2 class="font-semibold text-lg md:text-xl mb-2 text-center uppercase">Lokasi</h2>
                <NuxtLink to="https://goo.gl/maps/QKentkADMYFKYaMQ7" target="_blank">
                  <img src="/lokasialuminiumroll.png" alt="Lokasi Rumah" class="w-96 mx-auto hover:scale-105 duration-300 transition ease-in-out justify-center rounded-md object-cover" />
                </NuxtLink>
              </div>

              <!-- VIDEO -->
              <!-- <div>
                <h2 class="font-semibold text-lg md:text-xl text-center uppercase">Video Rumah</h2>
                <div class="mt-2">
                  <video controls controlslist="nodownload" class="rounded-md mx-auto items-center">
                    <source src="/videorumahkemangregency.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div> -->

              <!-- CONTACT -->
              <div class="text-center">
                <h2 class="font-semibold text-base md:text-lg">Jika Anda memiliki pertanyaan atau ingin negosiasi harga, silahkan langsung menghubungi penjual melalui WhatsApp dengan mengklik tombol di bawah ini.</h2>
                <NuxtLink class="btn btn-accent mt-2" target="_blank" to="https://wa.me/6285155012135?text=Halo, Saya ingin bertanya mengenai Aluminium Foil Roll Bapak"> <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp" /> Contact Seller </NuxtLink>
                <h2 class="font-semibold text-base mt-1 md:text-lg">a.n. Nehemia (Bapak)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>