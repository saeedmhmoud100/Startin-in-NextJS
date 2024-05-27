"use client";

import {useRouter} from "next/navigation";


export default function OrderProductPage() {
    const router = useRouter();

    function handleClick() {
        console.log('Order Product');
        router.push('/'); // navigate to home page
        // router.replace('/'); // replace the current entry in the history stack with home page
        // router.back(); // navigate back to the previous page
        // router.forward(); // navigate forward to the next page
    }

  return (
    <div>
      <h3>Order Product</h3>
        <button onClick={handleClick}>Order</button>
    </div>
  );
}