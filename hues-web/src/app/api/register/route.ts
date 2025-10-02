import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, university, year } = data;

  if (!name || !email || !phone || !university || !year) {
    return NextResponse.json(
      { success: false, message: "All fields required" },
      { status: 400 }
    );
  }

  // TODO: Save to Firebase DB later
  return NextResponse.json({ success: true });
}
