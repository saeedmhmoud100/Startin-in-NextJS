export default function page({ params } : {
    params: {
        slug: string[];
    }
}) {
    return (
        <>Products List {params.slug?.map((s,i) => <div key={i}> {s} </div>)}</>
    );
}