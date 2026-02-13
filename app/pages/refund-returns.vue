<template>
  <v-container class="py-10" id="hero-section">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <!-- Header Card -->
        <v-card
          flat
          class="brand-border pa-6 mb-8 text-center rounded-xl elevation-1"
        >
          <v-icon size="64" color="#a855f7" class="mb-4"
            >mdi-package-variant-closed-refresh</v-icon
          >
          <h1 class="text-h4 font-weight-bold mb-2 brand-text">
            রিফান্ড এবং রিটার্ন পলিসি
          </h1>
          <p class="text-subtitle-1 text-grey-darken-1">
            Bulk Gadgets থেকে কেনা সকল ইলেকট্রনিক পণ্যে গ্রাহকদের সর্বোচ্চ সেবা
            ও সন্তুষ্টি নিশ্চিত করতে আমাদের নীতিমালা
          </p>
        </v-card>

        <!-- Main Content -->
        <v-row>
          <!-- Replacement Section -->
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="h-100 rounded-lg border-brand">
              <v-card-item>
                <template v-slot:prepend>
                  <v-avatar color="#a855f7" size="48" class="mr-3">
                    <v-icon color="white">mdi-calendar-sync</v-icon>
                  </v-avatar>
                </template>
                <v-card-title class="font-weight-bold"
                  >৭ দিনের রিপ্লেসমেন্ট গ্যারান্টি</v-card-title
                >
              </v-card-item>
              <v-card-text>
                <p class="mb-3">
                  উৎপাদন ত্রুটি বা সমস্যা দেখা দিলে ক্রয়ের ৭ দিনের মধ্যে
                  পরিবর্তনের সুযোগ পাবেন। শর্তাবলী:
                </p>
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-circle-small"
                    >পণ্যটি অব্যবহৃত ও অক্ষত থাকতে হবে।</v-list-item
                  >
                  <v-list-item prepend-icon="mdi-circle-small"
                    >ক্রয়ের রশিদ বা ইনভয়েস থাকতে হবে।</v-list-item
                  >
                  <v-list-item prepend-icon="mdi-circle-small"
                    >মূল প্যাকেজিং ও এক্সেসরিজ সম্পূর্ণ থাকতে হবে।</v-list-item
                  >
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Warranty Section -->
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="h-100 rounded-lg border-brand">
              <v-card-item>
                <template v-slot:prepend>
                  <v-avatar color="#a855f7" size="48" class="mr-3">
                    <v-icon color="white">mdi-shield-check</v-icon>
                  </v-avatar>
                </template>
                <v-card-title class="font-weight-bold"
                  >১ বছরের ওয়ারেন্টি</v-card-title
                >
              </v-card-item>
              <v-card-text>
                <p class="mb-3">
                  Bulk Gadgets-এর পণ্যে ৬ মাসের ওয়ারেন্টি দেওয়া হয়। কারিগরি
                  ত্রুটির ক্ষেত্রে আমরা ফ্রি সার্ভিসিং বা রিপ্লেসমেন্ট প্রদান
                  করি।
                </p>
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-circle-small"
                    >ইনভয়েস প্রদর্শন বাধ্যতামূলক।</v-list-item
                  >
                  <v-list-item prepend-icon="mdi-circle-small"
                    >ভুল ব্যবহারের ফলে সৃষ্ট ত্রুটি গ্রহণযোগ্য নয়।</v-list-item
                  >
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Refund & Procedure Section -->
          <v-col cols="12">
            <v-card color="grey-lighten-4" class="rounded-lg pa-4">
              <v-row>
                <v-col cols="12" md="6">
                  <h3 class="text-h6 font-weight-bold brand-text mb-3">
                    <v-icon class="mr-2">mdi-cash-refund</v-icon>রিফান্ড
                    প্রক্রিয়া
                  </h3>
                  <p>
                    ব্যতিক্রমী পরিস্থিতিতে (যেমন: স্টক না থাকা বা ভুল ডেলিভারি)
                    সম্পূর্ণ অর্থ ফেরত দেওয়া হয়। যাচাইয়ের পর ৭-১০ কার্যদিবসের
                    মধ্যে অর্থ ফেরত দেওয়া হয়।
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <h3 class="text-h6 font-weight-bold brand-text mb-3">
                    <v-icon class="mr-2">mdi-truck-delivery</v-icon>রিটার্ন
                    পদ্ধতি
                  </h3>
                  <p>
                    রিটার্নের জন্য আমাদের কাস্টমার কেয়ারে যোগাযোগ করুন। আমরা
                    সাধারণত ৫-৭ কার্যদিবসের মধ্যে রিপ্লেসমেন্ট পণ্য সরবরাহ করি।
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Important Notes -->
          <v-col cols="12">
            <v-alert
              icon="mdi-information-outline"
              title="বিশেষ দ্রষ্টব্য"
              variant="tonal"
              color="#a855f7"
              class="rounded-lg"
            >
              <ul class="ml-4 mt-2">
                <li>
                  কাস্টমাইজড বা স্পেশাল অর্ডারের ক্ষেত্রে রিটার্ন প্রযোজ্য নয়।
                </li>
                <li>পরিবহনজনিত ক্ষতি হলে আমাদের অবিলম্বে জানাতে হবে।</li>
              </ul>
            </v-alert>
          </v-col>

          <!-- Footer/Contact Section -->
          <v-col cols="12" class="text-center mt-6">
            <v-card flat class="pa-6 rounded-xl bg-brand-light text-black">
              <h3 class="text-h6 font-weight-bold mb-4">
                যেকোনো প্রশ্ন বা তথ্যের জন্য যোগাযোগ করুন
              </h3>
              <v-row justify="center">
                <v-btn
                  prepend-icon="mdi-email"
                  variant="text"
                  color="#a855f7"
                  href="mailto:bulkgadgetsbd@gmail.com"
                  class="text-none"
                >
                  bulkgadgetsbd@gmail.com
                </v-btn>
                <v-btn
                  prepend-icon="mdi-phone"
                  variant="text"
                  color="#a855f7"
                  href="tel:+8801991001839"
                  class="text-none"
                >
                  +8801991001839
                </v-btn>
              </v-row>
              <p class="mt-6 text-body-2 font-italic">
                "Bulk Gadgets সবসময় আপনার সন্তুষ্টি নিশ্চিত করতে
                প্রতিশ্রুতিবদ্ধ"
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
useHead({
  title: "Refund & Returns Policy | Bulk Gadgets",
  meta: [
    {
      name: "description",
      content:
        "Bulk Gadgets এর রিফান্ড এবং রিটার্ন পলিসি সংক্রান্ত বিস্তারিত তথ্য।",
    },
  ],
});
</script>

<style scoped>
.brand-text {
  color: #a855f7;
}
.brand-border {
  border-top: 6px solid #a855f7 !important;
}
.border-brand {
  border-color: #a855f7 !important;
}
.bg-brand-light {
  background-color: #f5f0ff !important;
}
.v-card-title {
  white-space: normal;
  line-height: 1.4;
}
</style>
