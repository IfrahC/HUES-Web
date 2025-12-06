// Firebase Admin SDK configuration for server-side operations
import { initializeApp, getApps, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Check if Firebase credentials are properly configured
const hasValidCredentials = 
  process.env.FIREBASE_PROJECT_ID &&
  process.env.FIREBASE_PRIVATE_KEY &&
  process.env.FIREBASE_CLIENT_EMAIL &&
  process.env.FIREBASE_PRIVATE_KEY.includes('BEGIN PRIVATE KEY') &&
  process.env.FIREBASE_PRIVATE_KEY.includes('END PRIVATE KEY') &&
  process.env.FIREBASE_PRIVATE_KEY.length > 100; // Valid keys are much longer

let adminDb: FirebaseFirestore.Firestore | null = null;

if (hasValidCredentials) {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
  };

  // Initialize Firebase Admin SDK
  if (!getApps().length) {
    try {
      initializeApp({
        credential: cert(serviceAccount),
      });
      adminDb = getFirestore();
    } catch (error) {
      console.error('Firebase Admin initialization error:', error);
    }
  } else {
    adminDb = getFirestore();
  }
}

export { adminDb };
