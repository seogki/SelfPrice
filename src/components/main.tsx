import { convertToWon } from "@/utils/money";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Main() {
  const router = useRouter();
  const [mySalary, setMySalary] = useState<string>("");
  // const [inputSalary, setInputSalary] = useState<string>("");
  const [salary, setSalary] = useState<number[]>([]);

  const handleMySalary = (salary: number) => {
    router.push(`/salary/${salary}`);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMySalary(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/salary/${mySalary}`);
    }
  };

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 2000; i <= 20000; i += 100) {
      arr.push(i);
    }
    setSalary(arr);
  }, [setSalary]);

  return (
    <>
      <div className="relative w-full mx-4 rounded-md md:w-3/4 lg:w-3/4 xl:w-3/4 rounded-3xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">￦</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-3xl border-2 py-1.5 pl-7 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
          value={mySalary}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="연봉을 입력해보세요"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <span className="text-black">만원</span>
        </div>
      </div>
      <div
        className={
          "salary-tag text-black mt-8 flex flex-wrap flex-auto flex-center justify-center"
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
            {convertToWon(item)}만원
          </span>
        ))}
      </div>
    </>
  );
}
