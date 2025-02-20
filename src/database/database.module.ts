import { Module, Provider } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseConnection } from 'clarivate-shared-orm';
import { DataSource } from 'typeorm';

const dataSourceProvider: Provider<DataSource> = {
  provide: DataSource,
  useFactory: async (): Promise<DataSource> => {
    console.log('DatabaseModule: dataSourceProvider useFactory - Initializing DataSource...');
    return await DatabaseConnection.initialize();
  },
};

@Module({
  providers: [DatabaseService, dataSourceProvider],
  exports: [DatabaseService, dataSourceProvider],
})
export class DatabaseModule {}