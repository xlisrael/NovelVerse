// // // // // // // import { useState } from "react";
// // // // // // // import { Card, CardContent } from "../components/ui/card";
// // // // // // // import { Button } from "../components/ui/button";
// // // // // // // import { Input } from "../components/ui/input";
// // // // // // // import { Textarea } from "../components/ui/textarea";
// // // // // // // import { motion } from "framer-motion";

// // // // // // // const NovelSite = () => {
// // // // // // //   const [novels, setNovels] = useState([]);
// // // // // // //   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "" });
// // // // // // //   const [editingIndex, setEditingIndex] = useState(null);
// // // // // // //   const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
// // // // // // //   const [selectedNovel, setSelectedNovel] = useState(null);
// // // // // // //   const [viewMode, setViewMode] = useState(false);

// // // // // // //   const handleUpload = () => {
// // // // // // //     if (newNovel.title && newNovel.author && newNovel.content) {
// // // // // // //       setNovels([...novels, newNovel]);
// // // // // // //       setNewNovel({ title: "", author: "", content: "" });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEdit = (index) => {
// // // // // // //     setEditingIndex(index);
// // // // // // //     setEditedNovel(novels[index]);
// // // // // // //   };

// // // // // // //   const handleSaveEdit = () => {
// // // // // // //     const updatedNovels = novels.map((novel, index) => (index === editingIndex ? editedNovel : novel));
// // // // // // //     setNovels(updatedNovels);
// // // // // // //     setEditingIndex(null);
// // // // // // //   };

// // // // // // //   const handleView = (index) => {
// // // // // // //     setSelectedNovel(novels[index]);
// // // // // // //     setViewMode(true);
// // // // // // //   };


    
// // // // // // //   const handleDelete = (index) => {
// // // // // // //     setNovels(novels.filter((_, i) => i !== index));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100 p-6 pt-20">
// // // // // // //       <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
// // // // // // //         <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

// // // // // // //         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg mx-auto">
// // // // // // //           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
// // // // // // //           <Input placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
// // // // // // //           <Input placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
// // // // // // //           <Textarea placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
// // // // // // //           <Button onClick={handleUpload}>Upload Novel</Button>
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // // //             {novels.map((novel, index) => (
// // // // // // //               <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
// // // // // // //                 <CardContent>
// // // // // // //                   <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
// // // // // // //                   <p className="text-gray-600 mb-2">By: {novel.author}</p>
// // // // // // //                   <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
// // // // // // //                   <div className="mt-4 flex gap-2">
// // // // // // //                     <Button onClick={() => handleView(index)}>View</Button>
// // // // // // //                     <Button onClick={() => handleEdit(index)}>Edit</Button>
// // // // // // //                     <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
// // // // // // //                   </div>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {selectedNovel && (
// // // // // // //           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
// // // // // // //             <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
// // // // // // //               <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
// // // // // // //               <p className="text-gray-600">By: {selectedNovel.author}</p>
// // // // // // //               <p className="mt-4">{selectedNovel.content}</p>
// // // // // // //               <Button onClick={() => setSelectedNovel(null)}>Close</Button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
              
        

// // // // // // //         {editingIndex !== null && (
// // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // //             <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
// // // // // // //               <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
// // // // // // //               <Input placeholder="Title" value={editedNovel.title} onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
// // // // // // //               <Input placeholder="Author" value={editedNovel.author} onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
// // // // // // //               <Textarea placeholder="Edit your novel content..." value={editedNovel.content} onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
// // // // // // //               <div className="flex gap-2">
// // // // // // //                 <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
// // // // // // //                 <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </motion.div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default NovelSite;

// // // // // // import { useState } from "react";
// // // // // // import { Card, CardContent } from "../components/ui/card";
// // // // // // import { Button } from "../components/ui/button";
// // // // // // import { Input } from "../components/ui/input";
// // // // // // import { Textarea } from "../components/ui/textarea";
// // // // // // import { motion } from "framer-motion";

// // // // // // const NovelSite = () => {
// // // // // //   const [novels, setNovels] = useState([]);
// // // // // //   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "" });
// // // // // //   const [editingIndex, setEditingIndex] = useState(null);
// // // // // //   const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
// // // // // //   const [selectedNovel, setSelectedNovel] = useState(null);

