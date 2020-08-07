# LinkMe

**Next.js + firebase**  
Site for creating short links

## How to use
### Configuration

Set up Firebase:

- Create a project at the [Firebase console](https://console.firebase.google.com/).
- Copy the contents of `.env.local.example` into a new file called `.env.local`
- Get your account credentials from the Firebase console at _Project settings > Service accounts_, where you can click on _Generate new private key_ and download the credentials as a json file. It will contain key `client_email`. Set them as environment variables in the `.env.local` file at the root of this project.
- Get your authentication credentials from the Firebase console under _Project settings > General> Your apps_ Add a new web app if you don't already have one. Under _Firebase SDK snippet_ choose _Config_ to get the configuration as JSON. It will include keys like `apiKey`, `authDomain`, `databaseUrl`, `projectId`, `storageBucket`, `messagingSenderId` and `appId` and . Set the appropriate environment variables in the `.env.local` file at the root of this project.
- Go to **Develop**, click on **Authentication** and in the **Sign-in method** tab enable authentication for the app.

### Install it and run:

```bash
yarn
yarn dev
```
