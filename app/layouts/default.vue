<template>
  <v-app theme="dark">
    <!-- Navigation Bar -->
    <v-app-bar flat color="black" height="80" class="px-md-10">
      <template v-slot:prepend>
        <div
          class="d-flex align-center cursor-pointer"
          @click="navigateTo('/')"
        >
          <v-icon color="purple-accent-2" class="mr-2">mdi-cube-scan</v-icon>
          <span class="text-h6 font-weight-bold text-white tracking-wide"
            >BULK GADGET</span
          >
        </div>
      </template>

      <!-- Mobile Menu Button -->
      <template v-if="$vuetify.display.mdAndDown" #append>
        <div class="hidden-md-and-up mr-3">
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
      </template>

      <v-spacer></v-spacer>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex align-center gap-4">
        <v-btn variant="text" class="text-capitalize" @click="scrollToHome"
          >Home</v-btn
        >
        <v-btn
          variant="text"
          class="text-capitalize"
          @click="scrollToProductDetails"
          >Product Details</v-btn
        >

        <!-- Special Offers with Blue Background -->
        <v-btn
          class="text-capitalize bg-cyan-darken-1 text-white mx-2"
          flat
          rounded="sm"
          @click="scrollToCheckout"
        >
          Special Offers
        </v-btn>

        <v-btn variant="text" class="text-capitalize" @click="scrollToReviews"
          >Customer Reviews</v-btn
        >
      </div>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn
          rounded="pill"
          class="gradient-btn-primary px-6 text-capitalize d-none d-md-flex"
          color="primary"
          height="45"
          variant="flat"
          @click="scrollToCheckout"
        >
          Contact us
        </v-btn>
      </template>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      color="black"
      width="250"
      class="d-flex d-md-none"
      expand-on-hover
    >
      <v-list nav density="compact" class="pa-4" v-model:opened="open">
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
          @click="scrollToHome"
          class="text-white mb-2"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-package-variant"
          title="Product Details"
          value="product-details"
          @click="scrollToProductDetails"
          class="text-white mb-2"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-tag"
          title="Special Offers"
          value="special-offers"
          class="text-white mb-2 bg-cyan-darken-1 rounded-lg"
          @click="scrollToCheckout"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          title="Customer Reviews"
          value="reviews"
          @click="scrollToReviews"
          class="text-white mb-2"
        ></v-list-item>

        <v-divider class="my-4 bg-grey-darken-1"></v-divider>

        <v-btn
          rounded="pill"
          class="gradient-btn-primary px-6 text-capitalize w-100"
          color="primary"
          height="45"
          variant="flat"
          @click="scrollToCheckout"
          block
        >
          Contact us
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
    <WhatsappHelpDesk />
    <BulkAppFooter />
  </v-app>
</template>
<script setup>
import BulkAppFooter from "~/components/Bulk/AppFooter.vue";
import { nextTick } from "vue";

// Generic scroll function with header offset
const scrollToSection = (sectionId) => {
  nextTick(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed header (80px height)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigateTo("/#" + sectionId);
    }
  });
};
const drawer = ref(false);
const group = ref(null);
const open = ref([]);

watch(group, () => {
  drawer.value = false;
});

const scrollToHome = () => {
  scrollToSection("hero-section");
};

const scrollToProductDetails = () => {
  scrollToSection("product-details-section");
};

const scrollToReviews = () => {
  scrollToSection("reviews-section");
};

const scrollToCheckout = () => {
  scrollToSection("checkout-section");
};
</script>
<style scoped>
.gradient-btn-primary {
  background: linear-gradient(90deg, #9333ea, #3b82f6);
  color: white;
  text-transform: none; /* Keep Bengali text natural */
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); /* Glow effect */
}
</style>
