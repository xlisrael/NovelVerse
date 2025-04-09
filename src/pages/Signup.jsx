import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUserType }) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleSignup = () => {
    if (userInfo.password === userInfo.confirmPassword && userInfo.email) {
      setUserType("writer");
      navigate("/upload");
    } else {
      alert("Passwords do not match or fields are empty.");
    }
  };

  return (
    <div className="p-6 pt-20 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        className="border p-2 w-64 mb-2"
        type="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        className="border p-2 w-64 mb-2"
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <input
        className="border p-2 w-64 mb-2"
        type="password"
        placeholder="Confirm Password"
        value={userInfo.confirmPassword}
        onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
      />
      <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
    </div>
  );
};

export default Signup;
