import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserType }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.email && credentials.password) {
      setUserType("writer");
      navigate("/upload");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="p-6 pt-20 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="border p-2 w-64 mb-2"
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        className="border p-2 w-64 mb-2"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
    </div>
  );
};

export default Login;
