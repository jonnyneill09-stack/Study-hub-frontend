import React, { useState } from 'react';

/**
 * Login page component
 * Controlled form with email and password inputs
 * Form validation for required fields
 * Stubbed submit handler with alert
 * Styled with centered card and purple button
 */
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errs.email = 'Invalid email address';
    if (!password) errs.password = 'Password is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    // Stub submit handler
    alert(`Logging in with email: ${email}`);
  };

  return (
    <section
      aria-label="Login form"
      className="flex justify-center items-center min-h-[calc(100vh-56px)]"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"
        noValidate
      >
        <h1 className="text-2xl font-bold mb-6 text-center select-none">Login</h1>

        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          aria-describedby="email-error"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        {errors.email && (
          <p id="email-error" className="text-red-600 mt-1 text-sm">
            {errors.email}
          </p>
        )}

        <label htmlFor="password" className="block mt-4 mb-2 font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          aria-describedby="password-error"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        {errors.password && (
          <p id="password-error" className="text-red-600 mt-1 text-sm">
            {errors.password}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-[#4f46e5] text-white font-semibold py-2 rounded-md shadow hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f46e5]"
        >
          Login
        </button>
      </form>
    </section>
  );
}
