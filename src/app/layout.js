import '@/styles/tailwind.css'

export const metadata = {
  title: 'Clock Tools',
  description: 'Tools for clock data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
