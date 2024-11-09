# This is a AI shortform video generator.

Tech stack: React, NextJS, tailwindcss, clerk, drizzle with Neon, Lucide icons, Gemini AI, Axios http, Google text-to-spech api, Assembly AI for auto captions.

## Getting Started

You need to create an .env file and add your API keys for the following .env properties:

```bash

# Postgress database url (use NEON)
NEXT_PUBLIC_DRIZZLE_DATABASE_URL=

# Clerk auth api keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# dont touch this
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# gemini AI api key
GEMINI_API_KEY=

# tech to speech api key from google console
GOOGLE_TEXT_TO_SPEECH_API_KEY=

# firebase api key, create a folder called "ai-video-files/" in root, is where the mp3 files will be stored
FIREBASE_API_KEY=

# Assembly AI api

ASSEMBLYAI_API_KEY=

#All of the api keys are avaliable for free, some services demand credit card set up for billing info, but if you dont excet a limit of X GB of api request dont have to worry, usualy it has millions of free request before it's paid.

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
