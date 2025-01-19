export async function searchPerson(req, res) {
    const { query } = req.params;
    try {
        const response = await fetchfromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)

        if(response.results.length === 0) {
            return res.status(404).json({message: "No results found"})
        }

        res.status(200).json({success:true, content: response.results})
    } catch (error) {
        console.log("Error in searchPersoon controller",error.message)
        res.status(500).json({message: "Internal server error"})
    }
}


export async function searchMovie(req, res) {}

export async function searchTv(req, res) {}
