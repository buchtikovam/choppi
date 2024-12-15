import { Client, Databases } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("choppi");

export const databases = new Databases(client);

