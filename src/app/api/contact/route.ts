import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SALES_EMAIL = "sales@theacademia.tech";
const BUSINESS_EMAIL = "business@theacademia.tech";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { variant, orgType, orgName, contactName, email, message, lang } = body;

    if (!orgName || !email || !message || !variant) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = variant === "sales" ? SALES_EMAIL : BUSINESS_EMAIL;

    const subjectMap: Record<string, string> = {
      sales: `[StabX Sales] ${orgName}`,
      business: `[Business Inquiry] ${orgName}`,
      waitlist: `[NaviX Waitlist] ${orgName}`,
    };

    const orgLabel = orgType === "military" ? "Military Unit" : "Company";

    const textBody = [
      `Type: ${subjectMap[variant] ?? variant}`,
      `${orgLabel}: ${orgName}`,
      contactName ? `Contact: ${contactName}` : null,
      `Email: ${email}`,
      `Language: ${lang ?? "en"}`,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    // ── Send via Gmail SMTP ──
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
        tls: { rejectUnauthorized: false },
        family: 4,
      } as nodemailer.TransportOptions);

      await transporter.sendMail({
        from: `Academia Forms <${gmailUser}>`,
        to,
        replyTo: email,
        subject: subjectMap[variant] ?? "Contact Form",
        text: textBody,
      });

      return NextResponse.json({ ok: true });
    }

    // ── Fallback: log to console when no email configured ──
    console.log("──── CONTACT FORM SUBMISSION ────");
    console.log("To:", to);
    console.log("Subject:", subjectMap[variant]);
    console.log(textBody);
    console.log("────────────────────────────────");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
