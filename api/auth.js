const { firebaseConfig, appId } = require('./config');

// Vercel serverless function
module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        try {
            // Validate that config is loaded
            if (!firebaseConfig || !firebaseConfig.apiKey) {
                return res.status(500).json({ 
                    error: 'Firebase configuration not properly set. Please check environment variables.' 
                });
            }

            // Return Firebase config for client-side initialization
            res.status(200).json({
                firebaseConfig,
                appId
            });
        } catch (error) {
            console.error('Error in /api/auth:', error);
            res.status(500).json({ 
                error: 'Failed to load Firebase configuration',
                message: error.message 
            });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
