import React from 'react';
import { useForm } from 'react-hook-form';

function ContactMe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
    alert("Thanks for reaching out!");
  };

  return (
    <section id="contactme" className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black pt-16 py-16 px-4 text-white">
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-md">Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter a valid 10-digit number',
                },
              })}
              type="tel"
              placeholder="Your Mobile"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile.message}</p>}
          </div>

          {/* Comment */}
          <div>
            <textarea
              {...register('comment', { required: 'Please enter your message' })}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
            />
            {errors.comment && <p className="text-red-400 text-sm mt-1">{errors.comment.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-bold shadow-md hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
