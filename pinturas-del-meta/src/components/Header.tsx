export default function Header() {
  const pages: { id: string; name: string }[] = [
    { id: "Lista de precios", name: "Lista de precios" },
    { id: "Pintura", name: "Pintura" },
    { id: "Complementarios", name: "Complementarios" },
    { id: "Contacto", name: "Contacto" },
    { id: "Sobre nosotros", name: "Sobre nosotros" },
  ];

  return (
    <header className=" bg-gray-950 w-full h-18  flex items-center justify-between text-white pr-10">
      <div className="flex justify-center w-60 ">
        <img src="/public/LogoPDM 1.png" alt="LogoPDM" className="" />
      </div>
      <div className="flex h-full w-fit ">
        {pages.map((page) => (
          <div
            key={page.id}
            className="h-full px-12 flex-1 flex items-center justify-center hover:bg-red-900 transition-colors duration-200"
          >
            <button className="rounded-none p-0 whitespace-nowrap">
              {page.name}
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center sm:m-0 w-full h-full sm:w-auto justify-center sm:justify-end relative ">
        <img
          src="/src/icons/search.svg"
          className="absolute right-3 top-1/2 -translate-y-1/2 color-black"
        />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full sm:w-48 md:w-80 px-3 py-2 rounded-full
           bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </header>
  );
}
