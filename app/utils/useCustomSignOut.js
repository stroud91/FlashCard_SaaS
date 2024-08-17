
import { signOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export const useCustomSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(); 
    router.push('/');
  };

  return handleSignOut;
};
