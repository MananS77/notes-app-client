export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-uploads-manshah"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://6r2u02j254.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_kQl7SeqxG",
        APP_CLIENT_ID: "5imrutua65rl8htv9m5p0u2ca0",
        IDENTITY_POOL_ID: "us-west-2:1608c4df-c2d2-4420-9018-387bf6cb47c6"
    }
};
