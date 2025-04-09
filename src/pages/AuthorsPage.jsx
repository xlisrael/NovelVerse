import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthorsPage = ({ userType }) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userType === "writer") {
      navigate("/upload");
    }
  }, [userType, navigate]);

  const authors = [
    { name: "John Doe", books: ["Book 1", "Book 2"] },
    { name: "Jane Smith", books: ["Book A", "Book B"] },
  ];

  return (
    <div className="p-6 mt-16">
      <h1 className="text-3xl font-bold">Authors</h1>
      <div className="grid grid-cols-2 gap-4">
        {authors.map((author, index) => (
          <div key={index} className="p-4 border rounded cursor-pointer" onClick={() => setSelectedAuthor(author)}>
            <h2 className="text-xl">{author.name}</h2>
          </div>)
        )}
      </div>

      {selectedAuthor && (
        <div className="fixed right-0 top-0 h-full w-1/3 bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold">{selectedAuthor.name}'s Books</h2>
          <ul>
            {selectedAuthor.books.map((book, idx) => (
              <li key={idx}>{book}</li>
            ))}
          </ul>
          <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={() => setSelectedAuthor(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AuthorsPage;