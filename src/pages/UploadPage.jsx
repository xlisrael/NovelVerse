// const UploadPage = () => {
//   return (
//     <div className="p-6 mt-16">
//       <h1 className="text-3xl font-bold">Upload Your Novel</h1>
//       <p>Writers can upload and manage their novels here.</p>
//     </div>
//   );
// };

// export default UploadPage;

import NovelSite from "./NovelSite";
import { createNovel } from "../services/api";

const UploadNovel = () => {
  return <NovelSite />;
};

export default UploadNovel;
