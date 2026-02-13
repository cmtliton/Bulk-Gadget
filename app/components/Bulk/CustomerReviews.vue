<template>
  <v-sheet color="black" class="py-16">
    <v-container>
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h3 class="gradient-text text-overline font-weight-bold mb-1">
          GENUINE REVIEWS
        </h3>
        <h2 class="text-h5 text-md-h4 font-weight-bold text-white">
          যারা ব্যবহার করেছেন, তাদের মূল্যবান মতামত
        </h2>
      </div>

      <!-- Reviews Grid -->
      <v-row>
        <!-- Column 1 -->
        <v-col cols="12" md="4">
          <v-card
            v-for="(review, i) in column1"
            :key="`c1-${i}`"
            class="mb-6 pa-6 rounded-lg review-card"
            flat
          >
            <!-- Rating -->
            <v-rating
              :model-value="5"
              color="amber-darken-2"
              active-color="amber"
              density="compact"
              readonly
              size="small"
              class="mb-3"
            ></v-rating>

            <!-- Review Text -->
            <p
              class="text-grey-lighten-1 text-body-2 mb-6"
              style="line-height: 1.8"
            >
              {{ review.text }}
            </p>

            <!-- User Info -->
            <div class="d-flex align-center">
              <v-avatar size="48" class="mr-3">
                <v-img :src="review.image" alt="User Image" cover></v-img>
              </v-avatar>
              <div>
                <div
                  class="text-subtitle-2 font-weight-bold text-white text-uppercase"
                >
                  {{ review.name }}
                </div>
                <div class="text-caption text-grey-darken-1">
                  সম্মানিত ক্রেতা
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- Column 2 -->
        <v-col cols="12" md="4">
          <v-card
            v-for="(review, i) in column2"
            :key="`c2-${i}`"
            class="mb-6 pa-6 rounded-lg review-card"
            flat
          >
            <v-rating
              :model-value="5"
              color="amber-darken-2"
              density="compact"
              readonly
              size="small"
              class="mb-3"
            ></v-rating>
            <p
              class="text-grey-lighten-1 text-body-2 mb-6"
              style="line-height: 1.8"
            >
              {{ review.text }}
            </p>
            <div class="d-flex align-center">
              <v-avatar size="48" class="mr-3"
                ><v-img :src="review.image" cover></v-img
              ></v-avatar>
              <div>
                <div
                  class="text-subtitle-2 font-weight-bold text-white text-uppercase"
                >
                  {{ review.name }}
                </div>
                <div class="text-caption text-grey-darken-1">
                  সম্মানিত ক্রেতা
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- Column 3 -->
        <v-col cols="12" md="4">
          <v-card
            v-for="(review, i) in column3"
            :key="`c3-${i}`"
            class="mb-6 pa-6 rounded-lg review-card"
            flat
          >
            <v-rating
              :model-value="5"
              color="amber-darken-2"
              density="compact"
              readonly
              size="small"
              class="mb-3"
            ></v-rating>
            <p
              class="text-grey-lighten-1 text-body-2 mb-6"
              style="line-height: 1.8"
            >
              {{ review.text }}
            </p>
            <div class="d-flex align-center">
              <v-avatar size="48" class="mr-3"
                ><v-img :src="review.image" cover></v-img
              ></v-avatar>
              <div>
                <div
                  class="text-subtitle-2 font-weight-bold text-white text-uppercase"
                >
                  {{ review.name }}
                </div>
                <div class="text-caption text-grey-darken-1">
                  সম্মানিত ক্রেতা
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

// Data organized by columns
const column1 = ref([
  {
    name: "FARIDUL ISLAM",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "আমি Bulk Gadgets থেকে Micodus Mv730 নিয়েছি, কোয়ালিটি খুব ভালো। সার্ভিসও দ্রুত ও বিশ্বস্ত লেগেছে। ইনস্টল করা খুব সহজ। মোবাইল অ্যাপ থেকে লোকেশন দেখি, SMS দিয়েও কন্ট্রোল করা যায়। আসলেই চার্জ ছাড়া ট্র্যাকিং পাওয়া বিরল ধন্যবাদ!",
  },
  {
    name: "ASIKUR RAHMAN",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "আমার বাইক আমার সবচেয়ে প্রিয় জিনিস। MiCODUS ট্র্যাকার থাকায় বাইকে হাত দিলেই SMS আসে। ভাইব্রেশন এলার্ম সত্যিই কাজে দিয়েছে। মনে হয় আমার বাইক এখন অনেক বেশি সুরক্ষিত।",
  },
]);

const column2 = ref([
  {
    name: "JAHANGIR KABIR",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "আমি Bulk Gadgets থেকে একটি প্রোডাক্ট নিয়েছিলাম এবং সত্যি বলতে প্রোডাক্টটি একেবারে দারুণ ছিল। প্রথমে ভেবেছিলাম ট্র্যাকার মানে ঝামেলা, ইনস্টল কঠিন আর খরচও বেশি। কিন্তু MV730 আমার চিন্তা পাল্টে দিয়েছে। ইনস্টল করা সহজ, আর একবার কিনলেই আজীবন ফ্রি ট্র্যাকিং! এখন গ্রামের বাড়ি গেলেও অ্যাপ থেকে দেখি আমার গাড়ি কোথায় আছে।",
  },
  {
    name: "TANVIR ALAM",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "প্রতিদিন গাড়ি অফিসে রেখে যেতে হতো, চিন্তা করতাম চুরি হলে কী হবে। MV730 লাগানোর পর থেকে ফোনে রিয়েল-টাইম লোকেশন দেখি। এতটাই ভরসা পাই যে এখন মনে হয় গাড়ি চোখের সামনেই আছে। সবচেয়ে ভালো লেগেছে লাইফটাইম ফ্রি ট্র্যাকিং, কোনো চার্জ দিতে হয় না।",
  },
]);

const column3 = ref([
  {
    name: "FARDIN",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Bulk Gadgets থেকে MiCODUS MV730 নেওয়ার পর মনে হয়েছে আমি সঠিক সিদ্ধান্ত নিয়েছি। অন্য জায়গায় যেটা মাসিক চার্জে দেয়, Bulk Gadgets থেকে কেনা এই ডিভাইসটা আজীবন ফ্রি ট্র্যাকিং দিচ্ছে।",
  },
  {
    name: "NIL SAGOR",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "Bulk Gadgets সবসময় অরিজিনাল প্রোডাক্ট দেয় এটা আমার নিজের অভিজ্ঞতা। আগের ট্র্যাকারটা খুব ঝামেলা করতো, কিন্তু MV730 একেবারে স্মার্টলি কাজ করছে। সবচেয়ে ভালো লেগেছে কোনো চার্জ ছাড়াই লাইফটাইম ট্র্যাকিং।",
  },
]);
</script>

<style scoped>
/* Gradient Text Style */
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 3px !important;
  font-size: 1rem !important;
}

/* Card Specific Styles */
.review-card {
  background-color: #1e1e1e !important; /* Dark Grey Card Background */
  border: 1px solid #333; /* Subtle border */
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  border-color: #444;
}
</style>
