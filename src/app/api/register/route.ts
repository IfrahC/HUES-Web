import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, university, year, paymentStatus } = data;

    // Validate required fields
    if (!name || !email || !phone || !university || !year) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingRegistrations = await adminDb
      .collection("registrations")
      .where("email", "==", email)
      .get();

    if (!existingRegistrations.empty) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Save registration data to Firestore
    const registrationData = {
      name,
      email,
      phone,
      university,
      year,
      paymentStatus: paymentStatus || "pending",
      registeredAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection("registrations").add(registrationData);

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      registrationId: docRef.id,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