// // // // // //   const handleUpload = () => {
// // // // // //     if (newNovel.title && newNovel.author && newNovel.content) {
// // // // // //       setNovels([...novels, newNovel]);
// // // // // //       setNewNovel({ title: "", author: "", content: "" });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEdit = (index) => {
// // // // // //     setEditingIndex(index);
// // // // // //     setEditedNovel(novels[index]);
// // // // // //   };

// // // // // //   const handleSaveEdit = () => {
// // // // // //     const updatedNovels = novels.map((novel, index) => (index === editingIndex ? editedNovel : novel));
// // // // // //     setNovels(updatedNovels);
// // // // // //     setEditingIndex(null);
// // // // // //   };

// // // // // //   const handleView = (index) => {
// // // // // //     setSelectedNovel(novels[index]);
// // // // // //   };

// // // // // //   const handleDelete = (index) => {
// // // // // //     setNovels(novels.filter((_, i) => i !== index));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100 p-6 pt-20 flex">
// // // // // //       <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-grow">
// // // // // //         <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

// // // // // //         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg">
// // // // // //           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
// // // // // //           <Input placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
// // // // // //           <Input placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
// // // // // //           <Textarea placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
// // // // // //           <Button onClick={handleUpload}>Upload Novel</Button>
// // // // // //         </div>

// // // // // //         <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // //           {novels.map((novel, index) => (
// // // // // //             <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
// // // // // //               <CardContent>
// // // // // //                 <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
// // // // // //                 <p className="text-gray-600 mb-2">By: {novel.author}</p>
// // // // // //                 <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
// // // // // //                 <div className="mt-4 flex gap-2">
// // // // // //                   <Button onClick={() => handleView(index)}>View</Button>
// // // // // //                   <Button onClick={() => handleEdit(index)}>Edit</Button>
// // // // // //                   <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {selectedNovel && (
// // // // // //         <div className="fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg p-6 overflow-y-auto transition-transform transform translate-x-0">
// // // // // //           <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
// // // // // //           <p className="text-gray-600">By: {selectedNovel.author}</p>
// // // // // //           <p className="mt-4">{selectedNovel.content}</p>
// // // // // //           <Button className="mt-4" onClick={() => setSelectedNovel(null)}>Close</Button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {editingIndex !== null && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // //           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
// // // // // //             <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
// // // // // //             <Input placeholder="Title" value={editedNovel.title} onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
// // // // // //             <Input placeholder="Author" value={editedNovel.author} onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
// // // // // //             <Textarea placeholder="Edit your novel content..." value={editedNovel.content} onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
// // // // // //             <div className="flex gap-2">
// // // // // //               <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
// // // // // //               <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default NovelSite;

// // // // // import { useState } from "react";
// // // // // import { Card, CardContent } from "../components/ui/card";
// // // // // import { Button } from "../components/ui/button";
// // // // // import { Input } from "../components/ui/input";
// // // // // import { Textarea } from "../components/ui/textarea";
// // // // // import { motion } from "framer-motion";

// // // // // const NovelSite = () => {
// // // // //   const [novels, setNovels] = useState([]);
// // // // //   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "" });
// // // // //   const [editingIndex, setEditingIndex] = useState(null);
// // // // //   const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
// // // // //   const [selectedNovel, setSelectedNovel] = useState(null);

// // // // //   const handleUpload = () => {
// // // // //     if (newNovel.title && newNovel.author && newNovel.content) {
// // // // //       setNovels([...novels, newNovel]);
// // // // //       setNewNovel({ title: "", author: "", content: "" });
// // // // //     }
// // // // //   };

// // // // //   const handleEdit = (index) => {
// // // // //     setEditingIndex(index);
// // // // //     setEditedNovel(novels[index]);
// // // // //   };

// // // // //   const handleSaveEdit = () => {
// // // // //     const updatedNovels = novels.map((novel, index) => (index === editingIndex ? editedNovel : novel));
// // // // //     setNovels(updatedNovels);
// // // // //     setEditingIndex(null);
// // // // //   };

// // // // //   const handleView = (index) => {
// // // // //     setSelectedNovel(novels[index]);
// // // // //   };

// // // // //   const handleDelete = (index) => {
// // // // //     setNovels(novels.filter((_, i) => i !== index));
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6 pt-20 flex flex-col lg:flex-row">
// // // // //       <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-grow">
// // // // //         <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

