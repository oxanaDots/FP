
import { Router } from 'express';
import {Artist, Business} from '../schemas/Schemas.js';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/artist_signup', async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const artist = new Artist({
      ...rest,
      password: hashedPassword,
    });    await artist.save();
    res.status(201).json({ message: 'Artist registered successfully', artist });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to register artist' });
  }
});

router.post('/business_signup', async (req, res) => {
    try {
      const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const business = new Business({
      ...rest,
      password: hashedPassword,
    }); 
      await business.save();
      res.status(201).json({ message: 'Business registered successfully', business });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Failed to register business' });
    }
  });

export default router;
