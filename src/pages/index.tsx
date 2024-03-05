import React, { ReactNode } from "react";
import { AppProvider } from "@/components/Context/MyContext";
import BookingSettings from "@/components/BookingSettings";
import DateComponent from "@/components/DateComponent";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center justify-between p-10`}
    >
      <AppProvider>
        <BookingSettings />
        <DateComponent />
      </AppProvider>
    </main>
  );
}
