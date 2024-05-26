import {Metadata} from "next";


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
        <>Products List</>
    );
};

export default page;