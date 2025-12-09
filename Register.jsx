import React, { useState } from 'react';

/**
 * Register page component
 * Controlled form with username, email, password, confirm password inputs
 * Validates matching passwords and required fields
 * Stubbed submit handler with alert
 * Styled with centered card and purple button
 */
export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = 'Username is required';
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errs.email = 'Invalid email address';
    if (!password) errs.password = 'Password is required';
    if (!confirmPassword) errs.confirmPassword = 'Confirm Password is required';
    if (password && confirmPassword && password !== confirmPassword)
      errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    // Stub submit handler
    alert(`Registering user: ${username} with email: ${email}`);
  };

  return (
    <section
      aria-label="Register form"
      className="flex justify-center items-center min-h-[calc(100vh-56px)]"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"
        noValidate
      >
        <h1 className="text-2xl font-bold mb-6 text-center select-none">Register</h1>

        <label htmlFor="username" className="block mb-2 font-semibold">
          Username
        </label>
        <input
          id="username"
          type="text"
          aria-describedby="username-error"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          }`}
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        {errors.username && (
          <p id="username-error" className="text-red-600 mt-1 text-sm">
            {errors.username}
          </p>
        )}

        <label htmlFor="email" className="block mt-4 mb-2 font-semibold">
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
          autoComplete="new-password"
          required
        />
        {errors.password && (
          <p id="password-error" className="text-red-600 mt-1 text-sm">
            {errors.password}
          </p>
        )}

        <label htmlFor="confirmPassword" className="block mt-4 mb-2 font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          aria-describedby="confirmPassword-error"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
          }`}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        {errors.confirmPassword && (
          <p id="confirmPassword-error" className="text-red-600 mt-1 text-sm">
            {errors.confirmPassword}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-[#4f46e5] text-white font-semibold py-2 rounded-md shadow hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f46e5]"
        >
          Register
        </button>
      </form>
    </section>
  );
}
