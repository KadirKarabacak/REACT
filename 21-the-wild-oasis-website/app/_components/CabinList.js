import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList() {
    // With this, Cabins page become dynamic again, cuz we are not caching component
    // noStore();
    const cabins = await getCabins();

    if (!cabins?.length) return null;
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins?.map(cabin => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}
