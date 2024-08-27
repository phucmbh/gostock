import { Inter } from "next/font/google";
import { Header } from "@/app/dashboard/components/Header";
import { Sidebar } from "@/app/dashboard/components/Sidebar";
import SidebarProvider from "@/context/sidebar.context";
import "../globals.css";
import ThemeProvider from "@/context/theme.context";
import { Suspense } from "react";
import { Loading } from "@/components";
export const metadata = {
  title: "GoStock - Dashboard",
  description: "Dashboard Page",
  icons: { icon: "/gostock.png" },
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            <SidebarProvider>
              <div className="flex h-screen overflow-hidden bg-semiwhite">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <Header />
                  <main>
                    <div className="bg-grey mx-auto max-w-screen-2xl bg-semiwhite p-4 md:p-6 2xl:p-10">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
