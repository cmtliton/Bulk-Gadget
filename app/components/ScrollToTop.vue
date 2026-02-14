<template>
  <v-fade-transition>
    <v-btn
      v-show="visible"
      @click="scrollToTop"
      class="scroll-btn elevation-4"
      icon="mdi-chevron-up"
      color="white"
      size="small"
      position="fixed"
      location="bottom center"
    >
      <v-icon color="grey-darken-3" size="30">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

// স্ক্রল পজিশন চেক করার ফাংশন
const handleScroll = () => {
  // যদি ৩০০ পিক্সেলের বেশি স্ক্রল হয় তবে বাটনটি দেখাবে
  visible.value = window.scrollY > 300;
};

// স্মুথলি উপরে যাওয়ার ফাংশন
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-btn {
  bottom: 30px !important;
  right: 30px !important;
  z-index: 99;
  border: 1px solid #eeeeee !important; /* স্ক্রিনশটের মতো হালকা বর্ডার */
  transition: transform 0.2s ease-in-out !important;
}

.scroll-btn:hover {
  transform: translateY(-5px); /* হোভারে হালকা উপরে উঠবে */
  background-color: #f8f8f8 !important;
}

/* আপনার ব্র্যান্ড টাচ দিতে চাইলে আইকন কালার পরিবর্তন করতে পারেন */
/* .v-icon { color: #a855f7 !important; } */
</style>
