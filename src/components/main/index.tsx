import { convertToWon } from "@/utils/money";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import SalaryList from "./salaryList";

export default function Main() {
  const router = useRouter();
  const [mySalary, setMySalary] = useState<string>("");
  const [salaryList, setSalaryList] = useState<number[]>([]);

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
    setSalaryList(arr);
  }, [setSalaryList]);

  return (
    <>
      <div className="relative w-full mx-4 rounded-md md:w-2/6 lg:w-2/4 xl:w-3/4 rounded-3xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">￦</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-3xl border-2 py-1.5 pl-7 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
      <SalaryList salaryList={salaryList} />
    </>
  );
}
