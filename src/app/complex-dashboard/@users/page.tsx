import Card from "@/components/Card";
import Link from "next/link";


export default function UsersAnalytics() {
    return (
        <Card>
            <div>
                Users
            </div>
            <Link href="/complex-dashboard/active">active</Link>

        </Card>
    );
}