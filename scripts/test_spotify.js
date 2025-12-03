const fs = require('fs');
const https = require('https');
const path = require('path');

// Manually load .env.local
try {
    const envPath = path.resolve(__dirname, '../.env.local');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
        console.log("Loaded .env.local");
    } else {
        console.log(".env.local not found");
    }
} catch (e) {
    console.error("Error loading .env.local:", e);
}

const client_id = process.env.spotify_client_id;
const client_secret = process.env.spotify_client_secret;
const refresh_token = process.env.spotify_refresh_token;

console.log("Checking credentials...");
console.log("Client ID:", client_id ? "Set" : "Missing");
console.log("Client Secret:", client_secret ? "Set" : "Missing");
console.log("Refresh Token:", refresh_token ? "Set" : "Missing");

if (!client_id || !client_secret || !refresh_token) {
    console.error("Missing credentials. Please check your .env file.");
    process.exit(1);
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const data = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token
}).toString();

const options = {
    method: 'POST',
    headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    }
};

console.log("\nTesting Access Token fetch...");

const req = https.request(TOKEN_ENDPOINT, options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log("Status Code:", res.statusCode);
        if (res.statusCode === 200) {
            const json = JSON.parse(responseData);
            console.log("Success! Access Token received.");
            console.log("Token starts with:", json.access_token.substring(0, 5) + "...");
        } else {
            console.error("Error fetching token:");
            console.error(responseData);
        }
    });
});

req.on('error', (error) => {
    console.error("Request Error:", error);
});

req.write(data);
req.end();
