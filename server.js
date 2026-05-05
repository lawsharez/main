import fetch from "node-fetch";

async function verifyTurnstile(token) {
    const secret = "YOUR_SECRET_KEY";

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`
    });

    const data = await response.json();
    return data.success;
}