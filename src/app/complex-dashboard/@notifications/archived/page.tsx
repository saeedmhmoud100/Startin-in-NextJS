import Link from "next/link";
import Card from "@/components/Card";


export default function Page() {
    return (
        <Card>
            <h4>Archived Notifications</h4>
            <Link href="/complex-dashboard">Notifications</Link>
        </Card>
    );
}