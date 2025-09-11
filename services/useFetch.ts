
// useFetch(FetchMovies)

import {useEffect, useState} from "react";
// FetchFuntion passed through props
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true ) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const FetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);
        }
        catch (error) {
            // @ts-ignore
            setError(error instanceof Error ? error : new Error('An unknown error occurred'));
        }
        finally {
            setLoading(false);
        }
    };
    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    //Called to do something at the start of component load
    useEffect(() => {
        if(autoFetch) { // if autofetch is turned on then automatically fetch data
            FetchData();
        }
    }, []);
    return {data, loading, error, refetch:FetchData, reset};

}

export default useFetch;