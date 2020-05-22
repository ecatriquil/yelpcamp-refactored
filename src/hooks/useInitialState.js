import { useState, useEffect } from 'react';
const useInitialState = (API) => {
    const [campgrounds, setCampgrounds] = useState([]);
    useEffect(() => {
        fetch(API).then(response => response.json()).then(data => setCampgrounds(data));
    }, []);

    return campgrounds;
};

export default useInitialState;