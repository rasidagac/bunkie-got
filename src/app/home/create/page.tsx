'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

import { CreateHome } from '@/components/create-form';

export default function Page() {
  const router = useRouter();
  const { user } = useUser();

  async function submitData(formData: any) {
    console.log('formData:', formData);

    const response = await fetch('/api/home/create', {
      body: JSON.stringify({ ...formData, user }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const home = await response.json();

    router.push(`./${home.code}`);
  }

  return <CreateHome onFinish={submitData} />;
}
