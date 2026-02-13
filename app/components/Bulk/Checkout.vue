<template>
  <v-app class="bg-black">
    <v-main>
      <v-container
        class="fill-height d-flex flex-column align-center justify-center py-10"
      >
        <!-- Header Section -->
        <div class="text-center mb-8 text-white">
          <h3 class="gradient-text text-overline font-weight-bold mb-1">
            ORDER NOW!
          </h3>
          <h1 class="text-h4 text-md-h3 font-weight-bold mb-4">
            Grab Your Micodus MV730 Today
          </h1>
          <p
            class="text-body-2 text-grey-lighten-1"
            style="max-width: 600px; margin: 0 auto; line-height: 1.6"
          >
            অর্ডার করতে নিচের ফর্মে আপনার নাম, পূর্ণ ঠিকানা এবং মোবাইল নাম্বার
            লিখুন। তারপর নিচে Place order বাটনে ক্লিক করে আপনার অর্ডারটি সম্পন্ন
            করুন।
          </p>
        </div>

        <!-- Main Form Card with Gradient Border -->
        <div class="gradient-border-wrapper">
          <v-card
            class="pa-6 pa-md-8 rounded-lg"
            flat
            color="white"
            width="100%"
            max-width="900"
          >
            <v-form ref="formRef" @submit.prevent="handlePlaceOrder">
              <!-- Contact Information -->
              <h3 class="text-h6 text-grey-darken-3 mb-4">
                Contact Information
              </h3>

              <v-text-field
                label="Full Name *"
                v-model="form.name"
                variant="underlined"
                color="primary"
                class="mb-2"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Phone *"
                    v-model="form.phone"
                    variant="underlined"
                    color="primary"
                    :rules="[rules.required, rules.phone]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email Address"
                    v-model="form.email"
                    variant="underlined"
                    color="primary"
                    type="email"
                    :rules="[rules.email]"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                label="Full Address *"
                v-model="form.address"
                variant="underlined"
                color="primary"
                class="mb-6"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <!-- Shipping Methods -->
              <h3 class="text-h6 text-grey-darken-3 mb-4">Shipping Methods</h3>
              <v-sheet border rounded class="pa-3 bg-grey-lighten-5 mb-8">
                <v-radio-group v-model="form.shipping" hide-details>
                  <v-radio value="free" color="primary">
                    <template v-slot:label>
                      <div class="d-flex align-center w-100">
                        <span class="text-body-1 text-black"
                          >Free shipping</span
                        >
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-sheet>

              <!-- Your Cart -->
              <h3 class="text-h6 text-grey-darken-3 mb-4">Your Cart</h3>

              <!-- Product Row -->
              <div class="d-flex flex-column flex-sm-row align-center mb-4">
                <div class="d-flex align-center flex-grow-1 w-100">
                  <v-avatar rounded="0" size="60" class="me-4">
                    <!-- Placeholder image -->
                    <v-img src="/images/bulk/download.jpeg" cover></v-img>
                  </v-avatar>

                  <div class="flex-grow-1">
                    <div class="font-weight-bold text-body-1 mb-2">
                      Micodus Tracker
                    </div>

                    <!-- Quantity Controls -->
                    <div class="d-flex align-center">
                      <!-- Minus -->
                      <v-btn
                        size="x-small"
                        variant="outlined"
                        class="rounded-s"
                        style="min-width: 24px; width: 24px; height: 24px"
                        @click="decreaseQuantity"
                        :disabled="quantity <= 1"
                      >
                        <v-icon size="14">mdi-minus</v-icon>
                      </v-btn>

                      <!-- Input -->
                      <input
                        type="number"
                        v-model.number="quantity"
                        min="1"
                        class="text-center border-t border-b"
                        style="
                          width: 40px;
                          height: 24px;
                          font-size: 12px;
                          outline: none;
                          border-color: rgba(0, 0, 0, 0.12);
                        "
                        @input="validateQuantity"
                      />

                      <!-- Plus -->
                      <v-btn
                        size="x-small"
                        variant="outlined"
                        class="rounded-e"
                        style="min-width: 24px; width: 24px; height: 24px"
                        @click="increaseQuantity"
                      >
                        <v-icon size="14">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>

                <div class="mt-4 mt-sm-0 font-weight-medium">
                  {{ quantity }} x {{ formatPrice(unitPrice) }}
                </div>
              </div>

              <v-divider class="mb-4"></v-divider>

              <!-- Totals -->
              <div class="d-flex justify-space-between mb-2 text-body-2">
                <span>Subtotal</span>
                <span>{{ formatPrice(subtotal) }}</span>
              </div>
              <div class="d-flex justify-space-between mb-4 text-body-2">
                <span>Shipping</span>
                <span>{{
                  shippingCost === 0 ? "Free!" : formatPrice(shippingCost)
                }}</span>
              </div>

              <v-divider class="mb-4"></v-divider>

              <div
                class="d-flex justify-space-between mb-6 font-weight-bold text-h6"
              >
                <span>Total</span>
                <span>{{ formatPrice(total) }}</span>
              </div>

              <!-- Success/Error Messages -->
              <v-alert
                v-if="alertMessage"
                :type="alertType"
                class="mb-4"
                closable
                @click:close="alertMessage = ''"
              >
                {{ alertMessage }}
              </v-alert>

              <!-- Action Button -->
              <v-btn
                color="black"
                size="large"
                flat
                height="50"
                class="text-capitalize font-weight-bold px-8"
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                block
              >
                {{ isSubmitting ? "Placing Order..." : "Place Order" }}
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";

