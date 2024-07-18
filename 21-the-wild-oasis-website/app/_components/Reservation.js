import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
    //! To solve this problem we can use Promise.All. But this method just fast as possible as slowest promise.
    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
    ]);
    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
            {/* As a convention client components must be take less data, not like whole object. */}
            <DateSelector
                settings={settings}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            <ReservationForm cabin={cabin} />
        </div>
    );
}

export default Reservation;
