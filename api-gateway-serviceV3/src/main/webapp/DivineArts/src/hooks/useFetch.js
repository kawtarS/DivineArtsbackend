import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [preLoad, setPreLoad] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setInterval(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){ // throwing the error coming from the server
                    throw Error("Couldn't fetch the Data!");
                }
                return res.json();
            })
            .then(data => { // showing the data
                setPreLoad(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                setPreLoad(false);
                setError(err.message);
            })
        }, 1000);
    }, [url])

     return { data, preLoad, error}

}

export default useFetch;