import { FileHandler } from '../utils/FileHandler.js';
import { join } from 'path';

export class UserManager {
    constructor() {
        this.currentUser = null;
        this.usersFilePath = join(__dirname, '../../data/users.json');
    }

    async register(username, password) {
        try {
            const userData = FileHandler.readJSONFile(this.usersFilePath) || { users: [] };
            
            if (userData.users.some(user => user.username === username)) {
                throw new Error('Username already exists');
            }

            const newUser = {
                id: String(userData.users.length + 1),
                username,
                password: this.hashPassword(password),
                createdAt: new Date().toISOString(),
                quizResults: []
            };

            userData.users.push(newUser);
            const success = FileHandler.writeJSONFile(this.usersFilePath, userData);
            
            if (!success) {
                throw new Error('Failed to save user data');
            }

            return { success: true, username };
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    async login(username, password) {
        try {
            const userData = FileHandler.readJSONFile(this.usersFilePath);
            if (!userData) {
                throw new Error('User database not found');
            }

            const user = userData.users.find(u => 
                u.username === username && 
                u.password === this.hashPassword(password)
            );

            if (!user) {
                throw new Error('Invalid username or password');
            }

            this.currentUser = {
                id: user.id,
                username: user.username,
                quizResults: user.quizResults
            };

            return this.currentUser;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    // Simple password hashing (for demo purposes)
    hashPassword(password) {
        return Buffer.from(password).toString('base64');
    }

    logout() {
        this.currentUser = null;
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }
}
