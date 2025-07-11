import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/search/index'
import Result from './components/result/index'

const App = () => {
  const [keyword,Setkeyword] = useState('')
  useEffect(() => {
    document.title = 'Wiki Searcher'
  },[])
  return (
    <>
      <Search onResult={Setkeyword} />
      <Result searchedKeyword = {keyword} />
    </>
  )
}

export default App
