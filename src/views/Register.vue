<template>
    <div class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 class="text-xl font-bold mb-4">Register</h2>
      <FormInput id="email" label="Email" v-model="email" placeholder="Enter your email" />
      <FormInput id="password" label="Password" type="password" v-model="password" placeholder="Enter your password" />
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <Button :disabled="loading" @click="handleRegister">Register</Button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useAuth from '../composables   /UseAuth';
  import Button from '../components/Button.vue';
  import FormInput from '../components/FormInput.vue';
  
  const email = ref('');
  const password = ref('');
  const { register, error } = useAuth();
  const loading = ref(false);
  
  const handleRegister = async () => {
    loading.value = true;
    await register(email.value, password.value);
    loading.value = false;
  };
  </script>
  