'use client';

import React from 'react';
import { App, ConfigProvider, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: 'initial',
        },
        cssVar: true,
      }}
    >
      <AntdRegistry>
        <App>{children}</App>
      </AntdRegistry>
    </ConfigProvider>
  );
}
