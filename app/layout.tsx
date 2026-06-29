import { Geist, Geist_Mono, Inter } from "next/font/google"

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
              <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-3 px-6">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-2xl"
                >
                  🦩
                </span>
                <span className="text-lg font-semibold tracking-tight">
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
