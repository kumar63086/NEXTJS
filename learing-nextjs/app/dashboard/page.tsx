import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard(){
    return (
        <div className="flex items-center justify-between mt-4">
            <h2 className="text-xl font-medium ">your Blog Articles</h2>
            <Link className={buttonVariants()} href="/dashboard/create">
            Create post
            </Link>

        </div>
    )
}