const page = ({ params } : {
    params: {
        productId: string;
    };
}) => {
    return (
        <>Product Details ({params.productId})</>
    );
};

export default page;