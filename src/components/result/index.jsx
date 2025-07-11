const Result = ( {searchedKeyword} ) => {
    return (
        <>
            {!!searchedKeyword && (
                <div>
                    <div>result:</div>
                    <ul>
                        {searchedKeyword.query.search.map((item) => (
                            <li>{item.title}</li>
                        ))}
                    </ul>
                    <div>end</div>
                </div>
            )}
        </>
    )
}
export default Result