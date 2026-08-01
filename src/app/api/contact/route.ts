import { NextResponse } from "next/server";
import { contactSchema } from "@/validation/contactSchema";
import { sendMail } from "@/lib/mailer";
import { clientIp, rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    const { allowed, retryAfterSeconds } = rateLimit(clientIp(req));

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please try again later.",
        },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 },
      );
    }

    const { website, ...payload } = result.data;

    // Honeypot tripped — report success so the bot has no signal to adapt to,
    // but send nothing.
    if (website && website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Email sent successfully!",
      });
    }

    await sendMail(payload);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: unknown) {
    console.error("✉️ Mailer Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
