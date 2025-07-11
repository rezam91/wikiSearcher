import { useState } from "react"

const Result = ( {searchedKeyword} ) => {
    return (
        <>
            {!!searchedKeyword && (
                <div>
                    <div>result:</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Row</th>
                                <th>Result</th>
                                <th>word Count</th>
                                <th>Time to Read (min)</th>
                                <th>Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchedKeyword.query.search.map((item, index) => (
                                <tr key={item.pageid}>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.wordcount}</td>
                                    <td>{item.wordcount/200}</td>
                                    <td><a href={`https://en.wikipedia.org/?curid=${item.pageid}`}>Visit Page!</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>end</div>
                </div>
            )}
        </>
    )
}
export default Result