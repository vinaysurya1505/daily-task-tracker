const { firebaseConfig, appId } = require('./config');

module.exports = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        // Return Firebase config for client-side initialization
        res.status(200).json({
            firebaseConfig,
            appId
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
