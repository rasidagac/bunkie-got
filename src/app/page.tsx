'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Button, Skeleton, Space, Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

export default function Home() {
  const { user, isLoading } = useUser();

  return (
    <div className="container mx-auto h-full content-center text-center">
      <Title level={2}>
        Hi
        {isLoading ? (
          <Skeleton.Input active className="align-middle" />
        ) : (
          ` ${user?.name}, `
        )}
        welcome to BunkieGot!
      </Title>
      <Space size="large">
        <Button className="!h-full !px-8 !py-8">
          <Title level={4}>Join existing Home</Title>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="4rem"
            width="100%"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.861 5.861 0 004.802 2.5H21" />
            <path d="M3 17h1.95a5.854 5.854 0 004.798-2.5 5.854 5.854 0 014.798-2.5H20" />
            <path d="M18 15l3-3-3-3" />
          </svg>
        </Button>
        <Button className="!h-full !px-8 !py-8">
          <Link href="/home/create">
            <Title level={4}>Create a new Home</Title>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="4rem"
              width="100%"
            >
              <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
            </svg>
          </Link>
        </Button>
      </Space>
    </div>
  );
}
