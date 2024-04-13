'use client';

import { Modal } from 'antd';
import { useRouter } from 'next/navigation';

import { CreateHome } from '@/components/create-form';

export default function Page() {
  const { back } = useRouter();
  return (
    <Modal open destroyOnClose onCancel={back}>
      <CreateHome />
    </Modal>
  );
}
