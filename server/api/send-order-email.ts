import * as nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.method !== "POST") {
    throw createError({
      statusCode: 405,
      message: "Method not allowed",
    });
  }

  try {
    const body = await readBody(event);

    // Validate required fields
    if (!body.name || !body.phone || !body.address) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields",
      });
    }

    // Email configuration
    const config = useRuntimeConfig();
    const recipientEmail = "assisthem23@gmail.com";
    const subject = `New Order from ${body.name}`;

    // Format email content (HTML version for better formatting)
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; color: #a855f7; margin-bottom: 10px; }
    .info-row { margin: 5px 0; }
    .total { font-size: 18px; font-weight: bold; color: #3b82f6; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Order Received</h2>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Customer Information:</div>
        <div class="info-row"><strong>Name:</strong> ${body.name}</div>
        <div class="info-row"><strong>Phone:</strong> ${body.phone}</div>
        <div class="info-row"><strong>Email:</strong> ${body.email || "Not provided"}</div>
        <div class="info-row"><strong>Address:</strong> ${body.address}</div>
      </div>
      
      <div class="section">
        <div class="section-title">Order Details:</div>
        <div class="info-row"><strong>Product:</strong> Micodus Tracker</div>
        <div class="info-row"><strong>Quantity:</strong> ${body.quantity}</div>
        <div class="info-row"><strong>Unit Price:</strong> ${body.unitPrice?.toFixed(2) || "3,199.00"}৳</div>
        <div class="info-row"><strong>Subtotal:</strong> ${body.subtotal?.toFixed(2) || "3,199.00"}৳</div>
        <div class="info-row"><strong>Shipping:</strong> ${body.shipping === "free" ? "Free" : "Not specified"}</div>
        <div class="total">Total: ${body.total?.toFixed(2) || "3,199.00"}৳</div>
      </div>
      
      <div class="section">
        <div class="info-row"><strong>Order Date:</strong> ${new Date().toLocaleString()}</div>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Plain text version
    const emailText = `
New Order Received

Customer Information:
- Name: ${body.name}
- Phone: ${body.phone}
- Email: ${body.email || "Not provided"}
- Address: ${body.address}

Order Details:
- Product: Micodus Tracker
- Quantity: ${body.quantity}
- Unit Price: ${body.unitPrice?.toFixed(2) || "3,199.00"}৳
- Subtotal: ${body.subtotal?.toFixed(2) || "3,199.00"}৳
- Shipping: ${body.shipping === "free" ? "Free" : "Not specified"}
- Total: ${body.total?.toFixed(2) || "3,199.00"}৳

Order Date: ${new Date().toLocaleString()}
    `.trim();

    // Create transporter using environment variables
    // For Gmail, you need to use an App Password (not your regular password)
    // Get it from: https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      host: config.smtpHost || "smtp.gmail.com",
      port: parseInt(config.smtpPort || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.smtpUser, // Your email address
        pass: config.smtpPassword, // Your email password or App Password
      },
    } as any);

    // Send email
    const info = await transporter.sendMail({
      from: `"Bulk Gadget Orders" <${config.smtpUser || "noreply@bulkgadget.com"}>`,
      to: recipientEmail,
      subject: subject,
      text: emailText,
      html: emailHtml,
    });

    console.log("Email sent successfully:", info.messageId);

    return {
      success: true,
      message: "Order email sent successfully",
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error("Error sending email:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to send email",
    });
  }
});
