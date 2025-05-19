import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, product, comment } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 40px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); overflow: hidden;">
        <div style="background-color: #CC2837; padding: 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Glitz Commodities NIG. LTD</h2>
          <p style="color: #ffffff; margin: 5px 0 0;">New Contact Form Submission</p>
        </div>
        <div style="padding: 30px;">
          <h3 style="color: #CC2837; margin-bottom: 20px;">Contact Details</h3>
          <p><strong style="color: #333;">Name:</strong> ${name}</p>
          <p><strong style="color: #333;">Email:</strong> ${email}</p>
          <p><strong style="color: #333;">Phone:</strong> ${phone}</p>
          <p><strong style="color: #333;">Product:</strong> ${product}</p>
          <p><strong style="color: #333;">Message:</strong></p>
          <p style="margin-top: 5px; line-height: 1.6; color: #555;">${comment}</p>
        </div>
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 13px; color: #777;">
          <p>This message was sent from the Glitz Commodities NIG. LTD website contact form.</p>
        </div>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
