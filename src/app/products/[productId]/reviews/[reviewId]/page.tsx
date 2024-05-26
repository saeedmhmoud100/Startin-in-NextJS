import { notFound } from "next/navigation";


export const metadata = {
    title: 'Reviews',
    description: 'Reviews',
    keywords: 'Reviews',
};



export default function Reviews({params} : {
    params: {
        productId: string;
        reviewId: string;
    };
}) {

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