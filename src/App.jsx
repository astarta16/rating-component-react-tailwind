import { useState } from "react"
import Star from "./assets/icon-star.svg"
import Thank from "./assets/illustration-thank-you.svg"


function App() {
  let [isSubmitted, setIsSubmitted] = useState(false); 
  let [items, setItems] = useState("");
  const Button = ({ number }) => {
    return  <button onClick={() => setItems(number)} className="bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400">{number}</button>
  }
  return (
   <>
   {!isSubmitted && <div className="bg-DarkBlue p-8 rounded-[30px] min-w-[400px] wrapper ">
    <img src={Star} className="bg-gray-700 p-2 rounded-full" />
    <h2 className="text-gray-100 text-3xl my-7">How did we do?</h2>
    <p className="text-gray-300 mb-10">Please let us know how we did with your support request. All feedback is appreciates to help us impove offering!</p>
    <ul className="grid grid-cols-5 gap-3 mb-10">
      <li>
        <Button number={1} />
      </li>
      <li>
      <Button number={2} />
      </li>
      <li>
      <Button number={3} />
      </li>
      <li>
      <Button number={4} />
      </li>
      <li>
      <Button number={5} />
      </li>
    </ul>
    <div className="text-center">
        <button onClick={() => setIsSubmitted(true)} className="bg-orange w-full text-white uppercase py-3 rounded-full hover:bg-black">Submit</button>
    </div>
   </div>}
  
{isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted}/>}
   </>
   
 
 
   
  );
}

const ThankYou = ({items, setIsSubmitted}) => {
  return (
    <>  
    <div className="bg-DarkBlue p-8 rounded-[30px] min-w-[400px]">
       <img src={Thank} className="bg-gray-700 p-2 block mb-5 mx-auto rounded-full"/>
       <div className="flex items-center justify-center">
        <p className="p-rating bg-gray-700 rounded-full text-center text-white text-sm px-4 pt-1">
          You selected {items} out of 5
        </p>
      </div>
    <h2 className="text-gray-100 text-3xl my-7 text-center">Thank you</h2>
    <p className="text-gray-300  text-center mb-10">Please let us know how we did with your support request. All feedback is appreciates to help us impove offering!</p>
    <div className="text-center">
    <button onClick={() => setIsSubmitted(false)} className="bg-orange w-full text-white uppercase py-3 rounded-full hover:bg-black">Rate again</button>
    </div>
    </div>
   
    </>
  
  );
}

export default App
