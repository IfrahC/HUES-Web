"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  university: string;
  year: string;
};

export default function RegisterPage() {
  const [showPayment, setShowPayment] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, paymentStatus: "pending" }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to register");
        return;
      }

      if (result.success) {
        setRegistrationId(result.registrationId);
        toast.success("Registration data saved! Please proceed with payment.");
        setShowPayment(true);
        // In production, this would redirect to payment gateway
        // For now, we'll show a success message
        setTimeout(() => {
          toast.success("Registration successful 🎉");
          reset();
          setShowPayment(false);
          setRegistrationId(null);
        }, 2000);
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error submitting form");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Join HUES
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Register now and be part of a thriving entrepreneurial community.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 space-y-6 text-left"
        >
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone is required",
                pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" },
              })}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">University</label>
            <input
              type="text"
              {...register("university", { required: "University is required" })}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Year of Study</label>
            <select
              {...register("year", { required: "Year of study is required" })}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            >
              <option value="">Select...</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="Other">Other</option>
            </select>
            {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#00ffff] to-blue-500 text-black font-bold hover:scale-105 transition-transform shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Register & Proceed to Payment"}
          </button>

          {showPayment && registrationId && (
            <div className="mt-6 p-6 border border-[#00ffff]/30 rounded-lg bg-[#0d0d0d]">
              <h3 className="text-xl font-bold text-[#00ffff] mb-4">
                Payment Information
              </h3>
              <p className="text-gray-300 mb-4">
                Registration ID: <span className="text-[#00ffff] font-mono">{registrationId}</span>
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Payment gateway integration is ready. Configure your payment provider 
                (Razorpay/Stripe) in environment variables to enable payment processing.
              </p>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-md">
                <p className="text-sm text-gray-300">
                  💡 <strong>For Administrators:</strong> Add payment gateway credentials 
                  in your .env file and implement the payment handler in the API routes.
                </p>
              </div>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

