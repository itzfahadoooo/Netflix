import { useState } from 'react'
import { useContentStore } from '../store/content';

const SearchPage = () => {
    const [activeTab, setActiveTab] = useState("movie");
	const [searchTerm, setSearchTerm] = useState("");

	const [results, setResults] = useState([]);
	const { setContentType } = useContentStore();
  return (
    
    <div>SearchPage</div>
  )
}

export default SearchPage