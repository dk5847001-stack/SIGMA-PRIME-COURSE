const transporter = require("../config/emailConfig");

const sendOTPEmail = async (email, name, otp) => {

    const mailOptions = {
        from: `"InternovaTech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your InternovaTech Verification OTP",

        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Email Verification</title>
        </head>

        <body style="
            margin:0;
            padding:0;
            background:#f4f7fb;
            font-family:Arial, sans-serif;
        ">

            <div style="
                max-width:600px;
                margin:40px auto;
                background:#ffffff;
                border-radius:16px;
                overflow:hidden;
                box-shadow:0 10px 30px rgba(0,0,0,0.08);
            ">

                <div style="
                    background:linear-gradient(135deg,#4f46e5,#7c3aed);
                    padding:30px;
                    text-align:center;
                    color:white;
                ">

                    <h1 style="margin:0;">
                        InternovaTech
                    </h1>

                    <p style="margin:8px 0 0;">
                        Email Verification
                    </p>

                </div>

                <div style="padding:35px;">

                    <h2>Hello ${name} 👋</h2>

                    <p style="
                        color:#555;
                        font-size:15px;
                        line-height:1.6;
                    ">
                        Thank you for creating an account with
                        <strong>InternovaTech</strong>.
                    </p>

                    <p style="
                        color:#555;
                        font-size:15px;
                    ">
                        Use the following OTP to verify your email address:
                    </p>

                    <div style="
                        margin:30px 0;
                        text-align:center;
                    ">

                        <span style="
                            display:inline-block;
                            padding:18px 35px;
                            background:#f3f4ff;
                            border:2px dashed #6366f1;
                            border-radius:12px;
                            font-size:32px;
                            font-weight:bold;
                            letter-spacing:8px;
                            color:#4338ca;
                        ">
                            ${otp}
                        </span>

                    </div>

                    <p style="
                        text-align:center;
                        color:#777;
                        font-size:14px;
                    ">
                        This OTP will expire in
                        <strong>10 minutes</strong>.
                    </p>

                    <p style="
                        color:#999;
                        font-size:13px;
                        margin-top:30px;
                    ">
                        If you did not request this verification,
                        please ignore this email.
                    </p>

                </div>

                <div style="
                    background:#f8fafc;
                    padding:20px;
                    text-align:center;
                    color:#888;
                    font-size:12px;
                ">
                    © ${new Date().getFullYear()} InternovaTech.
                    All rights reserved.
                </div>

            </div>

        </body>
        </html>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendOTPEmail;