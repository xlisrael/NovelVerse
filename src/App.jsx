// // // // import { useState } from 'react'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from '/vite.svg'
// // // // import './App.css'

// // // // function App() {
// // // //   const [count, setCount] = useState(0)

// // // //   return (
// // // //     <>
// // // //       {/* <div>
// // // //         <a href="https://vite.dev" target="_blank">
// // // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // // //         </a>
// // // //         <a href="https://react.dev" target="_blank">
// // // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // // //         </a>
// // // //       </div>
// // // //       <h1>Vite + React</h1>
// // // //       <div className="card">
// // // //         <button onClick={() => setCount((count) => count + 1)}>
// // // //           count is {count}
// // // //         </button>
// // // //         <p>
// // // //           Edit <code>src/App.jsx</code> and save to test HMR
// // // //         </p>
// // // //       </div>
// // // //       <p className="read-the-docs">
// // // //         Click on the Vite and React logos to learn more
// // // //       </p>
// // // //     </> */}
// // // //   )
// // // // }

// // // // export default App

// // // import { useState } from 'react';
// // // import { Card, CardContent } from "./components/ui/card.jsx";
// // // import { Button } from "./components/ui/button.jsx";
// // // import { Input } from "./components/ui/input.jsx";
// // // import { Textarea } from "./components/ui/textarea.jsx";
// // // import { motion } from "framer-motion";


// // // const NovelSite = () => {
// // //   const [novels, setNovels] = useState([]);
// // //   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: ""});

// // //   const handleUpload = () => {
// // //     if (newNovel.title && newNovel.author && newNovel.content) {
// // //       setNovels([...novels, newNovel]);
// // //       setNewNovel({ title: "", author: "", content: "" });
// // //     }
// // //   };

// // //   return (
    
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         <h1 className="text-3xl font-bold mb-6">Novel Upload & Reading Platform</h1>

// // //         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
// // //           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
// // //           <Input
// // //             className="mb-4"
// // //             placeholder="Title"
// // //             value={newNovel.title}
// // //             onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })}
// // //           />
// // //           <Input
// // //             className="mb-4"
// // //             placeholder="Author"
// // //             value={newNovel.author}
// // //             onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })}
// // //           />
// // //           <Textarea
// // //             className="mb-4"
// // //             placeholder="Write your novel content here..."
// // //             value={newNovel.content}
// // //             onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })}
// // //           />
// // //           <Button onClick={handleUpload}>Upload Novel</Button>
// // //         </div>

// // //         <div>
// // //           <h2 className="text-xl font-semibold mb-4">Available Novels</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //             {novels.map((novel, index) => (
// // //               <Card key={index} className="bg-white shadow-lg rounded-2xl">
// // //                 <CardContent>
// // //                   <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
// // //                   <p className="text-gray-600 mb-2">By: {novel.author}</p>
// // //                   <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };


// // // export default NovelSite;

// import { useState } from "react";
// import { Card, CardContent } from "./components/ui/card";
// import { Button } from "./components/ui/button";
// import { Input } from "./components/ui/input";
// import { Textarea } from "./components/ui/textarea";
// import { motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import TrendingPage from "./pages/TrendingPage";
// import AuthorsPage from "./pages/AuthorsPage";
// import UploadPage from "./pages/UploadPage";

// const NovelSite = () => {
//   const [novels, setNovels] = useState([]);
//   const [newNovel, setNewNovel] = useState({ title: "", author: "", content: "" });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedNovel, setEditedNovel] = useState({ title: "", author: "", content: "" });
//   const [selectedNovel, setSelectedNovel] = useState(false);
//   const [viewMode, setViewMode] = useState(false);
//   const [recentNovels, setRecentNovels] = useState([]);
//   const [query, setQuery] = useState("");


//   // const handleUpload = () => {
//   //   if (newNovel.title && newNovel.author && newNovel.content) {
//   //     setNovels([...novels, newNovel]);
//   //     setNewNovel({ title: "", author: "", content: "" });
//   //   }
//   // };

