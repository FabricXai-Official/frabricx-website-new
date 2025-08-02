"use client";
import { useState } from 'react';
import apiService from '@/lib/api';

export default function NewsletterForm({ className = "" }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Basic validation
      if (!email) {
        throw new Error('Please enter your email address');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      const response = await apiService.subscribeNewsletter(email, name);
      
      setSuccess(true);
      setEmail('');
      setName('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (error) {
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field (Optional) */}
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#181B1F] text-white border border-[#333] focus:outline-none focus:border-[#F7D900] transition-colors"
            placeholder="Your name (optional)"
          />
        </div>

        {/* Email Field */}
        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 rounded bg-[#181B1F] text-white border border-[#333] focus:outline-none focus:border-[#F7D900] transition-colors"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#F7D900] text-[#181B1F] font-bold px-6 py-2 rounded shadow hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7D900] focus:ring-opacity-50 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? '...' : 'Subscribe'}
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div className="p-3 bg-green-900/20 border border-green-500 rounded-lg">
            <p className="text-green-400 text-sm">
              Thank you for subscribing to our newsletter!
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-900/20 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
} 