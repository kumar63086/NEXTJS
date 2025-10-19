import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <Skeleton className="w-full h-[400px]" />
}