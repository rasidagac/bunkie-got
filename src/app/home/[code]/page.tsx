import { Col, Row, Space } from 'antd';

import prisma from '@/lib/prisma';
import { getResetDate } from '@/lib/utils';

export default async function Page({ params }: { params: { code: string } }) {
  async function getHome() {
    'use server';

    return prisma.home.findUnique({
      where: {
        code: params.code,
      },
    });
  }

  const home = await getHome();

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <div className="container mx-auto h-full w-full max-w-7xl">
      <Row justify="space-between" className="h-full content-center">
        <Col span={6}>
          <div className="flex flex-col items-center gap-5">
            <div className="mx-auto w-2/5 rounded-full bg-gray-400 p-6">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="100%"
                width="100%"
                className="opacity-50"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
              </svg>
            </div>
            <Space
              direction="vertical"
              align="center"
              size="large"
              split={<div className="w-28 border-b" />}
              className="text-xl"
            >
              <h1>{home.name}</h1>
              <div>
                <span>Code: </span>
                <span>{home.code}</span>
              </div>
              <p>
                {`Reset Day: ${getResetDate(home.resetDayOfMonth).toLocaleDateString()}`}
              </p>
            </Space>
          </div>
        </Col>
        <Col className="h-[95%] border-r" />
        <Col span={17}>Side</Col>
      </Row>
    </div>
  );
}
