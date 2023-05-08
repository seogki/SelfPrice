import { convertToWon } from "@/utils/money";
import { useRouter } from "next/router";

interface Props {
  salaryList: number[];
}

export default function SalaryList({ salaryList }: Props) {
  const router = useRouter();
  const handleMySalary = (salary: number) => {
    router.push(`/salary/${salary}`);
  };

  return (
    <>
      <div
        className={
          "salary-tag text-black mt-4 md:mt-8 flex flex-wrap flex-auto flex-center justify-center"
        }
      >
        {salaryList.map((item, idx) => (
          <span
            className={
              "h-10 w-1/3 mx-2 my-2 leading-10 md:leading-8 md:w-24 md:h-8 md:mx-4 md:my-4 text-center border text-sm rounded-3xl border-gray-300 hover:bg-green-500 cursor-pointer hover:text-white hover:font-bold"
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
