// // // import { useState } from "react";
// // // import { Input } from "./ui/input";
// // // import { Button } from "./ui/button";
// // // import { Link } from "react-router-dom";
// // // import { header } from "framer-motion/client";

// // // const Navbar = ({ onSearch, recentNovels }) => {
// // //   const [query, setQuery] = useState("");

// // //   const handleSearch = () => {
// // //     onSearch(query);
// // //   };

// // //     return (

// // //     <nav className="bg-gray text-blue p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
// // //       <div className="text-xl font-bold text-black">📖 NovelVerse</div>
// // //       <div className="space-x-4">
// // //         <Button className="text-white" variant="ghost">Home</Button>
// // //         <Button className="text-white" variant="ghost">Trending</Button>
// // //         <Button className="text-white" variant="ghost">Authors/Writers</Button>
// // //       </div>
// // //       <div className="flex items-center space-x-2">
// // //         <Input
// // //           className="w-48 bg-gray-700 text-white placeholder-gray-400"
// // //           placeholder="Search novels..."
// // //           value={query}
// // //           onChange={(e) => setQuery(e.target.value)}
// // //         />
// // //         <Button className="text-white" onClick={handleSearch}>Search</Button>
// // //         <Button className="text-white" variant="ghost">Sign In</Button>
// // //         <Button className="text-white" variant="ghost">Login</Button>
// // //       </div>
    
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { Input } from "./ui/input";
// // // import { Button } from "./ui/button";

// // // const Navbar = ({ onSearch }) => {
// // //   const [query, setQuery] = useState("");

// //   // return (
// //   //   <nav className="bg-white text-black p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50 h-16">
// //   //     <div className="text-xl font-bold">📖 NovelVerse</div>
// //   //     <div className="space-x-4">
// //   //       <Link to="/"><Button variant="ghost">Home</Button></Link>
// //   //       <Link to="/trending"><Button variant="ghost">Trending</Button></Link>
// //   //       <Link to="/authors"><Button variant="ghost">Authors/Writers</Button></Link>
// //   //     </div>
// //   //     <div className="flex items-center space-x-2">
// //   //       <Input className="w-48 bg-gray-200 text-black placeholder-gray-400" placeholder="Search novels..." value={query} onChange={(e) => setQuery(e.target.value)} />
// //   //       <Button onClick={() => onSearch(query)}>Search</Button>
// //   //     </div>
// //   //   </nav>
// //   // );
// //   // };
// // //   const Navbar = ({ userType }) => {
// // //     return (
// // //       <nav className="bg-white p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50 h-16">
// // //         <div className="text-xl font-bold">📖 NovelVerse</div>
// // //         <div className="space-x-4">
// // //           <Link to="/" className="text-black">Home</Link>
// // //           <Link to="/trending" className="text-black">Trending</Link>
// // //           <Link to={userType === "writer" ? "/upload" : "/authors"} className="text-black">
// // //             {userType === "writer" ? "Upload Novel" : "Authors/Writers"}
// // //           </Link>
// // //         </div>
// // //       </nav>
// // //     );
// // //   };
// // // }

// // // export default Navbar;

// // import { Link } from "react-router-dom";
// // import { useState } from "react"

// // const Navbar = ({ userType }) => {
// //   return (
// //     <nav className="bg-white p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50 h-16">
// //       <div className="text-xl font-bold">📖 NovelVerse</div>
// //       <div className="space-x-4">
// //         <Link to="/" className="text-black">Home</Link>
// //         <Link to="/trending" className="text-black">Trending</Link>
// //         <Link to={userType === "writer" ? "/upload" : "/authors"} className="text-black">
// //           {userType === "writer" ? "Upload Novel" : "Authors/Writers"}
// //         </Link>
// //       </div>
// //       <div className="space-x-4">
// //         <Link to="/login" className="text-black border px-3 py-1 rounded-md">Login</Link>
// //         <Link to="/signup" className="text-black border px-3 py-1 rounded-md">Sign Up</Link>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { Link } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// const Navbar = ({ userType }) => {
//   const [showBrowse, setShowBrowse] = useState(false);
//   const [showPoemGenres, setShowPoemGenres] = useState(false);
//   const browseRef = useRef(null);

//   const novelGenres = [
//     "Romance", "Action", "Fantasy", "Urban", "Harem", "Transmigration", "Magic",
//     "School", "Eastern", "Adventure", "Sci-Fi", "History", "Sports", "Horror",
//     "Inspiring", "Wuxia", "Comedy", "Slice-of-Life", "Drama", "Cooking",
//     "Mystery", "Diabolical", "Cultural"
//   ];

