import React, { ReactNode } from "react";
import { AppProvider } from "@/components/Context/MyContext";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import BookingSettings from "@/components/Settings/BookingSettings";
import DateComponent from "@/components/MainComponent/DateComponent";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-top justify-center md:flex-row`}
    >
      <AppProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BookingSettings />
          <div className=" border-l border-gray-300 mx-4" />
          <DateComponent />
        </ThemeProvider>
      </AppProvider>
    </main>
  );
}
