"use client";

// import { currencies } from "./lib/currencies";
// import { useState } from "react";
// import dynamic from "next/dynamic";
// const Select = dynamic(() => import("react-select"), { ssr: false });

import PostListPage from "./components/posts";

export default function Home() {
  // const [result, setResult] = useState(null);
  // const [inputValue, setInputValue] = useState(0);
  // const [inputCurrency, setInputCurrency] = useState(currencies[0]);
  // const [outputCurrency, setOutputCurrency] = useState(currencies[2]);
  // const options = currencies.map((c) => ({ value: c.code, label: c.name }));

  // const convertCurrency = async (source: string, targets: string[]) => {
  // 	const response = await fetch("/api", {
  // 		method: "POST",
  // 		headers: {
  // 			"Content-Type": "application/json",
  // 		},
  // 		body: JSON.stringify({
  // 			source,
  // 			targets,
  // 		}),
  // 	});

  // 	const data = await response.json();
  // 	setResult(data);
  // };

  return (
    <>
      <PostListPage />
    </>
    // <div>
    // 	<div className="flex flex-col space-y-2 items-center justify-center h-dvh">
    // 		<div className="flex">
    // 			<input
    // 				className="bg-white text-black rounded-md w-[120px] no-spinner"
    // 				type="number"
    // 				name="input-value"
    // 				onChange={(e) => setInputValue(Number(e.target.value))}
    // 				required
    // 			/>
    // 			<Select
    // 				className="w-[200px]"
    // 				options={options}
    // 				value={options.find((opt) => opt.value === inputCurrency.code)}
    // 				onChange={(selected: any) => {
    // 					const selectedCurrency = currencies.find(
    // 						(c) => c.code === selected.value
    // 					)!;
    // 					setInputCurrency(selectedCurrency);
    // 				}}
    // 			/>
    // 		</div>
    // 		<div className="flex">
    // 			<label className="bg-white text-black rounded-md w-[120px]">
    // 				{result !== null && !isNaN(result) ? inputValue * result : ""}
    // 			</label>
    // 			<Select
    // 				className="w-[200px]"
    // 				options={options}
    // 				value={options.find((opt) => opt.value === outputCurrency.code)}
    // 				onChange={(selected: any) => {
    // 					const selectedCurrency = currencies.find(
    // 						(c) => c.code === selected.value
    // 					)!;
    // 					setOutputCurrency(selectedCurrency);
    // 				}}
    // 			/>
    // 		</div>
    // 		<button
    // 			className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
    // 			onClick={() =>
    // 				convertCurrency(inputCurrency.code, [outputCurrency.code])
    // 			}
    // 		>
    // 			Convert
    // 		</button>
    // 	</div>
    // </div>
  );
}
