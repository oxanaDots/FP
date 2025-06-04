
import { Router } from 'express';
import Artist from '../artist_schema/ArtistSchema.js';
import Business from '../artist_schema/ArtistSchema.js';

const router = Router();

router.post('/artist_signup', async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).json({ message: 'Artist registered successfully', artist });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to register artist' });
  }
});

router.post('/business_signup', async (req, res) => {
    try {
      const business = new Business(req.body);
      await business.save();
      res.status(201).json({ message: 'Business registered successfully', business });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Failed to register business' });
    }
  });

export default router;
