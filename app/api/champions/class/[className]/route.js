import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req, { params }) {
  const { className } = params;

  const jsonFilePath = path.join(process.cwd(), 'public', 'champions.json');

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    const filteredChampions = Object.values(data.data).filter(
      (champion) => champion.tags.includes(className)
    );

    if (filteredChampions.length === 0) {
      return new Response(JSON.stringify({ error: `No champions found for class ${className}` }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(filteredChampions), {
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
