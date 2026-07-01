import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\nMensaje:\n${message}`,
  });

  if (error) {
    return Response.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
