const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Spotify Refresh Token Generator ===");
console.log("1. Go to https://developer.spotify.com/dashboard and create an app.");
console.log("2. In your app settings, add 'http://127.0.0.1:3000' as a Redirect URI.");
console.log("3. Copy your Client ID and Client Secret below.\n");

rl.question('Enter Client ID: ', (clientId) => {
    rl.question('Enter Client Secret: ', (clientSecret) => {

        const scope = 'user-read-currently-playing user-read-recently-played';
        const redirectUri = 'http://127.0.0.1:3000';

        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

        console.log("\n=== Action Required ===");
        console.log("1. Open this URL in your browser:");
        console.log(authUrl);
        console.log("\n2. Authorize the app.");
        console.log("3. You will be redirected to 127.0.0.1 (it might show an error, that's fine).");
        console.log("4. Copy the code parameter from the URL (e.g., http://127.0.0.1:3000/?code=THIS_PART_HERE)");

        rl.question('\nEnter the code: ', (code) => {

            const data = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri
            }).toString();

            const authBuffer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

            const options = {
                hostname: 'accounts.spotify.com',
                path: '/api/token',
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${authBuffer}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': data.length
                }
            };

            const req = https.request(options, (res) => {
                let responseData = '';

                res.on('data', (chunk) => {
                    responseData += chunk;
                });

                res.on('end', () => {
                    const json = JSON.parse(responseData);
                    if (json.error) {
                        console.error("\nError:", json.error, json.error_description);
                    } else {
                        console.log("\n=== Success! ===");
                        console.log("Add these to your .env file:");
                        console.log(`spotify_client_id=${clientId}`);
                        console.log(`spotify_client_secret=${clientSecret}`);
                        console.log(`spotify_refresh_token=${json.refresh_token}`);
                    }
                    rl.close();
                });
            });

            req.on('error', (error) => {
                console.error(error);
                rl.close();
            });

            req.write(data);
            req.end();
        });
    });
});
