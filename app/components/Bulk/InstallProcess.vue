<template>
  <v-sheet color="black" class="py-16">
    <v-container>
      <v-row justify="center" class="w-100">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <!-- Small Header (Install Process) -->
          <!-- Using a teal/cyan color to match the image -->
          <h3 class="gradient-text text-h6 font-weight-bold mb-2">
            ইনস্টল প্রক্রিয়া
          </h3>

          <!-- Main Heading -->
          <!-- Using Bengali text from image -->
          <h1 class="text-white text-h4 text-md-h3 font-weight-bold mb-10">
            Micodus Mv730 কিভাবে ইনস্টল<br class="d-none d-sm-flex" />
            করবেন আপনার যানবাহনে
          </h1>
        </v-col>
      </v-row>
      <!-- Video Wrapper with Gradient Border -->
      <div class="gradient-border-container mx-auto">
        <div class="video-responsive">
          <iframe
            :src="embedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { computed } from "vue";

// Props to accept any YouTube link
const props = defineProps({
  videoUrl: {
    type: String,
    // Defaulting to a tech/tracker related video or the one from your context
    default: "https://youtu.be/C3Zwgd8QKHw",
  },
});

// Computed property to convert standard YouTube URL to Embed URL
const embedUrl = computed(() => {
  if (!props.videoUrl) return "";

  // Simple regex to extract video ID from various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = props.videoUrl.match(regExp);

  const videoId = match && match[2].length === 11 ? match[2] : null;

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
});
</script>

<style scoped>
/* 
     1. The Container
     This div creates the "Border". We give it a gradient background
     and padding. The padding size determines the border thickness.
  */
.gradient-border-container {
  position: relative;
  width: 100%;
  max-width: 900px; /* Limit width on large screens */

  /* The Gradient Color (Purple to Pink) matches your screenshot */
  background: linear-gradient(45deg, #7c3aed, #d946ef);

  padding: 4px; /* Thickness of the border */
  border-radius: 24px; /* Rounded corners */
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3); /* Optional glow effect */
}

/* 
     2. The Aspect Ratio Wrapper 
     Ensures the video keeps 16:9 ratio and curves the inner content
  */
.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  height: 0;
  border-radius: 20px; /* Slightly less than parent to fit perfectly */
  background-color: black; /* Prevents white flashes while loading */
}

/* 
     3. The Iframe
     Fills the responsive wrapper
  */
.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.tracking-wide {
  letter-spacing: 1px;
}

.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4); /* Purple to Cyan */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}
</style>
