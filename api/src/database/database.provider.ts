import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
        mongoose.connect('mongodb://mongo:27017/angular8-crud'),
    },
];
