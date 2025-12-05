# HUES Web - Habib University Entrepreneurship Society

This is a [Next.js](https://nextjs.org) project for the HUES university event website with Firebase backend integration for handling registrations and payments.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 📝 Registration form with validation
- 🔥 Firebase Firestore database integration
- 💳 Payment gateway ready (Razorpay/Stripe)
- ⚡ Optimized for 100+ concurrent registrations
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase Admin SDK
- **Database**: Firebase Firestore
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project created
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd HUES-Web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with Firebase credentials (see Backend Setup below)

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend Setup

### Firebase Configuration

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Enable Firestore Database

2. **Get Client Configuration**:
   - Go to Project Settings → General
   - Scroll to "Your apps" section
   - Click on Web app (</>) icon
   - Copy the config values to your `.env` file as `NEXT_PUBLIC_FIREBASE_*` variables

3. **Get Admin SDK Credentials**:
   - Go to Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Copy the values to your `.env` file:
     - `FIREBASE_PROJECT_ID`: Project ID from JSON
     - `FIREBASE_PRIVATE_KEY`: Private key (keep the quotes and \n characters)
     - `FIREBASE_CLIENT_EMAIL`: Client email from JSON

4. **Set up Firestore Security Rules**:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

### Database Structure

**Collection: `registrations`**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "university": "string",
  "year": "string",
  "paymentStatus": "pending | completed | failed",
  "paymentId": "string (optional)",
  "registeredAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

### Payment Gateway Integration

The application is ready for payment gateway integration. To enable payments:

1. **Choose a payment provider**:
   - Razorpay (recommended for India)
   - Stripe (international)
   - PayPal

2. **Install payment SDK**:
```bash
npm install razorpay
# or
npm install stripe
```

3. **Add credentials to `.env`**:
```env
NEXT_PUBLIC_PAYMENT_KEY_ID=your-key-id
PAYMENT_KEY_SECRET=your-secret
```

4. **Implement payment flow**:
   - Check `src/app/api/payment/route.ts` for implementation guide
   - The endpoint structure is already in place
   - Uncomment and configure the payment gateway code

### Capacity and Performance

The backend is optimized for:
- ✅ 100+ concurrent registrations
- ✅ Efficient Firestore queries with indexing
- ✅ Duplicate email detection
- ✅ Input validation and sanitization
- ✅ Error handling and logging

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── register/    # Registration endpoint
│   │   └── payment/     # Payment endpoint
│   ├── register/        # Registration page
│   ├── timeline/        # Event timeline page
│   └── components/      # Reusable components
├── lib/
│   ├── firebase.ts      # Client SDK config
│   └── firebase-admin.ts # Admin SDK config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables (see `.env.example` for complete list):

```env
# Firebase Client (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
# ... other client config

# Firebase Admin (Private)
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Payment Gateway (Optional)
NEXT_PUBLIC_PAYMENT_KEY_ID=
PAYMENT_KEY_SECRET=
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)

## Support

For issues and questions, please open an issue on GitHub or contact the HUES team.
