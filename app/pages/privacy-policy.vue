<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="2" class="pa-6 rounded-lg">
          <!-- Header Section -->
          <v-card-item class="text-center mb-6">
            <v-icon size="64" color="primary" class="mb-4"
              >mdi-shield-check</v-icon
            >
            <v-card-title
              class="text-h4 font-weight-bold text-primary gradient-text"
            >
              প্রাইভেসি পলিসি - Bulk Gadgets
            </v-card-title>
            <v-card-subtitle class="mt-2 text-body-1">
              আপনার তথ্যের নিরাপত্তা আমাদের অগ্রাধিকার
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mb-6"></v-divider>

          <v-card-text class="text-body-1 leading-relaxed text-grey-darken-3">
            <p class="mb-6">
              আমাদের <strong>Bulk Gadgets</strong> ওয়েবসাইটে আপনার ব্যক্তিগত
              তথ্যের গোপনীয়তা আমাদের কাছে সর্বাধিক গুরুত্ব বহন করে। এই
              প্রাইভেসি পলিসিতে আমরা স্পষ্টভাবে উল্লেখ করছি, কিভাবে আমরা আপনার
              তথ্য সংগ্রহ, সংরক্ষণ ও ব্যবহার করি।
            </p>

            <!-- Section 1: Info Collection -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2"
                  >mdi-account-details</v-icon
                >
                তথ্য সংগ্রহের ধরন
              </h2>
              <p class="mb-2">
                আমরা গ্রাহকদের নিম্নোক্ত তথ্য সংগ্রহ করতে পারি:
              </p>
              <v-list density="compact" class="bg-grey-lighten-4 rounded-lg">
                <v-list-item prepend-icon="mdi-check-circle-outline"
                  >নাম, ফোন নম্বর, ইমেইল এবং যোগাযোগের ঠিকানা</v-list-item
                >
                <v-list-item prepend-icon="mdi-check-circle-outline"
                  >অর্ডারের বিবরণ (পণ্য, পরিমাণ, মূল্য)</v-list-item
                >
                <v-list-item prepend-icon="mdi-check-circle-outline"
                  >লেনদেনের তথ্য</v-list-item
                >
              </v-list>
            </section>

            <!-- Section 2: Purpose -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-bullseye-arrow</v-icon>
                তথ্য সংগ্রহের উদ্দেশ্য
              </h2>
              <v-list density="compact" class="bg-grey-lighten-4 rounded-lg">
                <v-list-item prepend-icon="mdi-truck-delivery"
                  >পণ্য সরবরাহ নিশ্চিত করা</v-list-item
                >
                <v-list-item prepend-icon="mdi-headphones"
                  >গ্রাহক সহায়তা প্রদান করা</v-list-item
                >
                <v-list-item prepend-icon="mdi-bell-ring"
                  >অর্ডার ও ডেলিভারি সংক্রান্ত আপডেট প্রদান</v-list-item
                >
                <v-list-item prepend-icon="mdi-trending-up"
                  >সেবা উন্নয়নে ব্যবহার করা</v-list-item
                >
              </v-list>
            </section>

            <!-- Section 3: Security -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-lock-check</v-icon>
                তথ্যের নিরাপত্তা
              </h2>
              <p>
                আমরা আপনার তথ্য নিরাপদে সংরক্ষণে আধুনিক প্রযুক্তি ব্যবহার করি
                এবং কোনোভাবেই তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রি বা শেয়ার করি
                না।
              </p>
            </section>

            <!-- Section 4: Cookies -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-cookie</v-icon>
                কুকিজ ব্যবহার
              </h2>
              <p>
                আমাদের ওয়েবসাইট ব্যবহার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করতে
                পারে। আপনি চাইলে ব্রাউজার থেকে এটি নিষ্ক্রিয় করতে পারেন।
              </p>
            </section>

            <!-- Section 5: Third Party -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-link-variant</v-icon>
                তৃতীয় পক্ষের লিংক
              </h2>
              <p>
                আমাদের ওয়েবসাইটে তৃতীয় পক্ষের লিংক থাকতে পারে, যার জন্য আমরা
                দায়বদ্ধ নই। তাদের প্রাইভেসি পলিসি অনুসরণ করার জন্য অনুরোধ করছি।
              </p>
            </section>

            <!-- Section 6: Updates -->
            <section class="mb-8">
              <h2 class="text-h6 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-update</v-icon>
                পলিসি সংশোধন
              </h2>
              <p>
                আমাদের প্রয়োজন অনুসারে এই পলিসি যেকোনো সময় পরিবর্তন করতে পারি,
                যা এই পেজে আপডেট করা হবে।
              </p>
            </section>

            <!-- Contact Section -->
            <v-alert
              border="start"
              color="primary"
              variant="tonal"
              class="mt-10"
            >
              <h3 class="text-h6 font-weight-bold mb-2">যোগাযোগ</h3>
              <p class="mb-1">
                এই প্রাইভেসি পলিসি সম্পর্কিত যেকোনো প্রশ্ন বা পরামর্শের জন্য
                আমাদের সাথে যোগাযোগ করুন:
              </p>
              <div class="d-flex flex-column mt-3">
                <span class="d-flex align-center mb-1">
                  <v-icon size="small" class="mr-2">mdi-email</v-icon>
                  ইমেইল: bulkgadgetsbd@gmail.com
                </span>
                <span class="d-flex align-center">
                  <v-icon size="small" class="mr-2">mdi-phone</v-icon>
                  ফোন: +880 1991-001839
                </span>
              </div>
            </v-alert>
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <p class="text-caption text-grey">
              আপনার আস্থা ও বিশ্বাসের জন্য <strong>Bulk Gadgets</strong> পরিবার
              আন্তরিকভাবে কৃতজ্ঞ।
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
useHead({
  title: "Privacy Policy | Bulk Gadgets",
  meta: [
    {
      name: "description",
      content:
        "Bulk Gadgets এর প্রাইভেসি পলিসি ও তথ্য সুরক্ষা সংক্রান্ত বিস্তারিত।",
    },
  ],
});
</script>

<style scoped>
.leading-relaxed {
  line-height: 1.8;
}
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>
