import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => clearTimeout(handle)
    })

    return debouncedValue;
}

export default useDebounce;