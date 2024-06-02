// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

// Downloaded for date / npm i react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Button from "../Button/Button";
import BackButton from "../BackButton/BackButton";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";

// Custom hooks
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useCities } from "../../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
    // Custom hook, use these coords to geocode
    const [lat, lng] = useUrlPosition();
    const { createCity, isLoading } = useCities();
    const navigate = useNavigate();

    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const [geocodingError, setGeocodingError] = useState("");
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState(new Date());
    const [emoji, setEmoji] = useState("");

    useEffect(
        function () {
            // If there is no city it immediately takes our location, doesn't make sense fix it.
            if (!lat && !lng) return;

            async function fetchCityData() {
                try {
                    setIsLoadingGeocoding(true);
                    setGeocodingError("");
                    const res = await fetch(
                        `${BASE_URL}?latitude=${lat}&longitude=${lng}`
                    );
                    const data = await res.json();

                    if (!data.countryCode)
                        throw new Error(
                            "That doesn't seem to be city. Click somewhere else 👉"
                        );
                    console.log(data);

                    setCityName(data.city || data.locality || "");
                    setCountry(data.countryName);
                    setEmoji(convertToEmoji(data.countryCode));
                } catch (err) {
                    setGeocodingError(err.message);
                } finally {
                    setIsLoadingGeocoding(false);
                }
            }
            fetchCityData();
        },
        [lat, lng]
    );

    async function handleSubmit(e) {
        e.preventDefault();

        if (!cityName || !date) return;

        const newCity = {
            cityName,
            country,
            emoji,
            date,
            notes,
            position: { lat, lng },
        };

        // console.log(newCity);
        await createCity(newCity);

        // For block immediately go app/cities we await createCity
        navigate("/app/cities");
    }

    if (isLoadingGeocoding) return <Spinner />;

    // And here again don't show form if there is no click
    if (!lat && !lng)
        return <Message message={"Stary by clicking somewhere on the map"} />;

    if (geocodingError) return <Message message={geocodingError} />;

    return (
        <form
            className={`${styles.form} ${isLoading ? styles.loading : ""}`}
            onSubmit={handleSubmit}
        >
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={e => setCityName(e.target.value)}
                    value={cityName}
                />
                <span className={styles.flag}>{emoji}</span>
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>

                <DatePicker
                    id="date"
                    selected={date}
                    onChange={date => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">
                    Notes about your trip to {cityName}
                </label>
                <textarea
                    id="notes"
                    onChange={e => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button type="primary">Add</Button>
                <BackButton />
            </div>
        </form>
    );
}

export default Form;
