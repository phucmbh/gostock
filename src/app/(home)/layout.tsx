import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/context/theme.context";
import { Footer, Header, HomeSidebar } from "./components";
import SidebarProvider from "@/context/sidebar.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Stock",
  description: "Generated by create next app",
  icons: { icon: "/gostock.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SidebarProvider>
            <div className="flex h-screen overflow-hidden">
              <HomeSidebar />
              <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
