import { Document } from 'mongoose';

export interface Dog extends Document {
    readonly name: string;
    readonly breed: string;
    readonly owner: string;
}