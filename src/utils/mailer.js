import SibApiV3Sdk from "sib-api-v3-sdk";

export const sendContactEmail = async ({ name, email, phone, message }) => {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const response = await apiInstance.sendTransacEmail({
      sender: {
        name: "StoryArc Creative",
        email: process.env.REPLY_EMAIL
      },
      to: [
        { email: process.env.SEND_TO_EMAIL1 },
        { email: process.env.SEND_TO_EMAIL2 }
      ],
      templateId: Number(process.env.TEMPLATE_ID_CONTACT),
      params: {
        name,
        email,
        phone,
        message
      }
    });

    console.log("Email sent:", response);
    return true;
  } catch (error) {
    console.error("Email Error:", error);
    return false;
  }
};


export const sendBookingEmail = async (data, orderId) => {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const api = new SibApiV3Sdk.TransactionalEmailsApi();
    const {
      name,
      address,
      preferredTime,
      userType,
      selectedPackage,
      phone,
      email
    } = data;

    const response = await api.sendTransacEmail({
      sender: {
        name: "StoryArc Creative",
        email: process.env.REPLY_EMAIL,
      },
      to: [{ email }],                            // User email
      cc: [{ email: process.env.REPLY_EMAIL }], // Official
      bcc: [
        { email: process.env.SEND_TO_EMAIL1 },
        { email: process.env.SEND_TO_EMAIL2 }
      ],
      templateId: Number(process.env.TEMPLATE_ID_BOOKNOW),
      params: {
        orderId,
        name,
        address,
        preferredTime,
        userType,
        selectedPackage,
        phone,
        email
      }
    });

    console.log("Booking email sent:", response);
    return true;
  } catch (error) {
    console.error("Booking Email Error:", error);
    return false;
  }
};
