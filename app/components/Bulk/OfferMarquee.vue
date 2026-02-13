<template>
  <!-- Main Container with the Gradient Background -->
  <div class="marquee-container d-flex align-center mt-4">
    <!-- Sliding Track -->
    <div class="marquee-track">
      <!-- Content Group 1 -->
      <div class="marquee-content d-flex align-center">
        <span
          v-for="(item, i) in items"
          :key="`original-${i}`"
          class="mx-8 text-body-1 font-weight-bold text-white text-uppercase"
        >
          {{ item }}
        </span>
      </div>

      <!-- Content Group 2 (Duplicate for seamless looping) -->
      <div class="marquee-content d-flex align-center">
        <span
          v-for="(item, i) in items"
          :key="`duplicate-${i}`"
          class="mx-8 text-body-1 font-weight-bold text-white text-uppercase"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  "Limited Time OfferStock শেষ হওয়ার আগেই অর্ডার করুন!",
  "১৪ দিনের মানিব্যাক গ্যারান্টি",
  "১ বছরের সার্ভিস ওয়ারেন্টি",
  "ক্যাশ অন ডেলিভারি & ফাস্ট শিপিং!",
]);
</script>

<style scoped>
/* 
  Container Styling
  Matches the gradient in your screenshot: Blue -> Purple -> Blue
*/
.marquee-container {
  width: 100%;
  height: 55px; /* Adjust height as needed */
  background: linear-gradient(90deg, #2997d6 0%, #7e2ce1 50%, #2997d6 100%);
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

/* The scrolling track */
.marquee-track {
  display: flex;
  /* The animation moves the track left by 50% (the width of one content group) */
  animation: scroll-left 20s linear infinite;
  width: fit-content;
}

/* 
  Keyframes for the infinite scroll.
  We move from 0 to -50% because we have two identical sets of text.
  Once it hits -50%, it snaps back to 0 instantly, creating the illusion of an infinite loop.
*/
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover (Optional UX improvement) */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}
</style>
