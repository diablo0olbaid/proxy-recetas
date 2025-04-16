export default async function handler(req, res) {
  const input = req.query.input;

  if (!input) {
    return res.status(400).json({ error: "Falta input" });
  }

  try {
    const response = await fetch(
      "https://recetario-4j79civwf-gastons-projects-b2e4ce12.vercel.app/api/receta?input=" + encodeURIComponent(input)
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Respuesta no válida", status: response.status });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error real en proxy:", err);
    return res.status(500).json({ error: "Fallo al hacer fetch desde el proxy", detalle: err.message });
  }
}
