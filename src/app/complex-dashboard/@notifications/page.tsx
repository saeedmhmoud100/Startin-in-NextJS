import Card from "@/components/Card";
import Link from "next/link";


export default function NotificationsAnalytics() {
    return (
        <Card>
            <div>Notifications</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>

    );
}