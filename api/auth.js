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
            // Validate that config is loaded from environment variables
            if (!firebaseConfig || !firebaseConfig.apiKey) {
                console.error('Missing FIREBASE_API_KEY environment variable');
                return res.status(500).json({ 
                    error: 'Firebase configuration not properly set. Please check environment variables in Vercel dashboard.',
                    details: 'Missing FIREBASE_API_KEY or other required environment variables. Go to Vercel → Settings → Environment Variables and add all Firebase configuration variables.'
                });
            }
            
            // Validate all required fields
            const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
            const missingFields = requiredFields.filter(field => !firebaseConfig[field]);
            
            if (missingFields.length > 0) {
                console.error('Missing Firebase config fields:', missingFields);
                return res.status(500).json({
                    error: 'Incomplete Firebase configuration',
                    details: `Missing environment variables: ${missingFields.map(f => `FIREBASE_${f.toUpperCase()}`).join(', ')}`
                });
            }
            
            if (!appId) {
                console.error('Missing APP_ID environment variable');
                return res.status(500).json({
                    error: 'Missing APP_ID environment variable',
                    details: 'Please set APP_ID in Vercel environment variables'
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
