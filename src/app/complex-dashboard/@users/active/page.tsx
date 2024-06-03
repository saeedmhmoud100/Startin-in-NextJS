import Link from "next/link";
import Card from "@/components/Card";


export default function Page() {
    return (
        <Card>
            <div>
                Active Users
            </div>
            <Link href="/complex-dashboard">all</Link>
        </Card>
    );
}