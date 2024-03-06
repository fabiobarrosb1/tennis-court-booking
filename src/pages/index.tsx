import React, { ReactNode } from "react";
import { AppProvider } from "@/components/Context/MyContext";
import { ThemeProvider } from "@/components/theme-provider";
import BookingSettings from "@/components/Settings/BookingSettings";
import DateComponent from "@/components/DateComponent";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-row items-top justify-center`}>
      <AppProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BookingSettings />
          <div className="h-screen border-l border-gray-300 mx-4" />
          <DateComponent />
        </ThemeProvider>
      </AppProvider>
    </main>
  );
}
