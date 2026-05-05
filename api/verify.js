import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/verify", async (req, res) => {
    const token = req.body.token;
    const secret = "0x4AAAAAADJUZR0re2EAXZI8zJGf07gdbzc";

    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${token}`
        }
    );

    const data = await response.json();

    if (data.success) {
        // ✅ SERVER-SIDE REDIRECT (secure)
        return res.redirect("https://reconnect564.clarify.in.net/peahen974/");
    } else {
        return res.status(403).send("Verification failed");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
