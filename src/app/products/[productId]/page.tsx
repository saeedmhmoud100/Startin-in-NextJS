import {Metadata} from "next";

type props = {
    params: {
        productId: string;
    };

}

export const generateMetadata = ({ params } : props): Metadata => {
    return {
        title: `Product ${params.productId} Details Page`,
        description: 'Product Details Page',
        keywords: 'Product Details, Product Details Page',
    };

}

// with promise
// export const generateMetadata =async ({ params } : props): Promise<Metadata> => {
//
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Product ${params.productId} Details Page`);
//         }, 1000);
//     });
//
//     return {
//         title: `Product ${title} Details Page`,
//         description: 'Product Details Page',
//         keywords: 'Product Details, Product Details Page',
//     };
//
// }


const page = ({ params } : props) => {
    return (
        <>Product Details ({params.productId})</>
    );
};

export default page;