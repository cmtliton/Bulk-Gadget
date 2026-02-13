<template>
  <v-sheet color="black" class="py-16">
    <v-container>
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h3 class="gradient-text text-h6 font-weight-bold mb-2">
          প্রধান ফিচারসমূহ
        </h3>
        <h2 class="text-h4 text-md-h3 font-weight-bold text-white">
          কেন বেছে নেবেন Micodus MV 730
        </h2>
      </div>

      <!-- Features List -->
      <div class="mx-auto" style="max-width: 900px">
        <v-row no-gutters>
          <v-col cols="12">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="d-flex align-start mb-4"
            >
              <!-- Icon -->
              <v-icon
                color="success"
                icon="mdi-check-circle"
                size="large"
                class="mr-4 mt-1 flex-shrink-0"
              ></v-icon>

              <!-- Text -->
              <span
                class="text-body-1 text-grey-lighten-1"
                style="line-height: 1.6"
              >
                {{ feature }}
              </span>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  "2G GSM/GPRS — দ্রুত ও স্থিতিশীল কানেকশন।",
  "GNSS (GPS + GLONASS + BDS) + LBS + AGPS — উচ্চ নির্ভুলতা এবং Indoors/Outdoors উভয় অবস্থানে লোকেশন সাপোর্ট।",
  "পৃথিবীর যেকোনো জায়গা থেকে আপনার গাড়ির লাইভ লোকেশন সহজেই ট্র্যাক করা। চুরি বা অপ্রত্যাশিত মুভমেন্ট হলে সাথে সাথে অ্যালার্ট পাবেন।",
  "রিয়েল-টাইম ট্র্যাকিং — গুগল ম্যাপে দেয়া ৫–১০ সেকেন্ড ইন্টারভালে লোকেশন আপডেট।",
  "Historical Route Playback — সার্ভারে সর্বোচ্চ ১৮০ দিনের ট্রিপ রেকর্ড সংরক্ষণ।",
  "GPS Data Compensation (Cornering) — মোড় অবস্থায় একিউরেট ট্র্যাকিং নিশ্চিত।",
  "Offline Storage — সিগন্যাল না থাকলেও ডেটা মেমোরিতে সংরক্ষণ, পুনরায় কানেক্ট হলে আপলোড হয়।",
  "ACC Detection & Auto Arm/Disarm — ইঞ্জিন অন/অফ হওয়ায় ডিভাইস অটোমেটিক সক্রিয় বা নিষ্ক্রিয় হবে।",
  "Remotely Cut Off / Resume Fuel — নিরাপত্তার জন্য দূর থেকে ফুয়েল বা পাওয়ার বন্ধ/চালু করা সম্ভব।",
  "Multiple Anti-Theft Alarms — ভাইব্রেশন, মুভমেন্ট, ইঞ্জিন স্টার্ট/স্টপ, জিও-ফেন্স, পাওয়ার ডিসকানেক্ট, টো এলার্ট।",
  "Low Voltage / Power Failure Alarm — ব্যাটারি বা পাওয়ার সমস্যা পর্যবেক্ষণ করে সতর্ক করবে।",
  "Lifetime Free Tracking Platform — MiCODUS Web & Android/iOS অ্যাপ Supported।",
]);
</script>

<style scoped>
/* Gradient Text Style for "প্রধান ফিচারসমূহ" */
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4); /* Purple to Cyan */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}

/* Helper to prevent icon from shrinking if text wraps */
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
