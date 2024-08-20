import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req) {
  const jsonFilePath = path.join(process.cwd(), 'public', 'champions.json');

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    const allChampions = Object.values(data.data);

    return new Response(JSON.stringify(allChampions), {
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
