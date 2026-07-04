import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(name: string, phone: string, email: string, message: string) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nueva consulta — M&amp;S Estudio Jurídico</title>
</head>
<body style="margin:0;padding:0;background:#F5F2ED;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F2ED;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1C1C1A;padding:40px 48px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:20px;font-weight:600;color:#C59A4A;letter-spacing:0.04em;">
                      M&amp;S
                    </p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:11px;color:#8A8378;letter-spacing:0.2em;text-transform:uppercase;">
                      Estudio Jurídico
                    </p>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:#C59A4A;color:#1C1C1A;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:6px 14px;">
                      Nueva consulta
                    </span>
                  </td>
                </tr>
              </table>
              <!-- Gold rule -->
              <div style="height:1px;background:linear-gradient(to right,transparent,#C59A4A,transparent);margin-top:28px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:44px 48px 40px;">

              <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:14px;color:#6B6560;line-height:1.6;">
                Se recibió una nueva consulta a través del formulario web. A continuación los datos del remitente:
              </p>

              <!-- Data grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:3px solid #C59A4A;vertical-align:top;width:28%;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#8A8378;text-transform:uppercase;letter-spacing:0.15em;font-weight:700;">
                      Nombre
                    </p>
                  </td>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:1px solid #E5E0D6;vertical-align:top;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#1C1C1A;font-weight:600;">
                      ${name}
                    </p>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:2px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:3px solid #C59A4A;vertical-align:top;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#8A8378;text-transform:uppercase;letter-spacing:0.15em;font-weight:700;">
                      Teléfono
                    </p>
                  </td>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:1px solid #E5E0D6;vertical-align:top;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#1C1C1A;font-weight:600;">
                      <a href="tel:${phone}" style="color:#C59A4A;text-decoration:none;">${phone}</a>
                    </p>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:2px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:3px solid #C59A4A;vertical-align:top;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#8A8378;text-transform:uppercase;letter-spacing:0.15em;font-weight:700;">
                      Email
                    </p>
                  </td>
                  <td style="padding:12px 16px;background:#F9F7F4;border-left:1px solid #E5E0D6;vertical-align:top;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#1C1C1A;font-weight:600;">
                      <a href="mailto:${email}" style="color:#C59A4A;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;color:#8A8378;text-transform:uppercase;letter-spacing:0.15em;font-weight:700;">
                Consulta
              </p>
              <div style="background:#F9F7F4;border-left:3px solid #C59A4A;padding:20px 20px;margin-bottom:36px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#3A3633;line-height:1.75;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re: Su consulta — M%26S Estudio Jur%C3%ADdico"
                       style="display:inline-block;background:#1C1C1A;color:#C59A4A;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
                      Responder al cliente
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F2ED;padding:24px 48px;border-top:1px solid #E5E0D6;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#8A8378;line-height:1.6;">
                M&amp;S Estudio Jurídico &nbsp;·&nbsp; Paraná / Diamante, Entre Ríos<br />
                Este mensaje fue generado automáticamente desde el formulario de contacto del sitio web.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  const { name, phone, email, message } = await request.json();

  if (!name || !phone || !email || !message) {
    return Response.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Formulario Web <onboarding@resend.dev>",
    to: "estudiomartinosantilli@gmail.com",
    replyTo: email,
    subject: `Nueva consulta de ${name}`,
    html: buildEmailHtml(name, phone, email, message),
    text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\nMensaje:\n${message}`,
  });

  if (error) {
    return Response.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
