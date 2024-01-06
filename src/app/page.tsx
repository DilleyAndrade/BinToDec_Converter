'use client'

import { useState } from "react"

export default function Home() {

  const [binaryInput, setBinaryInput] = useState<string>('')
  const [decimalOutput, setDecimalOutput] = useState<string>('')

  function handleBinaryInputChangge(e: React.ChangeEvent<HTMLInputElement>){
    const input = e.target.value
    setBinaryInput(input)
    setDecimalOutput(convertBinaryToDecimal(input))
    console.log(input)
  }

  const convertBinaryToDecimal = (binary:string) => {
    const decimal = parseInt(binary, 2)
    return isNaN(decimal) ? 'Insert only 1 or 0' : decimal.toString()
  }

  return (
   <div className="bg-gray-900 w-full h-screen flex justify-center items-center">
    <div className="bg-gray-600 rounded-xl p-6 text-center text-white">
      <h1 className="text-6xl font-bold text-yellow-300">BinToDec</h1>
      <h3 className="text-xl font-bold ">Binary to decimal converter</h3>
      <form className="flex flex-col mt-6">
        <label htmlFor="inputBinary">Enter binary number:</label>
        <input 
          className="text-center text-gray-700 h-12 rounded-xl text-xl outline-none border-4 border-gray-600 focus:border-yellow-300 my-2"
          id="inputBinary"
          value={binaryInput}
          type="text"
          placeholder="00000000"
          maxLength={8}
          onChange={handleBinaryInputChangge}
          required
        />
      </form>
      <p>Decimal Equivalent: {decimalOutput}</p>
    </div>
   </div>
  )
}
