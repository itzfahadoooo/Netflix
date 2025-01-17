import { fetchfromTMDB } from "../../services/tmdb.service.js";
export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchfromTMDB(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`
    );
    const randomMovie=data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({success:true,content:randomMovie});
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getMovieTrailers(req, res) {
    const {id}=req.params
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        res.json({success:true,trailers:data.results})
    } catch (error) {
        if(error.message.includes("404")){
           return res.status(404).json({success:false,message:"Movie not found"})
    }
    res.status(500).json({success:false,message:"Internal Server Error"})
}
}