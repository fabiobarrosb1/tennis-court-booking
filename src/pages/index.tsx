import { Inter } from "next/font/google";
import "../styles/globals.css"
import BookingSettings from "@/components/BookingSettings";
import DateComponent from "@/components/DateComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-centers justify-between`}
    >
      <BookingSettings/>
      <DateComponent />
    </main>
  );
}
