import { DATABASE } from '@constants/env.constants';
import { Client } from 'pg';

const client = new Client(DATABASE);

export default client;
