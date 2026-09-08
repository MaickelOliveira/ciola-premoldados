import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ciola Pré-Moldados | Estruturas, Barracões, Lajes e Artefatos",
  description:
    "Há 45 anos, a Ciola fabrica soluções pré-moldadas em Campo Mourão: barracões, estruturas, lajes, casas estruturais e artefatos de concreto.",
  keywords: [
    "pré-moldados Campo Mourão",
    "barracão pré-moldado",
    "laje protendida",
    "laje treliçada",
    "estrutura pré-moldada",
    "Ciola Pré-Moldados",
  ],
  icons: {
    icon: "/brand/ciola-icon.png",
    shortcut: "/brand/ciola-icon.png",
    apple: "/brand/ciola-icon.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
