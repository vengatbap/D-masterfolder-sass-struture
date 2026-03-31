import passport from "passport"
import { Strategy } from "passport-google-oauth20"

interface GoogleProfile {
  emails?: Array<{ value: string }>;
}

interface UserPayload {
  email?: string;
}

passport.use(new Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/oauth/google/callback"
},
async (accessToken: string, refreshToken: string, profile: GoogleProfile, done: (err: null, user: UserPayload) => void) => {

  const email = profile.emails?.[0].value

  // find or create user here

  done(null, { email })
}))