import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { Timestamp } from "firebase-admin/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { 
      startupName, school, leadName, leadEmail, 
      leadPhone, leadCnic, member2Name, member2Cnic,
      member3Name, member3Cnic, member4Name, member4Cnic,
      member5Name, member5Cnic
    } = body;

    // Firestore
    const docRef = await adminDb.collection("launchpadRegistrations").add({
      startupName,
      school,
      leadName,
      leadEmail,
      leadPhone,
      leadCnic,
      member2Name,
      member2Cnic,
      member3Name: member3Name || "",
      member3Cnic: member3Cnic || "",
      member4Name: member4Name || "",
      member4Cnic: member4Cnic || "",
      member5Name: member5Name || "",
      member5Cnic: member5Cnic || "",
      timestamp: Timestamp.now(),
    });

    const docId = docRef.id;

    // Google Sheets payload
    const sheetPayload = {
      id: docId,
      startupName,
      school,
      leadName,
      leadEmail,
      leadPhone,
      leadCnic,
      member2Name,
      member2Cnic,
      member3Name: member3Name || "",
      member3Cnic: member3Cnic || "",
      member4Name: member4Name || "",
      member4Cnic: member4Cnic || "",
      member5Name: member5Name || "",
      member5Cnic: member5Cnic || "",
      timestamp: new Date().toISOString()
    };

    // Send to Google Sheets 
    const googleWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL!;
    
    fetch(googleWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetPayload),
    }).catch(err =>
      console.error("Google Sheets sync error:", err)
    );

    return NextResponse.json({
      success: true,
      id: docId,
    });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
