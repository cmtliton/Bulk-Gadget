<template>
  <v-sheet color="black" class="py-16">
    <v-container>
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h3 class="text-h6 font-weight-bold mb-2 brand-color gradient-text">
          আমাদের ঠিকানা
        </h3>
        <h2 class="text-h5 text-md-h4 font-weight-bold text-white">
          সহজে খুঁজে নিন আমাদের অফিস
        </h2>
      </div>

      <!-- Map Card -->
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <v-card class="map-frame rounded-xl overflow-hidden" elevation="20">
            <!-- Google Map Iframe -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14539.049445989149!2d89.366479!3d24.848135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e606560945%3A0xc3f2f08573426002!2sBogura!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
// কোনো এক্সট্রা স্ক্রিপ্ট প্রয়োজন নেই, শুধু এমবেড কোড ব্যবহার করা হয়েছে
</script>

<style scoped>
/* আপনার ব্র্যান্ড কালার */
.brand-color {
  color: #a855f7 !important;
  letter-spacing: 2px;
}
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}
/* ম্যাপ ফ্রেমের স্টাইল - স্ক্রিনশটের মতো রাউন্ডেড কর্নার */
.map-frame {
  border: 4px solid #ffffff; /* ম্যাপের চারপাশে হালকা সাদা বর্ডার */
  transition: transform 0.3s ease;
}

.map-frame:hover {
  transform: scale(1.01); /* মাউস নিলে সামান্য বড় হবে */
}

/* টাইটেল স্টাইল */
.text-h4 {
  letter-spacing: 1px;
}

/* মোবাইল ডিভাইসের জন্য ম্যাপের হাইট অ্যাডজাস্টমেন্ট */
@media (max-width: 600px) {
  iframe {
    height: 350px;
  }
}
</style>
