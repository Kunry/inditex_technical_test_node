export const PORT = process.env.PORT || 8080;

export const DATABASE =
	process.env.NODE_ENV === 'development'
		? {
				password: 'root',
				user: 'root',
				host: 'localhost',
				database: 'root',
				port: 5432
		  }
		: {
				password: process.env.DATABASE_PASSWORD,
				user: process.env.DATABASE_USER,
				host: process.env.DATABASE_HOST,
				database: process.env.DATABASE_NAME,
				port: +process.env.DATABASE_PORT
		  };
