import winston from 'winston';

export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_NAME: string;
		}
	}

	const logger: winston.Logger;
}

export declare const logger: winston.Logger;
