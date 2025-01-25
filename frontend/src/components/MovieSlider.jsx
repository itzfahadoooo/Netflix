import { useEffect } from "react";
import { useContentStore } from "../store/content";

const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const 

  const formattedCategoryName =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);

  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  useEffect(() => {
    const getContent = async () => {
        const res = await axios.get(`/api/v1/${contentType}/${category}`);
        setContent(res.data.content);
    };

    getContent();
}, [contentType, category]);
  return (
    <div className="text-white bg-black relative px-5 md:px-20">
      <h2>
        {formattedCategoryName} {formattedContentType}
      </h2>
    </div>
  );
};

export default MovieSlider;
