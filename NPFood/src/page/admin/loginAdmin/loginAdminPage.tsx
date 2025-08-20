import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

const LoginAdminPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Đơn giản: hardcode tài khoản admin
    if (form.username === "admin" && form.password === "123456") {
      localStorage.setItem("admin_logged_in", "true");
      navigate("/admin/managementHome");
    } else {
      setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Đăng nhập Quản trị
        </h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Tài khoản</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            autoComplete="username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-400"
            autoComplete="current-password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginAdminPage;
