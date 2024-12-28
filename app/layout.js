import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";


const geistMonoBold = localFont({
  src: "./fonts/Metropolis-Bold.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Turistická Ubytovňa Zádiel",
    "sk-SK": "Turistická Ubytovňa Zádiel",
    "en-US": "Zádiel Tourist Hostel",
    "hu-HU": "Zádiel Turista Szálló",
  },
  description:
    "Objavte pohodlné ubytovanie v srdci Zádielskej doliny. Ideálne pre turistov a milovníkov prírody, s ľahkým prístupom k turistickým chodníkom.",
  keywords: [
    "ubytovanie",
    "Zádiel",
    "turistika",
    "Zádielska dolina",
    "Slovenský kras",
  ],
  authors: [{ name: "Jaroslav Barabáš" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className={`${geistMonoBold.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
