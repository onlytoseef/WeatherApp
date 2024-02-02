"use client";
import { Nunito } from "next/font/google";
import "./globals.css";
import favicon from "./../public/next.svg";

const inter = Nunito({ subsets: ["latin"], variable: "--Nunito" });

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({ children }) {
   return (
      <Provider store={store}>
         <html lang="en" className={`${inter.variable}`}>
            <head>
               <link rel="icon" href={favicon} />
            </head>
            <body className="font-Nunito">{children}</body>
         </html>
      </Provider>
   );
}
