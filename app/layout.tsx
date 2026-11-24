import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Year 9 Geography", template: "%s · Year 9 Geography" },
  description: "Vanshika's Tanglin Trust School · Year 9 Geography study hub — AoPS discovery lessons, Exam Cram & mark-savers, interactive explorables, skill drills and mock papers.",
  applicationName: "Year 9 Geography",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Year 9 Geography" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1020" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("y9geo.theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
