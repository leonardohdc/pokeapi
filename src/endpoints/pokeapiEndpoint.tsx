import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/pokemon/:name', async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const pokemonData = await response.json();
      res.json(pokemonData);
    } else {
      const errorData = await response.json();
      res.status(response.status).json(errorData);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;