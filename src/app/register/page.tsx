"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  startupName: string;
  school: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadCnic: string;
  member2Name: string;
  member2Cnic: string;
  member3Name?: string;
  member3Cnic?: string;
  member4Name?: string;
  member4Cnic?: string;
  member5Name?: string;
  member5Cnic?: string;
  agreeAttendance: boolean;
  agreeMedia: boolean;
  agreeRules: boolean;
  paymentProof: FileList;
};

export default function LaunchpadRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "paymentProof" && value instanceof FileList) {
          formData.append("paymentProof", value[0]);
        } else if (typeof value === "string") {
          formData.append(key, value);
        } else if (typeof value === "boolean") {
          formData.append(key, value ? "true" : "false");
        }
      });

      const res = await fetch("/api/launchpad-register", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to register");

      toast.success("Registration submitted 🎉");
      // reset();
    } catch (err) {
      toast.error("Error submitting form");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          HU Launchpad 2026 — Team Registration
        </h1>
        <p className="text-[#00ffff] text-center max-w-2xl mx-auto mb-6 font-semibold">
          WARNING: This is not a standard hackathon. HU Launchpad is a 3-day high-intensity entrepreneurship simulation. By registering, you agree to commit fully to the schedule.
        </p>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Status: <span className="text-[#00ffff] font-semibold">OPEN</span> — Limited to first 25 teams.<br />
          January 23rd–25th • Habib University • PKR 6,000/team (Non-refundable)
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 space-y-10"
        >
          {/* Section 1 — Team Info */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Team Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">Startup / Team Name *</label>
                <input
                  {...register("startupName", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">School / College *</label>
                <input
                  {...register("school", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
            </div>
          </section>

          {/* Section 2 — Team Lead */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Team Lead (CEO)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">Full Name *</label>
                <input
                  {...register("leadName", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">Email *</label>
                <input
                  type="email"
                  {...register("leadEmail", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">WhatsApp Number *</label>
                <input
                  type="tel"
                  {...register("leadPhone", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">CNIC *</label>
                <input
                  {...register("leadCnic", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
            </div>
          </section>

          {/* Section 3 — Team Members */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Team Members</h2>
            <p className="text-gray-400 mb-4">Minimum 2 members, maximum 5.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">Member 2 Name *</label>
                <input
                  {...register("member2Name", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Member 2 CNIC *</label>
                <input
                  {...register("member2Cnic", { required: "Required" })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">Member 3 Name</label>
                <input
                  {...register("member3Name")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Member 3 CNIC</label>
                <input
                  {...register("member3Cnic")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">Member 4 Name</label>
                <input
                  {...register("member4Name")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Member 4 CNIC</label>
                <input
                  {...register("member4Cnic")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>

              <div>
                <label className="font-semibold mb-1 block">Member 5 Name</label>
                <input
                  {...register("member5Name")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Member 5 CNIC</label>
                <input
                  {...register("member5Cnic")}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
              </div>
            </div>
          </section>

          {/* Section 4 — Payment */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Payment</h2>
            <p className="text-gray-400 mb-4">
              To secure your slot, the <span className="text-[#00ffff] font-semibold">PKR 6,000</span> fee must be transferred immediately. Slots are confirmed on a first-come-first-serve basis based on payment timestamp.
            </p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Bank Details:</h3>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Bank Name: [Insert Bank]</li>
                <li>Account Title: Habib University Entrepreneurship Society</li>
                <li>Account Number / IBAN: [Insert IBAN/Account #]</li>
              </ul>
            </div>

            <div>
              <label className="font-semibold mb-1 block">Upload Payment Proof *</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                {...register("paymentProof", { required: "Payment proof is required" })}
                className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
              />
              {errors.paymentProof && (
                <p className="text-red-500 mt-1 text-sm">{errors.paymentProof.message}</p>
              )}
            </div>
          </section>

          {/* Section 5 — Agreements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Agreements</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreeAttendance", { required: "Required" })}
                    className="w-4 h-4"
                  />
                  I will ensure full attendance during the event.
                </label>
                {errors.agreeAttendance && (
                  <p className="text-red-500 text-sm">{errors.agreeAttendance.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreeMedia", { required: "Required" })}
                    className="w-4 h-4"
                  />
                  I consent to photos and videos being used for promotional purposes.
                </label>
                {errors.agreeMedia && (
                  <p className="text-red-500 text-sm">{errors.agreeMedia.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreeRules", { required: "Required" })}
                    className="w-4 h-4"
                  />
                  I have read and agree to the event rules and regulations.
                </label>
                {errors.agreeRules && (
                  <p className="text-red-500 text-sm">{errors.agreeRules.message}</p>
                )}
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#00ffff] text-black font-semibold rounded-xl hover:bg-blue-500 transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </main>
  );
}


/*
  ============================================
  COMMENTED OUT: Alternative simple registration form
  ============================================
  This was the original simpler version for individual registration.
  Kept for reference in case we need a fallback option.
  
  Features:
  - Name, Email, Phone, University, Year of Study
  - Basic validation with react-hook-form
  - Toast notifications for success/error
  - Simpler form without file uploads
  
  To use this instead:
  1. Replace the LaunchpadRegistration component logic
  2. Update the API endpoint from "/api/launchpad-register" to "/api/register"
  3. Adjust form submission handling
  
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
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, paymentStatus: "pending" }),
      });
    const onSubmit = async (data: FormData) => {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Failed to register");

        const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to register");
        return;
      }

        if (result.success) {
        setRegistrationId(result.registrationId);
        toast.success("Registration data saved!");
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
                pattern: { value: /^[\d\s\-\+\(\)]{10,20}$/, message: "Invalid phone number format" },
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
/* End of commented out alternative simple registration form */