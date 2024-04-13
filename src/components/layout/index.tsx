'use client';

import { Layout as AntdLayout } from 'antd';
import Link from 'next/link';
import React from 'react';
const { Header, Footer, Content } = AntdLayout;

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AntdLayout className="h-lvh">
      <Header>
        <Link href="/">BunkieGot</Link>
      </Header>
      <Content className="container mx-auto">{children}</Content>
      <Footer>Footer</Footer>
    </AntdLayout>
  );
};

export default Layout;
