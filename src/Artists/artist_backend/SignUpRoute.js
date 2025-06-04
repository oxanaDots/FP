import { Router } from 'express';
const router = Router();
import Artist from '../artist_schema/ArtistSchema.js';

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

export default router;
