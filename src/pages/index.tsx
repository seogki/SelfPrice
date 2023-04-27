import Header from "@/components/header";
import Main from "@/components/main";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Router } from "next/router";
import Layout from "@/components/layout";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale("ko");
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
