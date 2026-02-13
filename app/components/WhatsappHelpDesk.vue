<template>
  <div class="help-desk-wrapper">
    <!-- Tooltip/Label that appears on hover or periodically -->
    <div class="chat-bubble shadow-lg">
      <span class="dot"></span>
      আমরা অনলাইনে আছি!
    </div>

    <!-- Main WhatsApp Button -->
    <v-btn
      icon
      size="65"
      class="whatsapp-btn elevation-10"
      :href="whatsappLink"
      target="_blank"
    >
      <div class="inner-circle">
        <v-icon size="35" color="white">mdi-whatsapp</v-icon>
      </div>

      <!-- Pulsing Ring Animation -->
      <span class="pulse-ring"></span>
    </v-btn>
  </div>
</template>

<script setup>
const whatsappLink = "https://wa.link/q5ruqv";
</script>

<style scoped>
.help-desk-wrapper {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

/* Realistic Chat Bubble */
.chat-bubble {
  background: white;
  color: #333;
  padding: 8px 15px;
  border-radius: 20px 20px 5px 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  animation: bounce 2s infinite;
}

.dot {
  height: 8px;
  width: 8px;
  background-color: #4caf50;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

/* Floating Button Styling */
.whatsapp-btn {
  background: linear-gradient(45deg, #25d366, #128c7e) !important;
  border: 3px solid white !important;
  transition: transform 0.3s ease;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
}

.inner-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Realistic Pulse Animation */
.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #25d366;
  opacity: 0.6;
  z-index: -1;
  animation: pulse 2s infinite;
}

/* Animations */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

/* Brand touch: If you want to use your brand color for the bubble's border */
.chat-bubble {
  border-left: 4px solid #a855f7; /* Your brand color */
}
</style>
