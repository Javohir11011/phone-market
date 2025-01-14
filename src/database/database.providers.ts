import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 4000,
        username: 'postgres',
        password: '1101',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts, .js'],
        synchronize: true,
      });
      return datasource.initialize();
    },
  },
];
