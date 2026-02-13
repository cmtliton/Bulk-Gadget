<template>
  <BulkHero id="hero-section" />
  <BulkOfferMarquee />
  <BulkProductFeatures id="product-details-section" />
  <BulkCustomerReviews
    id="reviews-section"
    @scroll-to-reviews="scrollToReviews"
  />
  <BulkVideoShowcase />
  <BulkInstallProcess />
  <BulkCheckout id="checkout-section" />
  <BulkStoreMap />
</template>
<script setup>
import { nextTick } from "vue";
const scrollToReviews = () => {
  nextTick(() => {
    const element = document.getElementById("reviews-section");
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
