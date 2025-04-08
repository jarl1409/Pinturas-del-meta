export default function Header() {
  const pages = [
    { id: "lista", name: "Lista de precios" },
    { id: "pintura", name: "Pintura" },
    { id: "complementarios", name: "Complementarios" },
    { id: "contacto", name: "Contacto" },
    { id: "sobre", name: "Sobre nosotros" },
  ];

  return (
    <header className="bg-gray-950 w-full h-15 flex items-center justify-between text-white px-8">
      {/* Logo */}
      <div className="flex justify-center items-center h-full">
        <img
          src="/public/LogoPDM 1.png"
          alt="LogoPDM"
          className="h-9 object-contain"
        />
      </div>

      {/* Navegación */}
      <nav className="flex h-full">
        {pages.map((page) => (
          <a
            key={page.id}
            href="#"
            className="h-full px-6 flex items-center justify-center hover:bg-red-900 transition-colors duration-200 text-xs"
          >
            {page.name}
          </a>
        ))}
      </nav>

      {/* Buscador */}
      <div className="flex items-center h-full relative w-64 max-w-xs ml-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 pr-10 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <img
          src="/src/icons/search.svg"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          alt="Buscar"
        />
      </div>
    </header>
  );
}
