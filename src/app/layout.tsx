import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "CityIce projekat",
  authors: [{ name: "Amel Islamović" }],
  description:
    "Projekat iz predmeta „Uvod u marketing“ (prof. Vedad Ovčina, FIT, Univerzitet „Džemal Bijedić“ u Mostaru): nova web stranica, novogodišnja kampanja i Google Business Profil za CityIce.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bs" className={`${baloo.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
