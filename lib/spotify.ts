const client_id = process.env.spotify_client_id;
const client_secret = process.env.spotify_client_secret;
const refresh_token = process.env.spotify_refresh_token;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
    if (!refresh_token) return null;

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error fetching Spotify access token:", response.status, errorText);
        return {};
    }

    return response.json();
};

export const getNowPlaying = async () => {
    if (!refresh_token) {
        return { isPlaying: false, missingToken: true };
    }

    const { access_token } = await getAccessToken();

    if (!access_token) {
        return { isPlaying: false };
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 30 }, // Check every 30 seconds
    });

    if (response.status === 204 || response.status > 400) {
        return { isPlaying: false };
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return {
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };
};
