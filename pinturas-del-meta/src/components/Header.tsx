export default function Header() {


  return (
    <header className=" bg-gray-950 w-full h-18 px-6 py-3 flex items-center justify-between text-white ">
      <div className="flex">
        <img src="/public/LogoPDM 1.png" alt="LogoPDM" className="h-10 mr-4" />
      </div>
      <div className="font-normal justify-between">
        <button className="mr-4 hover:bg-red-800">Lista de precios</button>
        <button className="mr-4">Pintura</button>
        <button className="mr-4">Complementarios</button>
        <button className="mr-4">Contacto</button>
        <button className="mr-4">Sobre Nosotros</button>
      </div>
      <input
          type="text"
          placeholder="Buscar..."
          className="w-48 sm:w-64 md:w-80 px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </header>
  );
}
