const admin = require("firebase-admin");
require("dotenv").config();

// Initialize Firebase Admin SDK using environment variables
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"), // Replace escaped newlines
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
  }),
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
