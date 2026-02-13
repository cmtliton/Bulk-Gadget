<template>
    <v-app>
      <!-- Navbar -->
      <v-app-bar flat color="transparent" class="px-4 py-2" absolute>
        <div class="d-flex align-center cursor-pointer">
          <v-icon icon="mdi-triangle-outline" color="primary" size="x-large" class="mr-2"></v-icon>
          <span class="text-h6 font-weight-bold text-white">Mastering <span class="text-primary">Nuxt</span></span>
        </div>
  
        <v-spacer></v-spacer>
  
        <div class="d-none d-md-flex align-center text-body-2 font-weight-medium">
          <span class="mr-1 text-grey-lighten-1">২০২৫ এডিশন</span>
          <v-chip size="x-small" color="blue" label class="font-weight-bold mr-6">NEW</v-chip>
          <a href="#" class="text-white text-decoration-none mr-6">ব্লগ</a>
        </div>
  
        <div class="d-flex align-center">
          <span class="mr-3 text-body-2 d-none d-sm-block">হ্যালো, লিটন মিয়া</span>
          <v-avatar image="https://randomuser.me/api/portraits/men/85.jpg" size="40" style="border: 2px solid #00DC82;"></v-avatar>
          <v-icon icon="mdi-chevron-down" class="ml-1"></v-icon>
        </div>
      </v-app-bar>
  
      <!-- Main Hero Section -->
      <v-main class="hero-background d-flex align-center justify-center text-center">
        <v-container>
          
          <!-- Super Early Bird Badge -->
          <div class="d-flex justify-center mb-6">
            <div class="glow-badge py-1 px-4 rounded-pill text-caption font-weight-bold">
              <span class="text-primary">সুপার আর্লি বার্ড অফার</span> <span class="text-white ml-1">| ২৬ নভেম্বর শেষ হবে</span>
            </div>
          </div>
  
          <!-- Main Headline -->
          <h1 class="text-h3 text-md-h1 font-weight-bold text-white mb-4 lh-tight">
            Mastering <span class="text-primary">Nuxt</span> <br>
            Fullstack Unleashed
          </h1>
  
          <!-- Description (Bangla) -->
          <p class="text-grey-lighten-1 text-body-1 text-md-h6 mx-auto mb-8" style="max-width: 800px; line-height: 1.6;">
            নাক্সট-এর লেটেস্ট অফিশিয়াল হ্যান্ডস-অন কোর্স। <span class="text-primary">Nuxt 4</span> এবং <span class="text-primary">AI-পাওয়ারড প্রজেক্ট</span> দিয়ে নিজেকে জিরো থেকে প্রোডাকশন লেভেলে নিয়ে যান।
            <br> <span class="text-white font-weight-bold">১০০+ লেসন এখন সম্পূর্ণ রেডি!</span>
          </p>
  
          <!-- Black Friday Section -->
          <div class="mt-10 mb-4">
            <h2 class="text-h3 font-weight-black text-uppercase text-white mb-1">
              Black Friday
            </h2>
            <h2 class="text-h4 font-weight-black text-uppercase text-primary glow-text">
              অফার চলছে!
            </h2>
          </div>
  
          <p class="text-grey-lighten-2 mb-8">
            সম্পূর্ণ প্ল্যানটি <span class="text-primary font-weight-bold">৫০% ছাড়ে</span> কিনুন এবং নিজের নাক্সট স্কিল আপগ্রেড করুন
          </p>
  
          <!-- CTA Button -->
          <v-btn
            color="primary"
            size="x-large"
            rounded="lg"
            class="px-10 py-6 text-black font-weight-bold text-body-1 btn-glow"
            elevation="10"
          >
            অফারটি লুফে নিন <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
          </v-btn>
  
        </v-container>
      </v-main>
  
      <!-- Background Wave Decoration (Abstract) -->
      <div class="wave-lines"></div>
    </v-app>
  </template>
  
  <style scoped>
  /* গুগল ফন্ট ইম্পোর্ট (বাংলা ফন্টের জন্য) */
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
  
  .v-application {
    font-family: 'Hind Siliguri', sans-serif !important;
    background-color: #020420 !important;
  }
  
  .hero-background {
    background: radial-gradient(circle at 50% 30%, rgba(0, 220, 130, 0.1) 0%, rgba(2, 4, 32, 0) 50%), #020420;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }
  
  /* Badge Glow Effect */
  .glow-badge {
    background: rgba(0, 220, 130, 0.1);
    border: 1px solid rgba(0, 220, 130, 0.5);
    box-shadow: 0 0 15px rgba(0, 220, 130, 0.2);
  }
  
  /* Text Glow */
  .glow-text {
    text-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
  }
  
  /* Button Glow and Hover */
  .btn-glow {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-glow:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(0, 220, 130, 0.6) !important;
  }
  
  /* Abstract Wave Lines (Simple CSS representation) */
  .wave-lines {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.03) 10px,
      rgba(255, 255, 255, 0.03) 11px
    );
    pointer-events: none;
    z-index: 0;
    mask-image: linear-gradient(to top, black, transparent);
  }
  </style>