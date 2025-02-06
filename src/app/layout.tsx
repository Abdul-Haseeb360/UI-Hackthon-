"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import LocomotiveProvider from "./Components/LocomotiveProvider";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import LocomotiveScrollProvider from "./context/LocomotiveScrollContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider store={store}>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
