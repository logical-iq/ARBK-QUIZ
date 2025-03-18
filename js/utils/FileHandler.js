import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

export class FileHandler {
    static readJSONFile(filePath) {
        try {
            const absolutePath = join(process.cwd(), filePath);
            console.log('Attempting to read file:', absolutePath); // Debug output

            if (!existsSync(absolutePath)) {
                console.error('File does not exist:', absolutePath);
                return null;
            }

            const data = readFileSync(absolutePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading/parsing file:', error);
            return null;
        }
    }

    static writeJSONFile(filePath, data) {
        try {
            writeFileSync(filePath, JSON.stringify(data, null, 2));
            return true;
        } catch (error) {
            console.error('Error writing file:', error);
            return false;
        }
    }
}