//   const poemGenres = [
//     "Love", "Romance", "Heartbreak", "Loner", "Pain", "Wisdom", "Educative"
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (browseRef.current && !browseRef.current.contains(event.target)) {
//         setShowBrowse(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-white p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50 h-16">
//       <div className="text-xl font-bold">📖 NovelVerse</div>
      
//       <div className="space-x-4 flex items-center">
//         <Link to="/" className="text-black">Home</Link>
//         <Link to="/trending" className="text-black">Trending</Link>
//         <Link to={userType === "writer" ? "/upload" : "/authors"} className="text-black">
//           {userType === "writer" ? "Upload Novel" : "Authors/Writers"}
//         </Link>

//         {/* Browse Dropdown (Click to Open) */}
//         <div ref={browseRef} className="relative">
//           <button 
//             className="text-black px-4 py-2 hover:bg-gray-200 rounded flex items-center"
//             onClick={() => setShowBrowse(!showBrowse)}
//           >
//             <svg viewBox="0 0 1024 1024" width="20" height="20" className="mr-2">
//               <path d="M512 85.333c235.52 0 426.667 191.147 426.667 426.667s-191.147 426.667-426.667 426.667S85.333 747.52 85.333 512 276.48 85.333 512 85.333zM746.667 277.333L426.24 426.24 277.333 746.667l320.427-148.907L746.667 277.333zM512 465.067c26.027 0 46.933 20.907 46.933 46.933 0 26.027-20.906 46.933-46.933 46.933-26.027 0-46.933-20.906-46.933-46.933 0-26.027 20.906-46.933 46.933-46.933z"></path>
//             </svg>
//             <strong>Browse</strong>
//           </button>

//           {showBrowse && (
//             <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black shadow-lg rounded p-4">
//               <ul className="fs16">
//                 {/* Novels Section */}
//                 <li className="pr _on border-b pb-2">
//                   <strong className="block pb-1 text-gray-700">Novels</strong>
//                   <div className="grid grid-cols-4 gap-2">
//                     {novelGenres.map((genre) => (
//                       <Link 
//                         key={genre} 
//                         to={`/browse/novels/${genre.toLowerCase()}`} 
//                         className="p-1 hover:bg-gray-200 text-sm"
//                       >
//                         {genre}
//                       </Link>
//                     ))}
//                   </div>
//                 </li>

//                 {/* Poems Section */}
//                 <li className="pr mt-2">
//                   <button
//                     className="w-full text-left font-bold border-b pb-1 hover:bg-gray-200"
//                     onClick={() => setShowPoemGenres(!showPoemGenres)}
//                   >
//                     Poems {showPoemGenres ? "▲" : "▼"}
//                   </button>
//                   {showPoemGenres && (
//                     <div className="grid grid-cols-2 gap-2 mt-2">
//                       {poemGenres.map((genre) => (
//                         <Link 
//                           key={genre} 
//                           to={`/browse/poems/${genre.toLowerCase()}`} 
//                           className="p-1 hover:bg-gray-200 text-sm"
//                         >
//                           {genre}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="space-x-4">
//         <Link to="/login" className="text-black border px-3 py-1 rounded-md">Login</Link>
//         <Link to="/signup" className="text-black border px-3 py-1 rounded-md">Sign Up</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import WalletConnect from "./WalletConnect";

const Navbar = ({ userType }) => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("novels");

  const toggleBrowse = () => {
    setIsBrowseOpen(!isBrowseOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50 h-16">
      <div className="text-xl font-bold">📖 NovelVerse</div>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="text-black">Home</Link>
        <Link to="/trending" className="text-black">Trending</Link>
        <Link to={userType === "writer" ? "/upload" : "/authors"} className="text-black">
          {userType === "writer" ? "Upload Novel" : "Authors/Writers"}
        </Link>

        {/* Browse Section */}
        <div className="relative">
          <button
            onClick={toggleBrowse}
            className="text-black font-semibold flex items-center"
          >
            Browse ▼
          </button>
          
          {isBrowseOpen && (
            <div className="absolute left-0 top-full bg-white shadow-lg border w-64 mt-2 p-3 z-50">
              {/* Browse Categories */}
              <div className="flex space-x-4 border-b pb-2">
                <button
                  onClick={() => selectCategory("novels")}
                  className={`px-3 py-1 ${selectedCategory === "novels" ? "font-bold underline" : ""}`}
                >
                  Novels
                </button>
                <button
                  onClick={() => selectCategory("poems")}
                  className={`px-3 py-1 ${selectedCategory === "poems" ? "font-bold underline" : ""}`}
                >
                  Poems
                </button>
              </div>

              {/* Novel Genres (3 items per row) */}
              {selectedCategory === "novels" && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {["Romance", "Action", "Fantasy", "Urban", "Harem", "Magic", "School", "Eastern", "Adventure", "Sci-Fi", "History", "Sports", "Horror", "Inspiring", "Wuxia", "Comedy", "Slice-of-Life", "Drama", "Cooking", "Mystery", "Diabolical", "Cultural"].map((genre) => (
                    <Link
                      key={genre}
                      to={`/browse/novels/${genre.toLowerCase()}`}
                      className="text-black hover:text-blue-600"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              )}

              {/* Poem Genres (3 items per row) */}
              {selectedCategory === "poems" && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {["Love", "Romance", "Heartbreak", "Loner", "Pain", "Wisdom", "Educative"].map((genre) => (
                    <Link
                      key={genre}
                      to={`/browse/poems/${genre.toLowerCase()}`}
                      className="text-black hover:text-blue-600"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="space-x-4">
        <Link to="/login" className="text-black border px-3 py-1 rounded-md">Login</Link>
        <Link to="/signup" className="text-black border px-3 py-1 rounded-md">Sign Up</Link>
      </div>
      <WalletConnect />
    </nav>
  );
};

export default Navbar;
