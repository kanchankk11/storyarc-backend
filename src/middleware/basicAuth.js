export function basicAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ error: "Unauthorized: Missing credentials" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64Credentials, "base64").toString("ascii");

  const [username, password] = decoded.split(":");

  if (
    username !== process.env.API_USERNAME ||
    password !== process.env.API_PASSWORD
  ) {
    return res.status(401).json({ error: "Unauthorized: Invalid credentials" });
  }

  next();
}
