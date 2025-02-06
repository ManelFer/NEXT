
import "./globals.css";

import {Header} from '../components/header'
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "estudo - estudo sobre nextjs", // titulo da aba
  description: "Generated by create next app",
  openGraph: {
    title: "Home - estudo sobre nextjs", // titulo para compartilhar o link do site
    description: "Generated by create next app", // da para colocar uma imagem de preview com o termo " image: [link da imagem] "
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
