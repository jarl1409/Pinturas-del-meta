export default function Cards() {
  return (
    <>
      <div className="h-lvh">
        <div className="flex flex-col items-center justify-center p-4">
          {/* Contenedor principal de la tarjeta */}
          <div className="relative w-fit h-fit max-w-md rounded-lg overflow-hidden shadow-lg">
            {/* Imagen de la tarjeta */}
            <img
              src="/public/Automotriz.jpg"
              alt="Card"
              className="h-full aspect-square object-cover"
            />
            {/* Contenedor del texto superpuesto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-center ">
              <h3 className="text-3xl font-semibold text-white ">Arquitectura</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
