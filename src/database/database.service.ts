import { Injectable, Inject, OnApplicationShutdown } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
    constructor(@Inject(DataSource) private dataSource: DataSource) {}

    getDataSource(): DataSource {
        return this.dataSource;
    }

    async onApplicationShutdown(): Promise<void> {
        if (this.dataSource && this.dataSource.isInitialized) {
            await this.dataSource.destroy();
            console.log('Database closed through DatabaseService');
        }
    }
}