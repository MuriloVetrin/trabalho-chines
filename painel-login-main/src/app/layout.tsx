"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/global.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
export const metadata = {
  title: 'Painel Shoowpy',
  description: 'Criado por amantes do bootstrap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        <Header />
        {pathname !== '/login' && (
          <Sidebar />
        )}

        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
