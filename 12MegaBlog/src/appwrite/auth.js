import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create({
                        userId: ID.unique(), 
                        email: email, 
                        password: password,
                        name: name
                        });
        if (userAccount) {
            // Call another Method
            return this.login({email,password})
        } else {
            return userAccount;
        }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}) {
        try {
            const session = await this.account.createEmailPasswordSession({
                                    email: email, 
                                    password: password
                                    });
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUSer(){
        try {
            const user = await this.account.get();
            if (user) {
                return user;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
