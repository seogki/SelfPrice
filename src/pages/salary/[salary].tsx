import Layout from "@/components/layout";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IncSalary {
  year: number;
  salary: number;
  date?: string;
  gap: number;
}

export default function Salary() {
  const [incSalary, setIncSalary] = useState<IncSalary[]>([]);
  const [percentage, setPercentage] = useState<number>(5);
  const [percentages, setPercentages] = useState<number[]>([]);
  const router = useRouter();
  const salary = router.query.salary;

  const convertToWorn = (x: number) => {
    return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const addYear = (year: number) => {
    const date = dayjs().add(year, "year");
    return date.format("YYYY");
  };

  useEffect(() => {
    if (!salary || typeof salary !== "string") {
      return;
    }
    let incAmount = parseInt(salary, 10);
    let temp: IncSalary[] = [];
    for (let i = 0; i < 15; i++) {
      const prev = incAmount;
      incAmount = (prev / 100) * (100 + percentage);
      const next = parseInt(incAmount.toFixed(0), 10);
      temp.push({
        date: addYear(i + 1),
        year: i + 1,
        salary: next,
        gap: parseInt((next - prev).toFixed(0), 10),
      });
    }
    const tempPercentages: number[] = [];
    for (let i = 1; i < 11; i++) {
      tempPercentages.push(i);
    }
    setPercentages(tempPercentages);
    setIncSalary(temp);
  }, [percentage, salary]);

  const handlePercentage = (percentage: number) => {
    setPercentage(percentage);
  };

  if (!salary || typeof salary !== "string") {
    return;
  }
  return (
    <>
      <Layout center={false}>
        <>
          <header
            className={
              "flex justify-between flex-row text-lg md:text-3xl lg:text-3xl xl:text-3xl text-black "
            }
          >
            <p className={"tracking-wide"}>
              {convertToWorn(parseInt(salary, 10) * 10000)} ￦
            </p>
            <p className={"tracking-wide"}>
              <b className={"text-green-500"}>{percentage}%</b> 상승률
            </p>
          </header>
          <section
            className={
              "flex text-black mt-4 md:mt-8 lg:mt-8 flex-wrap flex-row justify-center text-center"
            }
          >
            {percentages.map((item) => (
              <div
                className={`rounded-3xl border border-gray-500 w-16 py-2 m-1 md:w-14 lg:w-14 cursor-pointer ${
                  percentage === item ? "bg-green-500 text-white" : "unset"
                }`}
                onClick={() => handlePercentage(item)}
                key={item}
              >
                {item}%
              </div>
            ))}
          </section>
          <main
            className={
              "flex text-black mt-4 md:mt-8 lg:mt-8 lx:mt-8 flex-wrap flex-row justify-evenly md:justify-center xl:justify-center"
            }
          >
            {incSalary.map((item) => (
              <section
                className={
                  "h-24 my-1 mr-1 md:mr-4 lg:mr-4 xl:mr-4 border shadow border-gray-300 w-44 md:w-44 lg:w-52 lx:w-52 rounded-xl"
                }
                key={item.salary}
              >
                <div
                  className={
                    "flex flex-row h-full w-full divide-x text-sx md:text-sm lg:text-sm lx:text-sm"
                  }
                >
                  <div
                    className={
                      "h-full w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 flex justify-center items-center flex-col bg-gray-500 text-white rounded-l-xl "
                    }
                  >
                    <div>{item.year}년</div>
                    <div>{item.date}</div>
                  </div>
                  <div
                    className={
                      "h-full w-8/12 md:w-8/12 lg:w-8/12 lx:w-8/12 flex justify-center items-center flex-col"
                    }
                  >
                    <div className={""}>{convertToWorn(item.salary)}만원</div>
                    <div className={"text-rose-600"}>
                      ~{convertToWorn(item.gap)}만원
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </>
      </Layout>
    </>
  );
}
