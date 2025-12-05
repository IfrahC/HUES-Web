import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    // Check if Firebase is configured
    if (!adminDb) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Firebase is not configured. Please add valid credentials to .env file." 
        },
        { status: 503 }
      );
    }

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

    // Validate phone format (allows international formats with +, -, spaces, parentheses)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Check if email already exists (limit to 1 for better performance)
    const existingRegistrations = await adminDb
      .collection("registrations")
      .where("email", "==", email)
      .limit(1)
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
