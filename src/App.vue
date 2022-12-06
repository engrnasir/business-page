<script setup>
  import {ref} from 'vue'
  const copytext=(id)=> {
      const storage = document.createElement('textarea');
      const element = document.getElementById(id)
      storage.value = element.innerHTML;
      element.appendChild(storage);
      storage.select();
      storage.setSelectionRange(0, 99999);
      document.execCommand('copy');
      element.removeChild(storage);
    }

</script>
<template>
  <div class="business-wrapper">
  <h2 class="heading">My Business</h2>
  <div class="cards">

    <div class="business-card">
      <h3 class="title">your business</h3>
      <p class="link">
        <a href="">Unifylink</a>
      </p>
      <p class="address">143 se 3rd ave #200 </p>
    </div>

    <div class="link-card phone-card">
      <h3 class="title">YOUR ZIDY PHONE NUMBER </h3>
      <p class="link phone" id="phoneNumber">
        234567887654
      </p>
      <button class="copybtn" @click="copytext('phoneNumber')">copy phone <span class="tooltip">Copied</span></button>
    </div>

    <div class="link-card map-card">
      <h3 class="title">GOOGLE MAPS</h3>
      <p class="link">
        <a href="" id="mapLink">MAP.GOOGLE.COM/DFHKHGFH</a>
      </p>
      <button class="copybtn" @click="copytext('mapLink')">copy link <span class="tooltip">Copied</span></button>
    </div>

    <div class="link-card review-card">
      <h3 class="title">GOOGLE REVIEW</h3>
      <p class="link">
        <a href="" id="reviewLink">search.google.com/locl/asdfassearch.google.com/locl/asdfassearch.google.com/locl/asdfassearch.google.com/locl/asdfas</a>
      </p>
      <button class="copybtn" @click="copytext('reviewLink')">copy link <span class="tooltip">Copied</span></button>
    </div>

  </div>
    
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
h1{
  
  color: #48C2B6;/* teal */
  color: rgba(72, 194, 182, 0.5);/* teal-500 */
  color: rgba(72, 194, 182, 0.6);/* teal-600 */
  color: rgba(72, 194, 182, 0.7);/* teal-700 */
  color: rgba(72, 194, 182, 0.8);/* teal-800 */
  color: rgba(72, 194, 182, 0.9);/* teal-900 */
  color: #DAF3F0;/* teal-light */
  
  color: #FE5B71;/* red */
  color: #FFDEE3;/* red-light */
  
  color: #49AEE9;/* blue */
  color: #FEB629;/* orange */
  color: rgba(254, 183, 41, 0.795);/* orange */
  color: #FFC65C;/* orange-light */
  color: rgba(255, 198, 92, 0.548);/* orange-light */
  color: rgba(255, 198, 92, 0.5);/* orange-light-500 */
  color: rgba(255, 198, 92, 0.6);/* orange-light-600 */
  color: rgba(255, 198, 92, 0.7);/* orange-light-700 */
  color: rgba(255, 198, 92, 0.8);/* orange-light-800 */
  color: rgba(255, 198, 92, 0.9);/* orange-light-900 */
  color: #A2F063;/* green */
  
  color: #ECFCE0;/* green-light */
}
.business-wrapper{
  @apply bg-teal-100 font-poppins min-h-screen w-full;
}
.heading{
  @apply text-gray-800 text-xl py-3 px-4 bg-gray-50 capitalize shadow-sm;
}
.cards{
  @apply grid grid-cols-2 gap-6 p-3 py-5 w-80p mx-auto
    max-[680px]:grid-cols-1 max-[480px]:w-full
  ;
}
.business-card{
  @apply bg-orange-500 h-48 p-3 rounded-xl
          flex flex-col justify-center shadow-md;
}
.business-card .title{
  @apply font-poppins text-lg font-medium uppercase text-gray-600 pb-2;
}
.business-card .link a{
  @apply font-bold no-underline capitalize text-black pb-2 ; 
}
.business-card .address{
  @apply text-gray-600;
}

.link-card{
  @apply h-48 p-3 rounded-xl
          flex flex-col justify-center shadow-md;
}
.link-card .title{
  @apply font-poppins text-lg font-medium uppercase text-gray-900 pb-2;
}
.link-card .link{
  @apply w-full overflow-x-scroll px-3 py-2 mb-3 text-xs border border-solid border-gray-400 rounded-lg ;
}
.link-card .link::-webkit-scrollbar{
  @apply hidden;
}
.link-card .link a{
  @apply no-underline text-blue font-semibold
}
.link-card .phone{
  @apply text-gray-600 font-semibold
}

.link-card .copybtn{
  @apply w-max px-2 py-2 rounded-md outline-none border-none shadow-md bg-teal text-white capitalize cursor-pointer text-xs font-bold
    transition-all duration-200 relative;
}
.link-card .copybtn:active{
  @apply bg-green-600;
}
.link-card .copybtn:active>.tooltip{
  @apply opacity-90 transition-all duration-100;
}
.link-card .copybtn .tooltip{
  @apply absolute -bottom-7 -right-8 opacity-0 bg-gray-600 p-1 rounded-sm text-gray-200 text-xs font-light;
}


.business-card{
  @apply bg-orange-150 bg-gradient-to-r from-orangeLight-200 to-orange-0;
}
.phone-card{
  @apply  bg-blue-100 bg-gradient-to-r from-blue-200 to-blue-0;
}
.map-card{
  @apply bg-teal-100 bg-gradient-to-r from-teal-200 to-teal-0;
}
.review-card{
  @apply bg-green-100 bg-gradient-to-r from-green-200 to-green-0;
}


.link-card .copybtn{
  @apply bg-teal text-white
}

.link-card .copybtn:hover{
  @apply bg-orange text-gray-800
}


</style>