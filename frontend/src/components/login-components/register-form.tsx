import { useState } from 'preact/hooks';
import { useNavigate } from '@tanstack/react-router';
import { ImUserPlus } from "react-icons/im";

export function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password.');
      return;
    }
    // Simulate registration logic
    alert('Registered successfully!');
    navigate({ to: '/tasks' }); // Or redirect to login if preferred
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600">Register</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="space-y-4"
        >
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="you@example.com"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
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
              onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <ImUserPlus size={20} />
              <span>Create Account</span>
            </span>
          </button>
        </form>

        <button
          onClick={() => navigate({ to: '/login' })}
          className="w-full text-blue-600 hover:underline text-sm text-center"
        >
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
}