// // // // //         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg mx-auto">
// // // // //           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
// // // // //           <Input placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
// // // // //           <Input placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
// // // // //           <Textarea placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
// // // // //           <Button onClick={handleUpload}>Upload Novel</Button>
// // // // //         </div>

// // // // //         <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //           {novels.map((novel, index) => (
// // // // //             <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
// // // // //               <CardContent>
// // // // //                 <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
// // // // //                 <p className="text-gray-600 mb-2">By: {novel.author}</p>
// // // // //                 <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
// // // // //                 <div className="mt-4 flex gap-2">
// // // // //                   <Button onClick={() => handleView(index)}>View</Button>
// // // // //                   <Button onClick={() => handleEdit(index)}>Edit</Button>
// // // // //                   <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           ))}
// // // // //         </div>
// // // // //       </motion.div>

// // // // //       {selectedNovel && (
// // // // //         <div className="fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/3 bg-white shadow-lg p-6 overflow-y-auto transition-transform transform translate-x-0">
// // // // //           <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
// // // // //           <p className="text-gray-600">By: {selectedNovel.author}</p>
// // // // //           <p className="mt-4">{selectedNovel.content}</p>
// // // // //           <Button className="mt-4" onClick={() => setSelectedNovel(null)}>Close</Button>
// // // // //         </div>
// // // // //       )}

// // // // //       {editingIndex !== null && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
// // // // //           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
// // // // //             <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
// // // // //             <Input placeholder="Title" value={editedNovel.title} onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
// // // // //             <Input placeholder="Author" value={editedNovel.author} onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
// // // // //             <Textarea placeholder="Edit your novel content..." value={editedNovel.content} onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
// // // // //             <div className="flex gap-2">
// // // // //               <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
// // // // //               <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default NovelSite;


import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { createNovel, fetchNovels } from "../services/api";
import { updateNovel } from "../services/api";  // ✅ Import updateNovel function



