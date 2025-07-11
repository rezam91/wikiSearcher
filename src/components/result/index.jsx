import LoadPhoto from '../photo/index'
import { useState } from "react"

const Result = ( {searchedKeyword} ) => {
    return (
        <>
            {!!searchedKeyword && (Object.keys(searchedKeyword.query.search).length ?
                (<div>
                    <div className="total-result">Total Related Result: {searchedKeyword.query.searchinfo.totalhits}</div>
                    <div className='top'>Top Related Searches:</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Row</th>
                                <th>Result</th>
                                <th>Word Count</th>
                                <th>Time to Read (min)</th>
                                <th>Page</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchedKeyword.query.search.map((item, index) => (
                                <tr key={item.pageid}>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.wordcount}</td>
                                    <td>{(item.wordcount/200).toFixed(1)}</td>
                                    <td><a href={`https://en.wikipedia.org/?curid=${item.pageid}`}>Visit Page!</a></td>
                                    <td><LoadPhoto pageidToPhoto={item.title} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>) : <div className="no-result">No Result Found!</div>
            )}
        </>
    )
}
export default Result