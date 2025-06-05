
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


  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await Artist.findOne({ email });
      let role = 'artist';
  
      if (!user) {
        user = await Business.findOne({ email });
        role = 'business';
      }
  
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      const match =  bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: 'Invalid password' });
  
      res.status(200).json({ message: 'Login successful', user, role });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

export default router;
