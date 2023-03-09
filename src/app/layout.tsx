import "@/styles/globals.css"
import "@/styles/animations.css"

export const metadata = {
  title: 'Assistro',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
