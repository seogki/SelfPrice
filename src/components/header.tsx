import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const backToHome = () => {
    router.push(`/`);
  };
  return (
    <>
      <div
        className={"flex flex-row items-center justify-between h-14 shadow-lg "}
      >
        {/* <Image
          className={"ml-2 rounded-3xl"}
          src={"/logo2.png"}
          width={48}
          height={48}
          alt="logo"
        /> */}
        <span
          className={
            "font-sans ml-4 md:ml-8 lg:ml-8 xl:ml-8  text-lg text-black font-bold cursor-pointer mr-auto"
          }
          onClick={() => backToHome()}
        >
          Self Price
        </span>
        <span
          className={
            "font-sans mr-4 md:mr-8 lg:mr-8 xl:mr-8 text-lg text-black font-bold"
          }
        >
          내 연봉 계산
        </span>
      </div>
    </>
  );
}
