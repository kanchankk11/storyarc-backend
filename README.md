
![Logo](https://res.cloudinary.com/dsgeppk9h/image/upload/v1764356561/logo_tc6fqt.jpg)


# StoryArc - Backend

A secure, production-ready backend built with Node.js and Express, powering the core API operations for StoryArc’s web platform.
It handles contact submissions, booking requests, email notifications, and integrates with Brevo’s transactional email service.


## API Reference

#### Booking order

```http
  POST /api/booknow
```
Sends a contact enquiry email to internal StoryArc email addresses using a Brevo template.

### 📥 Request Body
```json
{
  "name": "John Doe",
  "address": "123 Street, City, State",
  "preferredTime": "2025-11-30T02:14",
  "userType": "Influencer",
  "package": "Gold Package",
  "phone": "9876543210",
  "email": "john@example.com"
}
```

### ✅ Success — 200 OK
```json
{
  "success": true,
  "orderId": "STRC76A5CF86"
}
```
### ❌ Failure — 400 / 500
```json
{
  "success": false,
  "message": "Failed to process booking"
}
```
### 🧪 cURL Example
```bash
curl -X POST "https://<your-domain>/api/booknow" \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "address": "City Center",
    "preferredTime": "2025-11-30T02:14",
    "userType": "Influencer",
    "package": "Gold",
    "phone": "9876543210",
    "email": "client@example.com"
  }'

```

#### Contact page request


```http
  POST /api/contact
```
The Contact API receives general enquiries from users and sends an email to the StoryArc internal team using a Brevo email template.
### 📥 Request Body
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "message": "I would like to know more about your services."
}

```

### ✅ Success — 200 OK
```json
{
  "success": true,
  "message": "Email sent successfully"
}

```
### ❌ Failure — 400 / 500
```json
{
  "success": false,
  "message": "Failed to send email"
}
```
### 🧪 cURL Example
```bash
curl -X POST "https://<your-domain>/api/contact" \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "message": "I would like to know more about your services."
    }


```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SMTP_HOST`

`SMTP_PORT`

`SMTP_USER`

`SMTP_PASS`

`SEND_TO_EMAIL1`

`SEND_TO_EMAIL2`

`REPLY_EMAIL`

`TEMPLATE_ID_CONTACT`

`TEMPLATE_ID_BOOKNOW`

`BREVO_API_KEY`

`API_USERNAME`

`API_PASSWORD`