// //   const handleUpload = () => {
// //   if (newNovel.title && newNovel.author && newNovel.content) {
// //     setNovels((prevNovels) => [...prevNovels, newNovel]); // ✅ Adds the new novel to the list
// //     setNewNovel({ title: "", author: "", content: "" }); // ✅ Resets input fields
// //   }
// // };

//   const handleUpload = () => {
//   if (!newNovel.title.trim() || !newNovel.author.trim() || !newNovel.content.trim()) {
//     alert("Please fill in all fields before uploading.");
//     return;
//   }

//   setNovels((prevNovels) => [...prevNovels, { ...newNovel }]);
//   setNewNovel({ title: "", author: "", content: "" }); // Reset input fields
// };

//   const filteredNovels = novels.filter(novel => 
//     novel.title.toLowerCase().includes(query.toLowerCase()) || 
//     novel.author.toLowerCase().includes(query.toLowerCase())
//   );

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
//     setViewMode(true);
//     // setEditingIndex(false);
//     // Save to recent views (avoid duplicates)
//     setRecentNovels((prev) => {
//       const updated = [novels[index], ...prev.filter(n => n.title !== novels[index].title)];
//       return updated.slice(0, 5); // Keep only last 5 viewed
//     });
//   };

//   const handleDelete = (index) => {
//     setNovels(novels.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex transition-all">
      
//       <Navbar onSearch={(query) => setQuery(query)} recentNovels={filteredNovels} />

//       {/* Upload section adjust width when the side panel is open */}
//       <motion.div animate={{ width: selectedNovel ? "66%" : "100%"}} className="transition-all duration-300">
//         <h1 className="text-3xl font-bold mb-6 text-center">Novel Upload & Reading Platform</h1>

//         <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-lg mx-auto">
//           <h2 className="text-xl font-semibold mb-4">Upload a New Novel</h2>
//           <Input className="mb-4" placeholder="Title" value={newNovel.title} onChange={(e) => setNewNovel({ ...newNovel, title: e.target.value })} />
//           <Input className="mb-4" placeholder="Author" value={newNovel.author} onChange={(e) => setNewNovel({ ...newNovel, author: e.target.value })} />
//           <Textarea className="mb-4" placeholder="Write your novel content here..." value={newNovel.content} onChange={(e) => setNewNovel({ ...newNovel, content: e.target.value })} />
//           <Button onClick={handleUpload}>Upload Novel</Button>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-center">Available Novels</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredNovels.length > 0 ? (
//               filteredNovels.map((novel, index) => (
//               <Card key={index} className="bg-white shadow-lg rounded-2xl p-4">
//                 <CardContent>
//                   <h3 className="text-lg font-bold mb-2">{novel.title}</h3>
//                   <p className="text-gray-600 mb-2">By: {novel.author}</p>
//                   <p className="text-sm text-gray-700">{novel.content.substring(0, 100)}...</p>
//                   <div className="mt-4 flex gap-2">
//                     {/* <Button onClick={() => { setSelectedNovel(novel); setViewMode(true);}}>View</Button>
//                     <Button className="bg-blue-500 text-white" onClick={() => handleEdit(index)}>Edit</Button>
//                     <Button className="bg-red-500 text-white" onClick={() => handleDelete(index)}>Delete</Button> */}
//                     <Button onClick={() =>handleView(index) }>View</Button>
//                     <Button onClick={() => handleEdit(index) } >Edit</Button>
//                     <Button onClick={() => handleDelete(index)} className="bg-red-500">Delete</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))
//           ):(
//             <p className="text-center text-gray-500">Nothing is uploaded yet.</p>
//           )
//             }
//           </div>
//         </div>

//         {/* {selectedNovel && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
//           <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
//           <p className="text-gray-600">By: {selectedNovel.author}</p>

