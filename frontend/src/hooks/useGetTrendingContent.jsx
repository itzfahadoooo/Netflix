import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null);
    const { contentType } = useContentStore();

    useEffect(() => {
        const getTrendingContent = async () => {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            try {
                const res = await axios.get(`${API_BASE_URL}/api/v1/${contentType}/trending`, {
                    withCredentials: true // Include credentials in the request
                });
                setTrendingContent(res.data.content);
            } catch (error) {
                console.error("Failed to fetch trending content:", error);
            }
        };

        getTrendingContent();
    }, [contentType]);

    return { trendingContent };
};

export default useGetTrendingContent;