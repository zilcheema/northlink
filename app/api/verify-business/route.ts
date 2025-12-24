import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { companyName, userEmail } = await req.json();

  // 1. Check if email is from a public provider (Anti-Spam)
  const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const emailDomain = userEmail.split("@")[1];

  if (publicDomains.includes(emailDomain)) {
    return NextResponse.json(
      { error: "Please use your official work email (e.g., name@company.ca)." },
      { status: 400 }
    );
  }

  // 2. Fetch Company Domain from Brandfetch (or Clearbit)
  // This confirms what the REAL domain for "KPMG" should be.
  const brandApiKey = process.env.BRANDFETCH_API_KEY;
  const brandResponse = await fetch(`https://api.brandfetch.io/v2/search/${companyName}`, {
    headers: { Authorization: `Bearer ${brandApiKey}` },
  });
  const brandData = await brandResponse.json();
  
  // Example result: brandData[0].domain = "kpmg.ca"
  const officialDomain = brandData[0]?.domain;

  // 3. Compare User Email to Official Domain
  if (emailDomain !== officialDomain) {
    // If user is john@random.com but tries to claim "KPMG" (kpmg.ca)
    return NextResponse.json(
      { 
        error: `Email domain mismatch. To claim ${companyName}, you must use an email ending in @${officialDomain}.` 
      }, 
      { status: 403 }
    );
  }

  // 4. Success - Send Verification Email
  return NextResponse.json({ 
    success: true, 
    message: "Company matched! Please check your email to verify." 
  });
}