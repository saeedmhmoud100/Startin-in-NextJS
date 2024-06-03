"use client";

import { notFound } from "next/navigation";


// export const metadata = {
//     title: 'Reviews',
//     description: 'Reviews',
//     keywords: 'Reviews',
// };


function rand(){
    return Math.floor(Math.random() * 2);

}


export default function Reviews({params} : {
    params: {
        productId: string;
        reviewId: string;
    };
}) {

    if(rand()){
        throw new Error("There is some Error in the page. Please try again later.");
    }


    if(parseInt(params.reviewId) > 100)
    {
        return notFound();
    }

  return (

    <main>
           <h1> review ({params.reviewId}) for product ({params.productId})</h1>
    </main>
  );
}