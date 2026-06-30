import { type MailPayload } from "@/types";
import transporter from "@/config/transporter";
import { buildHtmlEmail, buildTextEmail } from "@/lib/emailTemplates";

export async function sendMail(payload: MailPayload): Promise<void> {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: payload.email,
    subject: `✨ New message from ${payload.name}`,
    text: buildTextEmail(payload),
    html: buildHtmlEmail(payload),
  });
}
