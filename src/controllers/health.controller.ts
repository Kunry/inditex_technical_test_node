import { ENCODING_UTF8 } from '@constants/formats';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';

const pjson = JSON.parse(readFileSync('./package.json', ENCODING_UTF8));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const HealthStatus = (_req: Request, res: Response) => {
	res.status(200).send({
		name: pjson.name,
		version: pjson.version,
		status: 'ok'
	});
};
