import { useEffect, useState } from 'react';

const SearchField = () => {

    const [searchString, setSearchString] = useState('');


    const contoller = new AbortController();

    useEffect(() => {

        if (searchString == '') return;

        const timer = setTimeout(() => {
            return getSearchResults(contoller)
        })

        return () =>  { clearTimeout(timer) ,contoller.abort()} 

    }, [searchString])

    const getSearchResults = async (contoller) => {

        try {
            const data = await fetch(`https://dummyjson.com/products/search?q=${searchString}`, {
                signal: contoller.signal
            });
            const searchResults = await data.json();
            console.log("searchResults::", searchResults);
        }
        catch (err) {
            if (err) {
                console.log("Request cancelled")
            }
        }

       

    }


    return (<input type="text" onChange={(e) =>
        setSearchString(e.target.value)
    } ></input>)

}

export default SearchField;
