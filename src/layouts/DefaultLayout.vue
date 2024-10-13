<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navbar -->
      <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 class="text-lg font-bold">My Dashboard</h1>
        <button @click="logout" class="text-sm bg-red-500 px-3 py-1 rounded-md">
          Logout
        </button>
      </header>
  
      <!-- Main Content -->
      <main class="flex-1 p-6 bg-gray-100">
        <router-view />
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white p-4 text-center">
        <p>&copy; Ishlasa qoyil qolaman lekin</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '../store/Auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const logout = () => {
    authStore.token = '';
    localStorage.removeItem('token');
    router.push('/login');
  };
  </script>
  
  