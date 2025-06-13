import { useState } from 'preact/hooks';
import { useNavigate } from '@tanstack/react-router';
import { CiLogin } from "react-icons/ci";
import { ImUserPlus } from "react-icons/im";

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password.');
      return;
    }
    navigate({ to: '/tasks' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600">Login</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <CiLogin size={20} />
              <span>Login</span>
            </span>
          </button>
        </form>

        <button
          onClick={() => navigate({ to: '/register' })}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="flex items-center justify-center gap-2">
            <ImUserPlus size={20} />
            <span>Register</span>
          </span>
        </button>
      </div>
    </div>
  );
}
