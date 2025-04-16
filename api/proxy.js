export default async function handler(req, res) {
  const input = req.query.input;
  const endpoint = `https://recetario-ffv9c6zr4-gastons-projects-b2e4ce12.vercel.app/api/receta?input=${encodeURIComponent(input)}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Fallo al generar receta desde el proxy' });
  }
}
