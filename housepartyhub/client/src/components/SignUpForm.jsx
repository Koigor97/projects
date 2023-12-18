import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", formData, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <form
        className=" flex flex-col gap-4 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <label className=" flex flex-col gap-2">
          Username*
          <input
            type="text"
            placeholder="enter username"
            id="username"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          />
        </label>

        <label className=" flex flex-col gap-2">
          Email*
          <input
            type="email"
            placeholder="enter email"
            id="email"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          />
        </label>

        <label className=" flex flex-col gap-2">
          Password*
          <input
            type="password"
            placeholder=" enter password"
            id="password"
            className=" border p-3 rounded-lg"
            onChange={handleChange}
          />
        </label>
        <Button
          Isdisabled={loading}
          text={loading ? "Loading..." : "Sign up"}
          styleClasses="bg-green-800"
        />
        <div className="flex gap-2">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className=" text-blue-700">Sign in</span>
          </Link>
        </div>
        {error && (
          <p className=" text-red-500 mt-5">
            We are experiencing some problems. Sorry for the incovinience.
            Please use the GOOGLE sign-up button to sign up. Thank you 🙏🏾
          </p>
        )}
      </form>
    </>
  );
}
