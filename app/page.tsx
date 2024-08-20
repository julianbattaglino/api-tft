import Image from "next/image";

const Home = () => {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Ver Todos los Campeones: Puedes acceder a todos los campeones en /api/champions <br></br>
        Ver Información de un Campeón Específico: Por ejemplo, para acceder a Aatrox, irías a /api/champions/Aatrox <br></br>
        Ver Campeones por Clase: Para acceder a campeones por clase, usarías algo como /api/champions/class/Fighter</p>
    </main>
  );
}

export default Home;
