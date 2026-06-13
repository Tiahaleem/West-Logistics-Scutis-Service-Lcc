import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      company_name,
      email,
      office_number,
      country,
      product_interest,
      message
    } = req.body;

    await resend.emails.send({
      from: "West Logistics <sales@westlogisticsservices.com>",
      to: "saleswestlogistics@gmail.com",
      replyTo: email,
      subject: `New Palm Oil Inquiry from ${name}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Office Number:</strong> ${office_number || "Not provided"}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Product Interest:</strong> ${product_interest}</p>

        <hr>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}