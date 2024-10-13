import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/Auth';

export default function useAuth() {
  const router = useRouter();
  const authStore = useAuthStore();
  const error = ref(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://fakeapi.platzi.com/en/rest/auth-jwt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      authStore.token = data.access_token;
      localStorage.setItem('token', data.access_token);

      router.push('/dashboard');
    } catch (err) {
      error.value = err.message;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('https://fakeapi.platzi.com/en/rest/auth-jwt/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      authStore.token = data.access_token;
      localStorage.setItem('token', data.access_token);

      router.push('/dashboard');
    } catch (err) {
      error.value = err.message;
    }
  };

  const logout = () => {
    authStore.token = '';
    localStorage.removeItem('token');
    router.push('/login');
  };

  return {
    login,
    register,
    logout,
    error,
  };
}
