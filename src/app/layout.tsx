import type { Metadata } from "next";
import "./globals.css";
import "./fonts/fonts.css"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "Innotech",
  description: "Your web-solution buddy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange 
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
