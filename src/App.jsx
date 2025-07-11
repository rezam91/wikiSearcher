import { useEffect, useState } from 'react'
import Search from './components/search/index'
import Result from './components/result/index'
import Header from './components/header/index'
import Head from './components/head/index'

const App = () => {
  const [keyword,Setkeyword] = useState('')
  useEffect(() => {
    document.title = 'Wiki Searcher'
  },[])
  return (
    <>
      <Head />
      <div className='container'>
        <Header />
        <Search onResult={Setkeyword} />
        <Result searchedKeyword = {keyword} />
      </div>
    </>
  )
}

export default App
