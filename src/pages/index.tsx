import Header from "@/components/header";
import Main from "@/components/main";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Router } from "next/router";
import Salary from "./salary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link
        href="/"
        className={
          "container-md flex flex-col items-center justify-start h-full px-24 pb-24 pt-12 overflow-y-auto"
        }
      >
        <Main />
      </Link>
    </>
  );
}
