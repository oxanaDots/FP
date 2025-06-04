const express = require('express');
const router = express.Router();
const Artist = require('../artist_schema/ArtistSchema');

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

module.exports = router;
