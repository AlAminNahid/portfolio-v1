import { NextResponse } from "next/server";
import { contactSchema } from "@/validation/contactSchema";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 },
      );
    }

    await sendMail(result.data);

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
