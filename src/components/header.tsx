export default function Header({ children }: { children: JSX.Element }) {
  return (
    <>
      <div
        className={"flex flex-row items-center justify-between h-14 shadow-lg"}
      >
        <span className={"font-sans pl-8 text-lg text-black font-bold"}>
          Self Price
        </span>
        <span className={"font-sans pr-8 text-lg text-black font-bold"}>
          내 연봉 계산
        </span>
      </div>
      {children}
    </>
  );
}
