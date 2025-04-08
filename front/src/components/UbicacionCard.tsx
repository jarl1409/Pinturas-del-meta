export default function UbicacionCard() {
    return (
      <section className="flex flex-col items-center text-center p-6 sm:p-8 max-w-xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4043629919433!2d-73.63643338946945!3d4.140601895815802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e0a700b6117%3A0x37da311452baedfc!2sPINTURAS%20DEL%20META!5e0!3m2!1ses-419!2sco!4v1744140918885!5m2!1ses-419!2sco"
          className="w-full h-64 sm:h-72 rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  
        <div className="mt-6">
          <h3 className="flex items-center justify-center gap-2 text-red-800 text-lg font-bold uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-red-800"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 .001-5.001A2.5 2.5 0 0 1 12 11.5z" />
            </svg>
            Ubicación
          </h3>
          <p className="font-semibold mt-1">
            Cra 35 N°26a-21, Villavicencio, Meta
          </p>
          <p className="text-sm text-gray-700 mt-1">
            Al respaldo del CC Unicentro, frente al hotel el Caimito
          </p>
        </div>
      </section>
    );
  }
  