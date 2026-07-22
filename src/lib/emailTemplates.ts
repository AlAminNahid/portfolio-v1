import { type MailPayload } from "@/types";
import { escapeHtml } from "@/lib/escapeHtml";

export function buildHtmlEmail({ name, email, message }: MailPayload): string {
  const cleanName    = escapeHtml(name);
  const cleanEmail   = escapeHtml(email);
  const cleanMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #111827; margin: 0; padding: 40px 20px; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 24px; }
          .header h2 { margin: 0; font-size: 20px; font-weight: 600; color: #1f2937; }
          .field { margin-bottom: 20px; }
          .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 700; margin-bottom: 4px; }
          .value { font-size: 15px; color: #1f2937; line-height: 1.5; }
          .message-box { background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; font-style: italic; margin-top: 8px; }
          .footer { margin-top: 32px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header"><h2>💼 New Portfolio Connection</h2></div>
          <div class="field">
            <div class="label">Sender</div>
            <div class="value"><strong>${cleanName}</strong> (${cleanEmail})</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box value">${cleanMessage}</div>
          </div>
          <div class="footer">
            Sent via Portfolio Contact Form • ${new Date().toLocaleDateString()}
          </div>
        </div>
      </body>
    </html>
  `;
}

export function buildTextEmail({ name, email, message }: MailPayload): string {
  return `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
}
