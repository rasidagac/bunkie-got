"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme } from "antd";
import React from "react";

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        cssVar: true,
        token: {
          fontFamily: "initial",
        },
      }}
    >
      <AntdRegistry>
        <App>{children}</App>
      </AntdRegistry>
    </ConfigProvider>
  );
}
