export default function LandingPage() {
  return (
    <>
      <div className="flex h-190">
        <div>
          <h1 className="font-extrabold text-6xl">
            UN NUEVO CONCEPTO <br /> EN PINTURAS
          </h1>
          <h2>
            Buscamos las últimas tecnologías en los sectores de <br /> repintado
            automotriz, protección industrial y pintura <br /> arquitectónica.
          </h2>
        </div>
        <div className="">
          <img src="/public/FotoFachadaPDM.png" alt="" />
        </div>
      </div>
      <article className="bg-red-900  text-white flex flex-col justify-center items-center p-4 text-xl">
        <p className="font-bold w-fit">
          Encuentra las soluciones que Pinturas del Meta ofrece para tus
          proyectos
        </p>
        <p className="w-fit text-center">
          Descubre el productos ideal para pintar y hacer realidad sus
          proyectos, en Pinturas del Meta le brindamos una <br /> completa linea
          de productos de primera calidad y lo asesoramos en la correcta
          seleccion de los mismos.
        </p>
      </article>
    </>
  );
}
