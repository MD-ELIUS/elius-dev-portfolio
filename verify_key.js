
import fs from 'fs';

// ... (imports)

async function verify() {
    console.log("Testing Gemini Key:", API_KEY ? "Found" : "Missing");
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent("Hello");
        const response = await result.response;
        console.log("Success:", response.text());
        fs.writeFileSync('verification_error.log', 'Success');
    } catch (error) {
        console.error("Verification Failed:", error.message);
        fs.writeFileSync('verification_error.log', `Error: ${error.message}\nJSON: ${JSON.stringify(error, null, 2)}`);
    }
}
verify();
