// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchNovelById } from "../services/api"; // Function to fetch novel details
// import { Button } from "../components/ui/button";
// import { StarRating } from "../components/StarRating"; // Create a separate StarRating component

// const ReadPage = () => {
//   const { id } = useParams(); // Get the novel ID from the URL
//   const navigate = useNavigate();
//   const [novel, setNovel] = useState(null);

//   useEffect(() => {
//     const loadNovel = async () => {
//       try {
//         const data = await fetchNovelById(id); // Fetch novel data from backend
//         setNovel(data);
//       } catch (error) {
//         console.error("Error fetching novel:", error);
//       }
//     };

//     loadNovel();
//   }, [id]);

//   if (!novel) return <p className="text-center mt-10">Loading novel...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 pt-20">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
//         <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
//         <p className="text-gray-600 text-lg">By: {novel.author}</p>
//         <div className="flex items-center gap-2 mt-2">
//           <span className="text-gray-500">Genres:</span>
//           <span className="font-semibold">{novel.genres.join(", ")}</span>
//         </div>
//         <div className="flex items-center justify-between mt-4">
//           <p className="text-gray-500">Chapters: {novel.chapters || "N/A"}</p>
//           <p className="text-gray-500">Views: {novel.views || 0}</p>
//         </div>

//         {/* Star Rating System */}
//         <div className="mt-4">
//           <StarRating novelId={novel.id} currentRating={novel.rating || 0} />
//         </div>

//         <hr className="my-4" />

//         {/* Novel Content */}
//         <div className="prose text-lg text-gray-800">{novel.content}</div>

//         <Button className="mt-4 bg-gray-500 text-white" onClick={() => navigate(-1)}>
//           Back
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ReadPage;


import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchNovelById } from "../services/api";
import { Button } from "../components/ui/button";

const ReadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [novel, setNovel] = useState(null);

  useEffect(() => {
    const loadNovel = async () => {
      try {
        console.log("Fetching novel with id:", id);
        const data = await fetchNovelById(id);
        console.log("Fetched novel data:", data);
        setNovel(data);
      } catch (error) {
        console.error("Error fetching novel:", error);
      }
    };

    if (id) loadNovel();
  }, [id]);

  // if (!novel) return <p className="text-center mt-10">Loading novel...</p>;
  if (novel === null) return <p className="text-center mt-10">Loading novel...</p>;
  if (novel === undefined) return <p className="text-center mt-10 text-red-500">Error loading novel.</p>;
  if (Object.keys(novel).length === 0) return <p className="text-center mt-10 text-red-500">No novel data found.</p>;


  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <img src={novel.image} alt={novel.title} style={{ width: "200px", height: "300px" }} />
        <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
        <p className="text-gray-600 text-lg">By: {novel.author}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-500">Genres: </span>
          <span className="font-semibold">{Array.isArray(novel.genres) ?
            novel.genres?.join(", ") :
            novel.genres ? JSON.parse(novel.genres).join(", ") : ""}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-500">Chapters: {novel.chapters || "N/A"}</p>
          <p className="text-gray-500">Views: {novel.views || 0}</p>
        </div>
        {/* Optionally include a StarRating component here */}
        <hr className="my-4" />
        <div className="prose text-lg text-gray-800">{novel.content}</div>
        <Button className="mt-4 bg-gray-500 text-white" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ReadPage;
