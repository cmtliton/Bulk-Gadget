<template>
  <!-- Main Hero Section -->
  <v-main class="bg-black relative-position">
    <!-- Background Grid Effect (CSS) -->
    <div class="grid-background"></div>

    <v-container class="fill-height py-0">
      <v-row align="center" justify="center">
        <!-- Left Content Column -->
        <v-col cols="12" md="6" class="z-index-10">
          <!-- Gradient Subtitle -->
          <div class="mb-2">
            <span class="gradient-text text-h6 font-weight-medium">
              রিয়েল - টাইম ট্র্যাকিং
            </span>
          </div>

          <!-- Main Headline -->
          <h1
            class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-white mb-6 leading-tight"
          >
            MiCODUS MV730 <br />
            Tracker দিচ্ছে লাইফটাইম <br />
            ফ্রি ট্র্যাকিং, কোনো মাসিক <br />
            বা বার্ষিক চার্জ ছাড়া!
          </h1>

          <!-- Feature List -->
          <v-list bg-color="transparent" density="compact" class="pa-0 mb-8">
            <v-list-item v-for="(feature, i) in features" :key="i" class="px-0">
              <template v-slot:prepend>
                <v-icon
                  color="success"
                  icon="mdi-check-circle"
                  class="mr-3"
                ></v-icon>
              </template>
              <v-list-item-title class="text-body-1 text-grey-lighten-1">
                {{ feature }}
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <!-- CTA Button -->
          <v-btn
            size="x-large"
            rounded="pill"
            class="gradient-btn-primary pr-2 pl-6 mb-8"
            height="56"
            @click="scrollToCheckout"
          >
            <span class="mr-4 text-body-1 font-weight-bold"
              >এখনই অর্ডার করুন</span
            >
            <v-avatar color="white" size="32">
              <v-icon color="black" size="small">mdi-arrow-right</v-icon>
            </v-avatar>
          </v-btn>

          <!-- Review Stars -->
          <div class="d-flex align-center">
            <v-rating
              :model-value="5"
              color="amber-darken-2"
              active-color="amber-accent-4"
              density="compact"
              readonly
              half-increments
              size="small"
            ></v-rating>
            <span class="ml-3 text-white text-body-2 font-weight-bold">
              4.8 (100+ Reviews)
            </span>
          </div>
        </v-col>

        <!-- Right Image Column -->
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center z-index-10"
        >
          <!-- 
              NOTE: Replace the src below with your actual transparent PNG 
              of the phone/tracker illustration.
            -->
          <v-img
            src="/images/bulk/tracking-image-hero.avif"
            max-width="600"
            alt="MiCODUS MV730 Tracker Illustration"
            class="floating-animation"
          >
            <!-- Placeholder fallback if image fails -->
            <template v-slot:placeholder>
              <div
                class="d-flex align-center justify-center fill-height bg-grey-darken-4 rounded-lg"
                style="height: 400px; width: 100%; opacity: 0.5"
              >
                <span class="text-grey">3D Tracker Illustration Here</span>
              </div>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, nextTick } from "vue";

const features = ref([
  "পৃথিবীর যেকোনো জায়গা থেকে গাড়ির লাইভ লোকেশন",
  "একবার কিনলেই আজীবন ফ্রি",
  "কোনো মাসিক বা বার্ষিক চার্জ নেই",
  "রিয়েল-টাইম লোকেশন ট্র্যাকিং",
  "SMS ও অ্যাপ – দুইভাবেই মনিটরিং",
]);

const scrollToCheckout = () => {
  nextTick(() => {
    const element = document.getElementById("checkout-section");
    if (element) {
      // Calculate offset for fixed header (80px height)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // এটি স্মুথলি নিচে নামবে
      });
    }
  });
};
</script>

<style scoped>
/* Typography Fixes */
.leading-tight {
  line-height: 1.3 !important;
}

.tracking-wide {
  letter-spacing: 1px;
}

/* Gradient Text Class */
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* Contact Us Button Gradient */
.gradient-btn {
  background: linear-gradient(90deg, #7c3aed, #2563eb); /* Purple to Blue */
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

/* Main CTA Button Gradient (More vibrant) */
.gradient-btn-primary {
  background: linear-gradient(90deg, #9333ea, #3b82f6);
  color: white;
  text-transform: none; /* Keep Bengali text natural */
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); /* Glow effect */
}

/* Background Grid Pattern (Subtle lines) */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  pointer-events: none;
  z-index: 0;
}

.z-index-10 {
  z-index: 10;
  position: relative;
}

/* Optional Floating Animation for the image */
.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Utility for gap */
.gap-4 {
  gap: 16px;
}
</style>
