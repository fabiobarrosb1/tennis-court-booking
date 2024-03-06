import React, { ReactNode } from "react";
import { AppProvider } from "@/components/Context/MyContext";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import BookingSettings from "@/components/Settings/BookingSettings";
import DateComponent from "@/components/MainComponent/DateComponent";

export default function Home() {
  return (
    <main className="main">
      <AppProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={`flex height-fit flex-col items-top justify-center md:flex-row`}
          >
            <BookingSettings />
            <div className=" border-l border-gray-300 mx-4" />
            <DateComponent />
          </div>
        </ThemeProvider>
      </AppProvider>
    </main>
  );
}
