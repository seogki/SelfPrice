import Header from "./header";

interface Props {
  center?: boolean;
  children: JSX.Element;
}

export default function Layout({ children, center = true }: Props) {
  return (
    <>
      <div className={"container-lg h-screen bg-white flex flex-col"}>
        <Header></Header>
        <div
          className={`container-md flex flex-col ${
            center ? "items-center" : ""
          } justify-start h-full  px-4 md:px-16 lg:px-36 xl:px-72  pb-20 pt-6 md:pt-12 lg:pt-12 lx:pt-12 overflow-y-auto`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
