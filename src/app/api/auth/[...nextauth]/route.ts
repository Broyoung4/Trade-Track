import { signIn } from 'next-auth/react';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '../../../../../utils/database';
import User from '../../../../../models/user';

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            const userExists = await User.findOne({ email: profile.email });

            if(!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(' ', '').toLowerCase(),
                    image: profile.image,
                })
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST };