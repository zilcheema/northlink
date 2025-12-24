# NorthLink | Verified Canadian Talent

NorthLink is a job platform that connects Canadian employers with verified local talent. Unlike traditional job boards, NorthLink guarantees that all applicants are legally entitled to work in Canada through rigorous identity verification and compliance checks.

## 🎯 Key Features

### For Employers

- **Verified Candidate Pool**: Only receive applications from candidates who have verified their identity and legal work status
- **Job Posting**: Post jobs with detailed requirements including location, salary range, and employment type
- **Company Verification**: Secure company verification API that validates employer email domains against official company domains
- **Anti-Spam Protection**: Built-in filters to prevent spam and bot applications
- **Canadian Geo-Fencing**: Optional IP-based geo-fencing to ensure applications come from within Canada
- **Compliance First**: All features designed to comply with Canadian labour laws and PIPEDA regulations

### For Job Seekers

- **Identity Verification**: Bank-grade identity verification using third-party providers (Interac Verified/Trulioo) without storing sensitive documents
- **Legal Status Attestation**: Multi-step signup process that verifies legal right to work in Canada (Citizens, Permanent Residents, or valid Work Permit holders)
- **Privacy-Focused**: Your passport and ID documents are never stored on our servers - verification happens through trusted third-party providers
- **Verified Profile**: Build trust with employers by having a verified profile badge
- **Job Discovery**: Browse and apply to jobs from verified Canadian employers

### Security & Compliance

- **PIPEDA Compliant**: Fully compliant with Canadian privacy laws
- **Hosted in Canada**: All data is hosted within Canadian borders
- **Bank-Grade Security**: Uses the same verification technology as major Canadian financial institutions
- **No Document Storage**: Identity verification happens through third-party providers - we never see or store your ID documents
- **Email Domain Verification**: Employers must use official company email addresses to post jobs

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Runtime**: React 19.2.3

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd northlink
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
BRANDFETCH_API_KEY=your_brandfetch_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
northlink/
├── app/
│   ├── api/
│   │   └── verify-business/
│   │       └── route.ts          # Company verification API endpoint
│   ├── post/
│   │   └── page.tsx              # Job posting page for employers
│   ├── signup/
│   │   └── page.tsx              # Multi-step signup with verification
│   ├── layout.tsx                # Root layout with navigation
│   ├── page.tsx                  # Homepage with hero and features
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## 🔐 Identity Verification Flow

1. **Account Creation**: User provides email and password
2. **Legal Attestation**: User confirms legal right to work in Canada
3. **Identity Verification**: User verifies identity through third-party provider (Interac/Trulioo)
4. **Verification Complete**: User receives verified badge and can apply to jobs

## 🏢 Company Verification

The `/api/verify-business` endpoint validates that employers are using official company email addresses:

1. Checks if email is from a public provider (blocks Gmail, Yahoo, etc.)
2. Fetches official company domain from Brandfetch API
3. Compares user email domain to official company domain
4. Returns success or error based on match

## 📝 Available Routes

- `/` - Homepage with hero section and feature highlights
- `/signup` - Multi-step signup process for job seekers
- `/post` - Job posting form for employers
- `/login` - Login page (placeholder)
- `/jobs` - Job listings (placeholder)

## 🎨 Design Philosophy

NorthLink emphasizes:
- **Trust**: Every feature is designed to build trust between employers and candidates
- **Privacy**: User data and documents are handled with the highest privacy standards
- **Compliance**: Built from the ground up to comply with Canadian regulations
- **Security**: Bank-grade security measures throughout the platform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or support, please contact the development team.
