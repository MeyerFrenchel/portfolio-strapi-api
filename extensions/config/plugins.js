module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
        cloud_name: env('meyercloud'),
        api_key: env('345668496829211'),
        api_secret: env('SqWG4svVQkxf09cincnTEa2He6Q'),
        },
    },
    // ...
    });