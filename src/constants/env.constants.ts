export const PORT = process.env.PORT || 8080;

export const DATABASE =
	process.env.NODE_ENV === 'development'
		? {
				host: 'localhost',
				database: 'mydatabase',
				user: 'sa',
				password: '',
				port: 1521
		  }
		: {
				host: process.env.HOST,
				database: process.env.DATABASE_NAME,
				user: process.env.USER,
				password: process.env.PASSWORD,
				port: process.env.PORTDATABASE
		  };
