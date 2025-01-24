import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const HomeScreen = () => {
  return (
    <div className="h-screen text-white relative">
      <Navbar />

      <img src="/extraction.jpg" alt="hero-img" className="absolute top-0 left-0 w-full h-full object-cover -z-50"/>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32" />

      <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute top-0 left-0 w-full h-full -z-10" />

      <div className="max-w-2xl">
          <h1 className="mt-4 text-6xl font-extrabold text-balance">
            Extraction
          </h1>
          <p className="mt-2 text-lg">2014 | 18+</p>

          <p className="mt-4 text-lg">
            A hardened mercenary&apos;s mission becomes a soul-search, when he is sent into Bangladesh to rescue a drug lord&apos;s kidnapped son.
          </p>
      </div>

      <div className="flex mt-8">
        <Link to="/watch" className="bg-red-600 hover:bg-red-700 transition-all duration-200 px-4 py-2 rounded-md text-lg font-semibold"></Link>
      </div>
    </div>
  );
};

export default HomeScreen;
