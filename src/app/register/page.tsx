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

// Validation patterns
const nameRegex = /^[A-Za-z][A-Za-z '.\-]{1,49}$/; // letters, spaces, apostrophes, hyphens
const teamRegex = /^[A-Za-z0-9 &()'._\-]{2,100}$/; // team/school: broader characters, 2-100 length
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-()\s]{10,20}$/; // 10-20 chars, digits and phone symbols
const cnicRegex = /^(?:\d{13}|\d{5}-\d{7}-\d)$/; // 13 digits or 5-7-1 with dashes

export default function LaunchpadRegistration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        startupName: data.startupName,
        school: data.school,
        leadName: data.leadName,
        leadEmail: data.leadEmail,
        leadPhone: data.leadPhone,
        leadCnic: data.leadCnic,

        member2Name: data.member2Name,
        member2Cnic: data.member2Cnic,

        member3Name: data.member3Name || "",
        member3Cnic: data.member3Cnic || "",

        member4Name: data.member4Name || "",
        member4Cnic: data.member4Cnic || "",

        member5Name: data.member5Name || "",
        member5Cnic: data.member5Cnic || "",
      };

      // 1️⃣ FIRST: Save to Firebase backend
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok) {
        toast.error(result?.message || "Failed to register");
        return;
      }

      toast.success("Registration submitted 🎉");

      // Clear the form after successful submission
      reset();
    } catch (err) {
      console.error(err);
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
          WARNING: This is not a standard hackathon. HU Launchpad is a 3-day
          high-intensity entrepreneurship simulation. Registration does not
          guarentee participation. Teams will be vetted based on their startup
          ideas and team composition and will be contacted separately.
        </p>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Status: <span className="text-[#00ffff] font-semibold">OPEN</span>
          <br />
          February 6th - 8th, 2026 • Habib University • PKR 6,000/team (Non-refundable)
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 space-y-10"
        >
          {/* Section 1 — Team Info */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">
              Team Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">
                  Startup / Team Name *
                </label>
                <input
                  {...register("startupName", {
                    required: "Required",
                    minLength: { value: 2, message: "Too short" },
                    maxLength: { value: 100, message: "Too long" },
                    pattern: {
                      value: teamRegex,
                      message: "Only letters, numbers and common symbols",
                    },
                  })}
                  placeholder="e.g., Team Phoenix"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.startupName && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.startupName.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">
                  School / College *
                </label>
                <input
                  {...register("school", {
                    required: "Required",
                    minLength: { value: 2, message: "Too short" },
                    maxLength: { value: 100, message: "Too long" },
                    pattern: {
                      value: teamRegex,
                      message: "Only letters, numbers and common symbols",
                    },
                  })}
                  placeholder="e.g., Habib University"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.school && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.school.message as string}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 2 — Team Lead */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">
              Team Lead (CEO)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">Full Name *</label>
                <input
                  {...register("leadName", {
                    required: "Required",
                    minLength: { value: 2, message: "Too short" },
                    maxLength: { value: 50, message: "Too long" },
                    pattern: {
                      value: nameRegex,
                      message: "Use letters, spaces, ' or -",
                    },
                  })}
                  placeholder="e.g., Ayesha Khan"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.leadName && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.leadName.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">Email *</label>
                <input
                  type="email"
                  {...register("leadEmail", {
                    required: "Required",
                    pattern: {
                      value: emailRegex,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="name@example.com"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.leadEmail && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.leadEmail.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  {...register("leadPhone", {
                    required: "Required",
                    pattern: {
                      value: phoneRegex,
                      message: "Enter a valid phone number",
                    },
                  })}
                  inputMode="tel"
                  placeholder="e.g., +92 300 1234567"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.leadPhone && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.leadPhone.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">CNIC *</label>
                <input
                  {...register("leadCnic", {
                    required: "Required",
                    pattern: {
                      value: cnicRegex,
                      message: "Use 13 digits or 12345-1234567-1",
                    },
                  })}
                  inputMode="numeric"
                  placeholder="12345-1234567-1"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.leadCnic && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.leadCnic.message as string}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 3 — Team Members */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">
              Team Members
            </h2>
            <p className="text-gray-400 mb-4">Minimum 2 members, maximum 5.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold mb-1 block">
                  Member 2 Name *
                </label>
                <input
                  {...register("member2Name", {
                    required: "Required",
                    minLength: { value: 2, message: "Too short" },
                    maxLength: { value: 50, message: "Too long" },
                    pattern: {
                      value: nameRegex,
                      message: "Use letters, spaces, ' or -",
                    },
                  })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member2Name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member2Name.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Member 2 CNIC *
                </label>
                <input
                  {...register("member2Cnic", {
                    required: "Required",
                    pattern: {
                      value: cnicRegex,
                      message: "Use 13 digits or 12345-1234567-1",
                    },
                  })}
                  inputMode="numeric"
                  placeholder="12345-1234567-1"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member2Cnic && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member2Cnic.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">
                  Member 3 Name
                </label>
                <input
                  {...register("member3Name", {
                    validate: (v) =>
                      !v || nameRegex.test(v) || "Use letters, spaces, ' or -",
                  })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member3Name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member3Name.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Member 3 CNIC
                </label>
                <input
                  {...register("member3Cnic", {
                    validate: (v) =>
                      !v ||
                      cnicRegex.test(v) ||
                      "Use 13 digits or 12345-1234567-1",
                  })}
                  inputMode="numeric"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member3Cnic && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member3Cnic.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">
                  Member 4 Name
                </label>
                <input
                  {...register("member4Name", {
                    validate: (v) =>
                      !v || nameRegex.test(v) || "Use letters, spaces, ' or -",
                  })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member4Name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member4Name.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Member 4 CNIC
                </label>
                <input
                  {...register("member4Cnic", {
                    validate: (v) =>
                      !v ||
                      cnicRegex.test(v) ||
                      "Use 13 digits or 12345-1234567-1",
                  })}
                  inputMode="numeric"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member4Cnic && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member4Cnic.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold mb-1 block">
                  Member 5 Name
                </label>
                <input
                  {...register("member5Name", {
                    validate: (v) =>
                      !v || nameRegex.test(v) || "Use letters, spaces, ' or -",
                  })}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member5Name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member5Name.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Member 5 CNIC
                </label>
                <input
                  {...register("member5Cnic", {
                    validate: (v) =>
                      !v ||
                      cnicRegex.test(v) ||
                      "Use 13 digits or 12345-1234567-1",
                  })}
                  inputMode="numeric"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#00ffff]"
                />
                {errors.member5Cnic && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.member5Cnic.message as string}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 4 — Payment */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">Payment</h2>
            <p className="text-gray-400 mb-4">
              Once your team has been selected, the team lead will be contacted
              and will be asked to transfer the{" "}
              <span className="text-[#00ffff] font-semibold">PKR 6,000</span>{" "}
              fee. Slots are only confirmed based on payment.
            </p>
          </section>

          {/* Section 5 — Agreements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#00ffff]">
              Agreements
            </h2>
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
                  <p className="text-red-500 text-sm">
                    {errors.agreeAttendance.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreeMedia", { required: "Required" })}
                    className="w-4 h-4"
                  />
                  I consent to photos and videos being used for promotional
                  purposes.
                </label>
                {errors.agreeMedia && (
                  <p className="text-red-500 text-sm">
                    {errors.agreeMedia.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreeRules", { required: "Required" })}
                    className="w-4 h-4"
                  />
                  I understand that registration does not guarantee
                  participation and that teams will be vetted.
                </label>
                {errors.agreeRules && (
                  <p className="text-red-500 text-sm">
                    {errors.agreeRules.message}
                  </p>
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
