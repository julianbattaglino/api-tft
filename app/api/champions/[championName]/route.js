import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req, { params }) {
  const { championName } = params;

  const jsonFilePath = path.join(process.cwd(), 'public', 'champions.json');

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    const champion = data.data[championName];

    if (!champion) {
      return new Response(JSON.stringify({ error: `Champion ${championName} not found` }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(champion), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al leer el archivo JSON' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
