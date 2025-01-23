import Navbar from "../../components/Navbar";

const HomeScreen = () => {
  return (
    <div className="h-screen text-white relative">
      <Navbar />

      <img src="/extraction.jpg" alt="hero-img" className="absolute top-0 left-0 w-full h-full object-cover -z-50"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer" />
    </div>
  );
};

export default HomeScreen;
