import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Eriso Trading Group Co.",
  description: "Generated by create next app",
  icons:{
    icon:['/favicon.ico?v4'],
    apple:['/apple-touch-icon.png?v4']
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
          <Nav/>
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}