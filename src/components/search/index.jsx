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
                onResult(result)
            })
    }
    useEffect (() => {
        if (!query.length) {
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
        <div className="search-box">
            <span>Keyword: </span>
            <input placeholder="Please insert your keyword" type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}

export default Search