import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neelu Taneja - Relationship Coach | NLP Life Coach",
  description: "Relationship coach specializing in healing relationship trauma, overcoming emotional wounds, and nurturing your soul. Work with Neelu Taneja to transform your relationships and find inner peace.",
  keywords: "relationship coach, relationship trauma, healing relationships, emotional wellness, soul healing, relationship counseling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header";  // 👈 ADD THIS
// import Footer from "@/components/footer";  // optional

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Neelu T.",
//   description: "Neelu T.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
//         <Header /> {/* 👈 ALWAYS ON TOP, FIXES YOUR PROBLEM */}
//           {children}  {/* 👈 HERO & OTHER PAGES */}
       

//         {/* <Footer /> optional */}

//       </body>
//     </html>
//   );
// }



// import "./globals.css";
// import Header from "@/components/header";

// export const metadata = {
//   title: "Neelu T.",
//   description: "Neelu T.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />  {/* always at top */}
//         {children}
//       </body>
//     </html>
//   );
// }