const NovelSite = ({ setPublishedNovels }) => {
  const [novels, setNovels] = useState([]);
  const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [image, setImage] = useState(null);
  // const [publishedNovels, setPublishedNovels] = useState([]);
  


  // Fetch novels from backend when the component mounts
  useEffect(() => {
    const loadNovels = async () => {
      try {
        const data = await fetchNovels();
        setNovels(data); // Store fetched novels in state
      } catch (error) {
        console.error("Error fetching novels:", error);
      }
    };
    loadNovels();
  }, []);

  const handleUpload = async () => {
    // if (newNovel.title && newNovel.author && newNovel.content) {
    //   setNovels([...novels, newNovel]);
    //   setNewNovel({ title: "", author: "", content: "" });
    // // }
    // if (newNovel.title && newNovel.author && newNovel.content) {
    //   try {
    //     const novelWithGenres = { ...newNovel, genres: selectedGenres }; // Include genres
    //     const response = await createNovel(novelWithGenres); // Send data to backend
    //     console.log("Novel uploaded successfully:", response);
        
    //     setNovels([...novels, { ...response, published: false }]); // Add newly uploaded novel to state
    //     setNewNovel({ title: "", author: "", content: "" }); // Reset input fields
    //     setSelectedGenres([]); // Reset selected genres after upload

    //   } catch (error) {
    //       console.error("Failed to upload novel:", error);
    //     }
    //   }
      if (newNovel.title && newNovel.author && newNovel.content) {
        try {
          const formData = new FormData();
          formData.append("title", newNovel.title);
          formData.append("author", newNovel.author);
          formData.append("genres", JSON.stringify(selectedGenres));
          formData.append("content", newNovel.content);

          if (image) {
            formData.append("image", image);
          }
          //Send formdata to backend
          const response = await createNovel(formData); //Make sure createNovel can handle formData
          console.log("Novel upload successfully:", response);

          setNovels([...novels, { ...response, published: false }]);
          setNewNovel({ title: "", author: "", content: "" });
          setSelectedGenres([]);
          setImage(null);
        } catch (error) {
          console.error("Failed to upload novel:", error);
        }
      }

    };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedNovel(novels[index]);
  };

  const handleSaveEdit = () => {
    const updatedNovels = novels.map((novel, index) => (index === editingIndex ? editedNovel : novel));
    setNovels(updatedNovels);
    setEditingIndex(null);
  };

  const handleView = (index) => {
    setSelectedNovel(novels[index]);
  };

  const handleDelete = (index) => {
    setNovels(novels.filter((_, i) => i !== index));
  };
  
    const genres = [
      "Romance", "Action", "Fantasy", "Urban", "Harem", "Transmigration", "Magic", "School",
      "Eastern", "Adventure", "Sci-Fi", "History", "Sports", "Horror", "Inspiring", "Wuxia",
      "Comedy", "Slice-of-Life", "Drama", "Cooking", "Mystery", "Diabolical", "Cultural",
      "Poem - Love", "Poem - Romance", "Poem - Heartbreak", "Poem - Loner", "Poem - Pain", 
      "Poem - Wisdom", "Poem - Educative"
    ];


    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreChange = (genre) => {
      setSelectedGenres((prevGenres) =>
        prevGenres.includes(genre)
          ? prevGenres.filter((g) => g !== genre)
          : [...prevGenres, genre]
      );
    };

  // const handleUnpublish = async (index) => {
  //   const novelToUnpublish = novels[index];

  //   try {
  //     const response = await updateNovel(novelToUnpublish.id, { unpublished: true });
  //     const updatedNovel = response.data;
      
  //     const updatedNovels = novels.map((novel, i) =>
  //       i !== index ? { ...novel, unpublished: response.unpublished } : novel
  //     );
  //     setNovels(updatedNovels);

  //     if (setPublishedNovels) {
  //       setPublishedNovels((prev) => [...prev, updatedNovel, response]);
  //     }
      
  //     console.log("Novel unpublished successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error unpublishing novel:", error);
  //   }
  // };
  
  const handlePublish = async (index) => {
    // const updatedNovels = novels.map((novel, i) => i === index ? { ...novel, published: true } : novel
    // );
    // setNovels(updatedNovels);
    // if (setPublishedNovels) {
    //   setPublishedNovels((prev) => [...prev, updatedNovels[index]]);
    // };
    const novelToPublish = novels[index];

    // try {
    //   // Update the novel to mark it as published (optional: backend update)
    //   setNovels(novels.map((novel, i) =>
    //     i === index ? { ...novel, published: true } : novel
    //   ));

    //   // Only add to home page when published
    //   if (setPublishedNovels) {
    //     setPublishedNovels((prev) => [...prev, { ...novelToPublish, published: true }]);
    //   }
    // } catch (error) {
    //   console.error("Error publishing novel:", error);
    // }

      try {
      // Send a PATCH request to update the "published" field in the backend
      // const response = await api.patch(`/${novelToPublish.id}/`, { published: true });
        // const response = await updateNovel(novelToPublish.id, { published: true });
        const response = await updateNovel(novelToPublish.id, { published: true });
        const updatedNovel = response.data; // Ensure we use the correct response format

      // Update the local state only if the backend update is successful
      const updatedNovels = novels.map((novel, i) =>
        i === index ? { ...novel, published: response.published } : novel
      );

      setNovels(updatedNovels);

      if (setPublishedNovels) {
        setPublishedNovels((prev) => [...prev, updatedNovel, response]);
      }

      console.log("Novel published successfully:", response.data);
    } catch (error) {
      console.error("Error publishing novel:", error);
    }

  };

  return (
    <div className={`min-h-screen bg-gray-100 p-6 pt-20 flex transition-all ${selectedNovel ? 'mr-[30%]' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
          <Input placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
          <Input placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
          <Textarea placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
          
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Representative Image</label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}
            className="w-full"/>
            <h3 className="text-lg font-semibold">Select Genres</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {genres.map((genre) => (
                <label key={genre} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">{genre}</span>
                </label>
              ))}
            </div>
          </div>

          <Button onClick={handleUpload}>Upload Novel</Button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {novels.map((novel, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
              <CardContent>
                <img src={novel.image} alt={novel.title} style={{ width: "200px", height: "300px" }} />
                <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
                <p className="text-gray-600 mb-2">By: {novel.author}</p>
                <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
                <div className="mt-4 flex gap-2">
                  <Button onClick={() => handleView(index)}>View</Button>
                  <Button onClick={() => handleEdit(index)}>Edit</Button>
                  <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
                  {!novel.published && <Button onClick={() => handlePublish(index)} className="bg-green-500">Publish</Button>}
                  {novel.published && <span className="text-green-600 font-bold">Published</span>}
                  {/* {novel.published && <Button onClick={() => handleUnpublish(index)}>Unpublish</Button>}
                  {!novel.unpublished && <Button onClick={() => handlePublish(index)} className="bg-green-500">Publish</Button>} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {selectedNovel && (
        <div className="fixed top-16 right-0 w-[30%] bg-white shadow-lg p-6 h-[calc(100vh-4rem)] overflow-y-auto transition-transform transform translate-x-0">
          <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
          <p className="text-gray-600">By: {selectedNovel.author}</p>
          <p className="mt-4">{selectedNovel.content}</p>
          <Button className="mt-4" onClick={() => setSelectedNovel(null)}>Close</Button>
        </div>
      )}

      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
            <Input placeholder="Title" value={editedNovel.title} onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
            <Input placeholder="Author" value={editedNovel.author} onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
            <Textarea placeholder="Edit your novel content..." value={editedNovel.content} onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
            <div className="flex gap-2">
              <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
              <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
NovelSite.propTypes = {
  setPublishedNovels: PropTypes.func.isRequired,
}
export default NovelSite;

// import { useState } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Textarea } from "../components/ui/textarea";
// import { motion } from "framer-motion";

// const NovelSite = () => {
//   const [novels, setNovels] = useState([]);
//   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "", published: false });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
//   const [publishedNovels, setPublishedNovels] = useState([]);
//     const [selectedNovel, setSelectedNovel] = useState(null);

//   const handleUpload = () => {
//     if (newNovel.title && newNovel.author && newNovel.content) {
//       setNovels([...novels, newNovel]);
//       setNewNovel({ title: "", author: "", content: "", published: false });
//     }
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditedNovel(novels[index]);
//   };

//   const handleSaveEdit = () => {
//     const updatedNovels = novels.map((novel, index) => (index === editingIndex ? editedNovel : novel));
//     setNovels(updatedNovels);
//     setEditingIndex(null);
//   };

//   const handleView = (index) => {
//     setSelectedNovel(novels[index]);
//   };

//   const handleDelete = (index) => {
//     setNovels(novels.filter((_, i) => i !== index));
//   };

// //   const handlePublish = (index) => {
// //     setNovels(novels.map((novel, i) => (i === index ? { ...novel, published: true } : novel)));
// //   };

//     const handlePublish = (index) => {
//         const updatedNovels = novels.map((novel, i) =>
//             i === index ? { ...novel, published: true } : novel
//         );
//         setNovels(updatedNovels);
//         setPublishedNovels([...publishedNovels, updatedNovels[index]]);
//     };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 pt-20 flex">
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.5 }} 
//         className={`flex-grow transition-all ${selectedNovel ? 'mr-1/3' : ''}`}
//       >
//         <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

//         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg mx-auto">
//           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
//           <Input placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
//           <Input placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
//           <Textarea placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
//           <Button onClick={handleUpload}>Upload Novel</Button>
//         </div>

//         <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {novels.map((novel, index) => (
//             <Card key={index} className="bg-white shadow-lg rounded-2xl p-4 relative">
//               <CardContent>
//                 <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
//                 <p className="text-gray-600 mb-2">By: {novel.author}</p>
//                 <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
//                 {novel.published && <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">Published</span>}
//                 <div className="mt-4 flex gap-2">
//                   <Button onClick={() => handleView(index)}>View</Button>
//                   <Button onClick={() => handleEdit(index)}>Edit</Button>
//                   <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
//                   {!novel.published && <Button onClick={() => handlePublish(index)} className="bg-blue-500">Publish</Button>}
//                     {novel.published && <span className="text-green-600 font-bold">Published</span>}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </motion.div>

//       {selectedNovel && (
//         <div className="fixed top-16 right-0 w-1/3 bg-white shadow-lg p-6 h-[calc(100vh-4rem)] overflow-y-auto transition-transform transform translate-x-0">
//           <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
//           <p className="text-gray-600">By: {selectedNovel.author}</p>
//           <p className="mt-4">{selectedNovel.content}</p>
//           <Button className="mt-4" onClick={() => setSelectedNovel(null)}>Close</Button>
//         </div>
//       )}

//       {editingIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
//             <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
//             <Input placeholder="Title" value={editedNovel.title} onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
//             <Input placeholder="Author" value={editedNovel.author} onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
//             <Textarea placeholder="Edit your novel content..." value={editedNovel.content} onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
//             <div className="flex gap-2">
//               <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
//               <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NovelSite;