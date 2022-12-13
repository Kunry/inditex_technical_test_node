import winston from 'winston';

export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_HOST: string;
			DATABASE_NAME: string;
			DATABASE_USER: string;
			DATABASE_PASSWORD: string;
			DATABASE_PORT: string;
		}
	}

	const logger: winston.Logger;
}

export declare const logger: winston.Logger;
