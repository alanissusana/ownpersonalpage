import { kv } from '@vercel/kv';

const KEY = 'pendientes-data';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await kv.get(KEY);
      res.status(200).json(data || null);
    } catch (err) {
      res.status(500).json({ error: 'No se pudo leer la base de datos' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      await kv.set(KEY, req.body);
      res.status(200).json({ ok: true });
    } catch (err) {
      res.status(500).json({ error: 'No se pudo guardar' });
    }
    return;
  }

  res.status(405).json({ error: 'Método no permitido' });
}
