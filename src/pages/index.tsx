import React, { ReactNode } from "react";
import { AppProvider } from "@/components/Context/MyContext";
import BookingSettings from "@/components/Settings/BookingSettings";
import DateComponent from "@/components/DateComponent";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-top justify-between p-10`}
    >
      <AppProvider>
        <BookingSettings />
        <DateComponent />
      </AppProvider>
    </main>
  );
}
