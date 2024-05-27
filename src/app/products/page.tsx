import {Metadata} from "next";
import products from "@/app/_data/products";
import Link from "next/link";


// export const metadata = {
//     title: 'Products List Page',
//     description: 'Products List Page',
//     keywords: 'Products List, Products List Page',
// };

export const metadata: Metadata = {
    title: {
        //absolute: 'Products List Page',
        default: 'Products List Page',
        template: 'Products List Page',
    },
    description: 'Products List Page',
    keywords: 'Products List, Products List Page',
};


const page = () => {
    return (
        <div>
            <h3>Products List</h3>
            <ul>
                {products?.map((product,i) => (
                    <>
                        <li key={product.id}><Link href={`products/${product.id}/`}> {product.name} </Link></li>
                        <li key={product.id}><Link href={`products/${product.id}/`} replace> {product.name} with replace </Link></li> {/*// replace the current entry in the history stack with home page */}
                    </>
                ))}
            </ul>
        </div>
    );
};

export default page;