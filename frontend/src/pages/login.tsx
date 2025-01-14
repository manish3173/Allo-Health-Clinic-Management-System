import { LoginForm } from '../components/auth/LoginForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../services/auth.service';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  );
} 