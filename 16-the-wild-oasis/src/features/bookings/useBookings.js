// React Query
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    // We can get params right here to filter data with passing to getBookings
    const [searchParams] = useSearchParams();

    // FILTER
    const filterValue = searchParams.get("status");
    // To pass to getBookings
    const filter =
        !filterValue || filterValue === "all"
            ? null
            : { field: "status", value: filterValue };

    const {
        isLoading,
        data: bookings,
        error,
    } = useQuery({
        // To make refetch on filter, we add our object to queryKey like useEffect
        queryKey: ["bookings", filter],
        queryFn: () => getBookings({ filter }),
    });

    return {
        isLoading,
        bookings,
        error,
    };
}
