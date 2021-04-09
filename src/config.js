const config = {
    STRIPE_KEY: "pk_live_hHHpt16ufRazHaBX6oOF0V5I001LDVxRLk",

    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-dc7",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://qpqlx8z6i9.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "iQgbkGRta",
      APP_CLIENT_ID: "5s3vj1le0vkt0d4bhatgks09m5",
      IDENTITY_POOL_ID: "us-east-2:c6193f46-a492-4b5a-9b6b-fefb9b5ddeab",
    },
  };
  
  export default config;