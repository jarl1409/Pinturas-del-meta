export default function LandingPage() {
  return (
    <>
      {/* Sección principal */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Texto principal */}
          <div className="flex flex-col justify-center px-8 lg:px-24 md:w-1/2 space-y-6 z-10">
            <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
              UN NUEVO CONCEPTO <br /> EN PINTURAS
            </h1>
            <h2 className="text-lg md:text-xl leading-relaxed">
              Buscamos las últimas tecnologías en los sectores de <br />
              repintado automotriz, protección industrial y pintura <br />
              arquitectónica.
            </h2>
          </div>

          {/* Imagen con degradado */}
          <div className="relative md:w-1/2 h-full">
            <img
              src="/public/FotoFachadaPDM.png"
              alt="Foto Fachada"
              className="w-full h-full object-cover object-right"
            />
            {/* Degradado blanco */}
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Banda informativa inferior */}
      <article className="bg-red-900 text-white flex flex-col justify-center items-center py-12 px-4 md:px-10 text-xl space-y-4">
        <p className="font-bold text-2xl text-center max-w-4xl">
          Encuentra las soluciones que Pinturas del Meta ofrece para tus
          proyectos
        </p>
        <p className="text-center max-w-4xl">
          Descubre el producto ideal para pintar y hacer realidad tus proyectos. En Pinturas del Meta te brindamos una completa línea de productos de primera calidad y te asesoramos en la correcta selección de los mismos.
        </p>
      </article>
    </>
  );
}
