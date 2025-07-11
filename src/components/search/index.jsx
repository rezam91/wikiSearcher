import magnifierLogo from '../../assets/magnifying-glass.png'
import { useEffect, useState } from "react"

const Search = ( {onResult} ) => {
    const [query,setQuery] = useState('')
    const [state,setState] = useState('idle')
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
            setState('idle')
            onResult(null)
            return
        }
        const timer = setTimeout(() => {
            fetchKeywordInfo(query)
            setState('idle')
        },1000)
        setState('loading')
        return () => {
            clearTimeout(timer)
        }
    },[query])
    return (
        <div className="search-box">
            <span>Keyword: </span>
            <input placeholder="Please insert your keyword" type="text" onChange={(e) => setQuery(e.target.value)} />
            {state==='loading' && <img className='mag-logo' src={magnifierLogo} alt='magnifier' width="60px"/>}
        </div>
    )
}

export default Search