import React from 'react';

const PoliciesComp = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full mt-10">
        <div className="lg:max-w-[850px] max-w-[350px]  flex mx-auto flex-col">
          <div className="w-full mb-5">
            <p className="text-2xl font-semibold">
              Contenidos que infrinjan la propiedad intelectual
            </p>
          </div>
          <div className="bg-white w-full lg:h-[900px] mb-10 ">
            <div className="py-7 px-10">
              <p className="leading-8 text-lg">
                En SUINFI <strong>no permitimos</strong> publicar productos y/o
                contenidos que infrinjan leyes sobre marcas, derechos de autor,
                patentes, modelos de utilidad, modelos y diseños industriales,
                indicaciones geográficas o denominaciones de origen y/o
                normativa relacionada con cualquier otro tipo de derechos de
                propiedad intelectual e industrial. <br /> <br />
                Estos son algunos ejemplos de los contenidos* que están
                prohibidos en Mercado Libre porque incumplen nuestras
                políticas: 
              </p>
            </div>
            <div className="px-7 pb-5">
              <div className="flex flex-row items-center border-b py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#D04BC7"
                    d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"
                  />
                </svg>
                <p className="text-[#D04BC7] font-semibold">
                  Vender productos falsificados
                </p>
              </div>

              <div className="flex flex-row items-center border-b py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#D04BC7"
                    d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"
                  />
                </svg>
                <p className="text-[#D04BC7] font-semibold">
                  Vender productos falsificados
                </p>
              </div>

              <div className="flex flex-row items-center border-b py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#D04BC7"
                    d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"
                  />
                </svg>
                <p className="text-[#D04BC7] font-semibold">
                  Vender productos falsificados
                </p>
              </div>

              <div className="flex flex-row items-center border-b py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#D04BC7"
                    d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"
                  />
                </svg>
                <p className="text-[#D04BC7] font-semibold">
                  Vender productos falsificados
                </p>
              </div>
            </div>
            <div className="px-10 pb-7">
              <p className="text-lg leading-8">
                *Incluye cualquier contenido mediante el que ofrezcas productos
                o servicios que realices en distintas secciones de la
                plataforma, usando publicaciones, clips, anuncios, datos de
                cuenta, canales de mensajería, preguntas/respuestas, opiniones,
                entre otros. <br /> <br />
                <strong>
                  Tené en cuenta que el incumplimiento de nuestras políticas de
                  propiedad intelectual puede causar la suspensión parcial,
                  temporal o permanente para vender en el sitio.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesComp;