//          {viewMode ? (
//           <p className="mt-4 whitespace-pre-wrap">{selectedNovel.content}</p>
//          ) : (
//           <>
//           <Textarea
//             value={selectedNovel.content}
//             onChange={(e) => setSelectedNovel({ ...selectedNovel, content: e.target.value })}
//           />
//           <Button onClick={handleSaveEdit}>Save</Button>
//         </>
//       )}

//       <Button onClick={() => { setSelectedNovel(null); setEditMode(false); setViewMode(false); }}>Close</Button>
//     </div>
//   </div>
// )} */}
        
//       {selectedNovel && (
//         <motion.div 
//           initial={{ x: "100%" }} 
//           animate={{ x: 0 }} 
//           exit={{ x: "100%" }} 
//           transition={{ duration: 0.3 }} 
//           className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-xl p-6 overflow-auto"
//         >
//           <h2 className="text-xl font-bold">{selectedNovel.title}</h2>
//           <p className="text-gray-600">By: {selectedNovel.author}</p>

//           <p className="mt-4 whitespace-pre-wrap">{selectedNovel.content}</p>

//           <Button 
//             className="mt-4 bg-red-500 text-white" 
//             onClick={() => { setSelectedNovel(null); setViewMode(false); }}
//           >
//             Close
//           </Button>
//           <Button 
//             className="mt-4 bg-red-500 text-white" 
//                     onClick={() =>setEditingIndex(!null)} 
//           >
//             Edit
//           </Button>
//         </motion.div>
//       )}


             
//         {editingIndex !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
//               <h2 className="text-xl font-semibold mb-4">Edit Novel</h2>
              
//               <div className="max-h-[60vh] overflow-y-auto p-2">

//                 <Input className="mb-4"
//                   placeholder="Title"
//                   value={editedNovel.title}
//                   onChange={(e) => setEditedNovel({ ...editedNovel, title: e.target.value })} />
//                 <Input className="mb-4" placeholder="Author"
//                   value={editedNovel.author}
//                   onChange={(e) => setEditedNovel({ ...editedNovel, author: e.target.value })} />
//                 <Textarea
//                  className="mb-4 h-40 resize-y overflow-auto" placeholder="Edit your novel content..."
//                   value={editedNovel.content}
//                   onChange={(e) => setEditedNovel({ ...editedNovel, content: e.target.value })} />
//               </div>
                
//                 <div className="flex gap-2">
//                 <Button className="bg-green-500 text-white" onClick={handleSaveEdit}>Save</Button>
//                 <Button className="bg-gray-500 text-white" onClick={() => setEditingIndex(null)}>Cancel</Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default NovelSite;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import TrendingPage from "./pages/TrendingPage.jsx";
import AuthorsPage from "./pages/AuthorsPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import NovelSite from "./pages/NovelSite.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ReadPage from "./pages/ReadPage.jsx";

const App = () => {
  const [userType, setUserType] = useState("reader"); // Change to 'writer' for testing
  const [publishedNovels, setPublishedNovels] = useState([]);

  return (
    
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/trending" element={<TrendingPage />} />
    //     <Route path="/authors" element={<AuthorsPage userType={userType} />} />
    //     <Route path="/upload" element={userType === "writer" ? <UploadPage /> : <Navigate to="/" />} />
    //     <Route path="/upload" element={<NovelSite />} />
    //     <Route path="/login" element={<Login setUserType={setUserType} />} />
    //     <Route path="/signup" element={<Signup setUserType={setUserType} />} />
    //   </Routes>
    // </Router>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage publishedNovels={publishedNovels} />} />
        <Route path="/read/:id" element={<ReadPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/authors" element={<AuthorsPage userType={userType} />} />
        <Route 
          path="/upload" 
          element={userType === "writer" ? <UploadPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/novels" 
          element={<NovelSite setPublishedNovels={setPublishedNovels} />} 
        />
        <Route path="/login" element={<Login setUserType={setUserType} />} />
        <Route path="/signup" element={<Signup setUserType={setUserType} />} />

      </Routes>
    </Router>
  );
};

export default App;
