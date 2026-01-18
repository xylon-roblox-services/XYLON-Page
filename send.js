import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { content } = req.body;
    if (!content) return res.status(400).json({ error: "No content provided" });

    try {
        // Replace this URL with your Discord webhook
        await fetch("https://discord.com/api/webhooks/1453500204572610782/EcvtCUpdGEdf4KvQveXvDhguu9h_1tum8Gy4MDjDNJR5UxYgMK9pwkE1Bsfyw7v3IFSX", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content })
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
}
