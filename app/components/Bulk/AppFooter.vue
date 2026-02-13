<template>
  <v-footer color="#050505" class="pt-16 pb-8">
    <v-container>
      <v-row>
        <!-- Column 1: Brand & Description -->
        <v-col cols="12" md="5" lg="4" class="mb-8 mb-md-0">
          <!-- Logo Section -->
          <div class="d-flex align-center mb-5">
            <v-avatar rounded="0" class="mr-2">
              <v-icon size="large" color="purple-accent-2"
                >mdi-cube-scan</v-icon
              >
            </v-avatar>
            <span class="text-h6 font-weight-bold text-white tracking-wide">
              BULK GADGET
            </span>
          </div>

          <!-- Description -->
          <p
            class="text-grey-lighten-1 text-body-2"
            style="line-height: 1.8; max-width: 300px"
          >
            Purchase a bulk quantity of authentic gadgets with the lowest price
          </p>
        </v-col>

        <!-- Column 2: Quick Links -->
        <v-col cols="6" md="3" lg="2">
          <h4
            class="text-subtitle-1 font-weight-bold text-white mb-6 text-uppercase"
          >
            Quick Links
          </h4>
          <div class="d-flex flex-column gap-3">
            <NuxtLink to="/" class="footer-link">About Us</NuxtLink>
            <NuxtLink to="/privacy-policy" class="footer-link"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink to="/refund-returns" class="footer-link"
              >Refund and Returns Policy</NuxtLink
            >
            <NuxtLink to="/" class="footer-link">Terms and condition</NuxtLink>
          </div>
        </v-col>

        <!-- Column 3: Why Us -->
        <v-col cols="6" md="3" lg="2">
          <h4
            class="text-subtitle-1 font-weight-bold text-white mb-6 text-uppercase"
          >
            Why Us
          </h4>
          <div class="d-flex flex-column gap-3">
            <NuxtLink to="/" class="footer-link">24/7 Support</NuxtLink>
            <NuxtLink to="/" class="footer-link">Free Shipping</NuxtLink>
            <NuxtLink to="/" class="footer-link"
              >Refund and Returns Policy</NuxtLink
            >
            <NuxtLink to="/" class="footer-link">Online Payment</NuxtLink>
          </div>
        </v-col>
      </v-row>

      <!-- Copyright / Bottom Bar (Optional, standard for footers) -->
      <!-- 
      <v-divider class="mt-12 mb-6 border-opacity-25"></v-divider>
      <div class="text-center text-caption text-grey-darken-1">
        &copy; {{ new Date().getFullYear() }} Bulk Gadget. All rights reserved.
      </div> 
      -->
    </v-container>
  </v-footer>
</template>

<script setup>
// No script logic needed for this static footer
</script>

<style scoped>
/* Custom Tracking for Logo text */
.tracking-wide {
  letter-spacing: 1px;
}

/* Gap utility for flex containers */
.gap-3 {
  gap: 12px;
}

/* Link Styling */
.footer-link {
  color: #9e9e9e; /* Grey Lighten 1 equivalent */
  text-decoration: none;
  font-size: 0.875rem; /* text-body-2 */
  transition: all 0.3s ease;
  width: fit-content;
  position: relative;
}

/* Hover Effect: Slide right and change color */
.footer-link:hover {
  color: white;
  transform: translateX(5px);
}

/* Optional: Add a gradient icon color if you want it to match the header exactly */
.mdi-cube-scan {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
