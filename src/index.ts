import cors from 'cors';
import express from 'express';
import { AppDataSource } from './db';
import { router as routerAppoiments } from './routes/appointmentsRoutes';
import { router as routerCustomers } from './routes/customersRoutes';
import { router as routerGalleries } from './routes/galleriesRoutes';
import { router as routerTatoo_artists } from './routes/tattoo_artistsRoutes';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use('/customer', routerCustomers);
app.use('/tattoo_artist', routerTatoo_artists);
app.use('/appoiments', routerAppoiments);
app.use('/gallery', routerGalleries);

AppDataSource.initialize()
  .then(() => {
    console.log('🛢️  Database authenticated');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port: ${PORT}`);
    });
  })
  .catch((error: unknown) => {  
    if (error instanceof Error) {
      console.error('Database initialization error:', error.message);
    } else {
      console.error('An unknown error occurred during database initialization');
    }
  });
