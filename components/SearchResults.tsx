import PaginationButtons from "./PaginationButtons"

function SearchResults({results}: {results: any}) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[%14] lg-pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results?.searchInformation?.formattedTotalResults} results ({results?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result: any) => (
        <div 
          key={result.link}
          className="max-w-xl mb-8"
        >
          {/* Search Result Link */}
          <div className="group">
            <a href={result.link} className="text-sm">{result.formattedUrl}</a>
            <a href={result.link} className="truncate text-xl text-blue-800 font-medium group-hover:underline"><h2>{result.title}</h2></a>
          </div>

          {/* Search Result Snippet */}
          <div className="line-clamp-2">{result?.snippet}</div>
        </div>
      ))}

      <PaginationButtons />
    </div>
  )
}

export default SearchResults
