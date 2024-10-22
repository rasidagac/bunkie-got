import type { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";
import Link from "next/link";

import "../globals.css";

import NextTopLoader from "nextjs-toploader";
import React from "react";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

export default function RootLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider afterSignOutUrl="/">
        <AntdRegistry>
          <ConfigProvider theme={{ cssVar: true }}>
            <body className={poppins.className}>
              <div className="flex min-h-lvh flex-col justify-between">
                <header className="border-b bg-background px-12 py-6">
                  <div className="flex w-full items-center justify-between">
                    <Link href="/">BunkieGot</Link>
                    <UserButton showName />
                  </div>
                </header>
                <NextTopLoader />
                <main className="container mx-auto h-full py-6">
                  {drawer}
                  {children}
                </main>
                <Toaster />
                <footer className="relative flex h-20 w-full items-center justify-between border-t bg-gray-100 px-12">
                  <div className="flex w-full items-center justify-between">
                    <div>BunkieGot®</div>
                    <div className="text-sm text-gray-500">
                      {new Date().getFullYear()}. All rights reserved.
                    </div>
                  </div>
                </footer>
              </div>
            </body>
          </ConfigProvider>
        </AntdRegistry>
      </ClerkProvider>
    </html>
  );
}