// // const HomePage = () => {
// //   return (
// //     <div className="p-6 mt-16">
// //       <h1 className="text-3xl font-bold">Home - Published Novels</h1>
// //       <p>Here, users can read published novels.</p>
// //     </div>
// //   );
// // };

// // export default HomePage;

// // const HomePage = ({ publishedNovels }) => {
// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold text-center">Published Novels</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {publishedNovels.map((novel, index) => (
// //           <div key={index} className="bg-white shadow-lg rounded-2xl p-4 border border-green-500">
// //             <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
// //             <p className="text-gray-600 mb-2">By: {novel.author}</p>
// //             <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
// //             <span className="text-green-600 font-bold">Published</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default HomePage;

// import { Card, CardContent } from "../components/ui/card";
// import PropTypes from "prop-types";

// HomePage.propTypes = {
//   publishedNovels: PropTypes.array.isRequired,
// };

// const HomePage = ({ publishedNovels }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6 pt-20">
//       <h1 className="text-3xl font-bold mb-6 text-center">Published Novels</h1>

//       {publishedNovels.length === 0 ? (
//         <p className="text-center text-gray-600">No novels have been published yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {publishedNovels.map((novel, index) => (
//             <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
//               <CardContent>
//                 <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
//                 <p className="text-gray-600 mb-2">By: {novel.author}</p>
//                 <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
//                 <span className="text-green-600 font-bold">Published</span>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

// import { Card, CardContent } from "../components/ui/card";
// import PropTypes from "prop-types";
// import React, { useEffect, useState } from 'react';
// import { fetchNovels } from '../services/api';


//   useEffect(() => {
//     const getNovels = async () => {
//       const data = await fetchNovels();
//       setNovels(data);
//     };

//     getNovels();
//   }, []);

//   HomePage.propTypes = {
//   publishedNovels: PropTypes.array.isRequired,
// };

//   const HomePage = ({ publishedNovels }) => {
//     // return (
//     //   <div className="p-6 mt-16">
//     //     <h1 className="text-3xl font-bold">Home - Published Novels</h1>
//     //     <h1>Published Novels</h1>
//     //     <ul>
//     //       {novels.map((novel) => (
//     //         <li key={novel.id}>{novel.title} by {novel.author}</li>
//     //       ))}
//     //     </ul>
//     //   </div>
//     return (
//       <div className="min-h-screen bg-gray-100 p-6 pt-20">
//         <h1 className="text-3xl font-bold mb-6 text-center">Published Novels</h1>

//         {publishedNovels.length === 0 ? (
//           <p className="text-center text-gray-600">No novels have been published yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {publishedNovels.map((novel, index) => (
//               <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
//                 <CardContent>
//                   <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
//                   <p className="text-gray-600 mb-2">By: {novel.author}</p>
//                   <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
//                   <span className="text-green-600 font-bold">Published</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

// export default Homepage;


import { Card, CardContent } from "../components/ui/card";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchNovels } from "../services/api";
import { useNavigate } from "react-router-dom"


const HomePage = ({ publishedNovels }) => {
  const [novels, setNovels] = useState([]);
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getNovels = async () => {
      try {
        const data = await fetchNovels();
        setNovels(data);
      } catch (error) {
        console.error("Error fetching novels:", error);
      }
    };
    getNovels();
    const savedReadingList = JSON.parse(localStorage.getItem("readingList")) || [];
    setReadingList(savedReadingList);
  }, []);

  const handleReadNow = (novel) => {
    setSelectedNovel(novel); // Show the full novel
     // Remove the novel from the reading list if it was added earlier
  setReadingList((prevList) => prevList.filter((item) => item.id !== novel.id));
  };

  const handleReadNext = (novel) => {
    // setReadingList([...readingList, novel]); // Add to reading list
    if (!readingList.some((item) => item.title === novel.title && item.author === novel.author)) {
      const updatedList = [...readingList, novel];
      setReadingList(updatedList);
      localStorage.setItem("readingList", JSON.stringify(updatedList));
    }
  };

  const handleCloseNovel = () => {
    if (readingList.length > 0) {
      setSelectedNovel(readingList[0]); // Load the next novel in the list
      setReadingList((prevList) => prevList.slice(1)); // Remove it from the list
    } else {
      setSelectedNovel(null); // If no more novels, close the panel
    }
  };


  return (
    <div className={`min-h-screen bg-gray-100 p-6 pt-20 transition-all ${selectedNovel ? 'mr-[30%]' : ''}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Published Novels</h1>

      {novels.length === 0 ? (
        <p className="text-center text-gray-600">No novels have been published yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {novels.filter((novel) => novel.published).map((novel, index) => (
            <Card key={index} className="bg-white shadow-md rounded-2xl p-3 w-72 mb-10 ">
              <CardContent>
                <img src={novel.image} alt={novel.title} style={{ width: "20s0px", height: "150px" }} />
                <h3 className="text-lg font-bold mb-1">{novel.title}</h3>
                <p className="text-gray-600 mb-1">By: {novel.author}</p>
                <p className="text-sm text-gray-700">{novel.content.substring(0, 80)}...</p>
                <span className="text-green-600 font-bold text-xs">Published</span>

                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleReadNow(novel)} className="bg-blue-500 text-white px-3 py-1 rounded">Read</button>
                  <button onClick={() => handleReadNext(novel)} className="bg-gray-500 text-white px-3 py-1 rounded">Read Next</button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {selectedNovel && (
        <div className="fixed top-16 right-0 w-[30%] bg-white shadow-lg p-6 h-[calc(100vh-4rem)] overflow-y-auto transition-transform">
          <img src={selectedNovel.image} alt={selectedNovel.title} style={{ width: "200px", height: "300px" }} />
          <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
          <p className="text-gray-600">By: {selectedNovel.author}</p>
          <button className="mt-4 bg-red-500 text-white px-3 py-1 rounded" onClick={handleCloseNovel}>Close</button>
          <button className="mt-4 bg-blue-500 text-white px-3 py-1 rounded" onClick={() => navigate(`/read/${selectedNovel.id}`)}>
            Expand
          </button>
          <p className="mt-4">{selectedNovel.content}</p>
          {/* <button className="mt-4 bg-red-500 text-white px-3 py-1 rounded" onClick={() => setSelectedNovel(null)}>Close</button> */}
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-10 text-center">Reading List</h2>

      {readingList.length === 0 ? (
        <p className="text-center text-gray-600">Your reading list is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {readingList.map((novel, index) => (
            <Card key={index} className="bg-white shadow-md rounded-2xl p-3 w-72 mb-10">
              <CardContent>
                <h3 className="text-lg font-bold mb-1">{novel.title}</h3>
                <p className="text-gray-600 mb-1">By: {novel.author}</p>
                <p className="text-sm text-gray-700">{novel.content.substring(0, 80)}...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  publishedNovels: PropTypes.array.isRequired,
};

export default HomePage;
