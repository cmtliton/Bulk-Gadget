<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useHead } from "#app";
useHead({
  title: "MiCODUS MV730 GPS Tracker - Lifetime Free Tracking | Bulk Gadgets BD",
  meta: [
    {
      name: "description",
      content:
        "গাড়ির নিরাপত্তার জন্য MiCODUS MV730 জিপিএস ট্র্যাকার। কোনো মাসিক বা বার্ষিক চার্জ নেই, পাবেন লাইফটাইম ফ্রি ট্র্যাকিং এবং রিমোটলি ফুয়েল বন্ধ করার সুবিধা।",
    },
    {
      property: "og:title",
      content: "MiCODUS MV730: লাইফটাইম ফ্রি ট্র্যাকিং জিপিএস ট্র্যাকার",
    },
    {
      property: "og:description",
      content:
        "রিয়েল-টাইম ট্র্যাকিং, ১৮০ দিনের হিস্টোরি এবং রিমোট ইঞ্জিন কাট-অফ সুবিধা নিয়ে এলো Micodus MV 730।",
    },
    { property: "og:image", content: "/images/bulk/download.jpeg" }, // আপনার প্রোডাক্ট ইমেজ পাথ
    {
      name: "keywords",
      content:
        "MiCODUS MV730, GPS Tracker BD, Car Tracker No Monthly Fee, Lifetime Free Tracking, Bulk Gadgets, GPS Tracker Price in Bangladesh",
    },
  ],
});
onMounted(() => {
  useTheme().global.name.value = "dark";
});
</script>
