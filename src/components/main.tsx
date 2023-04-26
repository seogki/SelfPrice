import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Main() {
  const router = useRouter();
  const [salary, setSalary] = useState<number[]>([]);

  const convertToWorn = (x: number) => {
    return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}만원`;
  };

  const handleMySalary = (salary: number) => {
    router.push(`/salary/${salary}`);
  };

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 2000; i <= 20000; i += 100) {
      arr.push(i);
    }
    setSalary(arr);
  }, [setSalary]);

  return (
    // <div
    //   className={
    //     "container-md flex flex-col items-center justify-start h-full px-24 pb-24 pt-12 overflow-y-auto"
    //   }
    // >
    <>
      <input
        className={
          "shadow-lg p-3 text-black w-3/4 rounded-3xl border-2 border-gray-300 text-lg outline-gray-700 tracking-wide"
        }
        placeholder="연봉을 입력해보세요"
      />

      <div
        className={
          "salary-tag text-black mt-8 flex flex-wrap flex-auto flex-center justify-between"
        }
      >
        {salary.map((item, idx) => (
          <span
            className={
              "h-8 w-24 m-4 leading-8 text-center border text-sm rounded-3xl border-gray-300 hover:bg-green-500 cursor-pointer hover:text-white hover:font-bold"
            }
            key={idx}
            onClick={() => handleMySalary(item)}
          >
            {convertToWorn(item)}
          </span>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}
