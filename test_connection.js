
async function test() {
    try {
        const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Hello, tell me about Elius." })
        });

        console.log("Status:", response.status);
        if (response.ok) {
            const data = await response.json();
            console.log("Response:", data);
        } else {
            console.log("Error Text:", await response.text());
        }
    } catch (e) {
        console.error("Connection Failed:", e.message);
    }
}
test();
