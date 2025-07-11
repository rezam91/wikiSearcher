import { useEffect, useState } from "react"

const Search = ( {onResult} ) => {
    const [query,setQuery] = useState('')
    const fetchKeywordInfo = (query) => {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`)
            .then((response) => {
                if(!response.ok) {
                    console.log('error')
                }
                return response.json()
            })
            .then((result) => {
                console.log(result)
                onResult(result)
            })
        console.log('here')
    }
    useEffect (() => {
        if (!query.length) {
            console.log('no query')
            return
        }
        const timer = setTimeout(() => {
            fetchKeywordInfo(query)
        },1000)
        return () => {
            clearTimeout(timer)
        }
    },[query])
    return (
        <>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </>
    )
}

export default Search