import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <header className="border-b bg-background/95">
              <div className="flex h-16 w-full items-center gap-2 px-6">
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none"
                >
                  🦩
                </span>
                <span className="text-lg font-semibold leading-none tracking-tight">
                  Flamingo
                </span>
              </div>
            </header>
            <main className="flex flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