// Form data
const quantity = ref(1);
const form = ref({
  name: "",
  phone: "",
  email: "",
  address: "",
  shipping: "free",
});

// Form validation
const formRef = ref(null);
const isSubmitting = ref(false);
const alertMessage = ref("");
const alertType = ref("success");

// Product pricing
const unitPrice = 3199.0;

// Computed properties
const subtotal = computed(() => {
  return quantity.value * unitPrice;
});

const shippingCost = computed(() => {
  return form.value.shipping === "free" ? 0 : 0;
});

const total = computed(() => {
  return subtotal.value + shippingCost.value;
});

// Validation rules
const rules = {
  required: (value) => !!value || "This field is required",
  email: (value) => {
    if (!value) return true; // Email is optional
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Please enter a valid email address";
  },
  phone: (value) => {
    if (!value) return "Phone number is required";
    const pattern = /^[0-9+\-\s()]+$/;
    return pattern.test(value) || "Please enter a valid phone number";
  },
};

// Quantity management
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const validateQuantity = (event) => {
  const value = parseInt(event.target.value);
  if (isNaN(value) || value < 1) {
    quantity.value = 1;
  } else {
    quantity.value = value;
  }
};

// Format price with currency
const formatPrice = (price) => {
  return (
    new Intl.NumberFormat("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price) + "৳"
  );
};

// Handle form submission
const handlePlaceOrder = async () => {
  // Validate form
  const { valid } = await formRef.value.validate();

  if (!valid) {
    alertMessage.value = "Please fill in all required fields correctly";
    alertType.value = "error";
    return;
  }

  isSubmitting.value = true;
  alertMessage.value = "";

  try {
    // Prepare order data
    const orderData = {
      name: form.value.name,
      phone: form.value.phone,
      email: form.value.email || "",
      address: form.value.address,
      shipping: form.value.shipping,
      quantity: quantity.value,
      unitPrice: unitPrice,
      subtotal: subtotal.value,
      shippingCost: shippingCost.value,
      total: total.value,
    };

    // Send email via API
    const response = await $fetch("/api/send-order-email", {
      method: "POST",
      body: orderData,
    });

    if (response.success) {
      alertMessage.value =
        "Order placed successfully! We will contact you soon.";
      alertType.value = "success";

      // Reset form after successful submission
      setTimeout(() => {
        form.value = {
          name: "",
          phone: "",
          email: "",
          address: "",
          shipping: "free",
        };
        quantity.value = 1;
        formRef.value?.resetValidation();
        alertMessage.value = "";
      }, 3000);
    }
  } catch (error) {
    console.error("Error placing order:", error);
    alertMessage.value =
      error.data?.message || "Failed to place order. Please try again.";
    alertType.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Dark background for the whole page */
.bg-black {
  background-color: #000000 !important;
}

/* The Gradient Text "ORDER NOW!" */
.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 3px !important;
  font-size: 1rem !important;
}

/* 
   The Gradient Border Wrapper 
   This creates a container with a gradient background and padding.
   The inner card sits on top, creating the border effect.
*/
.gradient-border-wrapper {
  position: relative;
  background: linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%);
  padding: 8px; /* This determines the border thickness */
  border-radius: 10px; /* Match the card radius + padding adjustment */
  width: 100%;
  max-width: 900px;
}
</style>
