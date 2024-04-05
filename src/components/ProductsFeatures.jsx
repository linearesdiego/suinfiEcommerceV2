import React from 'react';

export const ProductsFeatures = ({ descripcion }) => {
  //IMPORTANTE FALTA INTEGRACION A LA API CON DATOS QUE NO EXISTEN TODAVIA
  const data = [
    {
      desarrollador: 'Adobe',
      software: 'Adobe Illustrator',
      version: '2022',
      licencia: '100 años',
      formato: 'Digital',
    },
  ];
  const dataDos = [
    {
      funciones: 'Funciones del software',
      sistemasOperativos: 'Windows',
      versionesSistemasOperativos: 'Windows 10 y 11',
      procesador: 'Intel core i3',
      velocidadMinima: '2.5GHz',
      dibujoIlustracion: 'Dibujo, ilustración',
    },
  ];
  return (
    <>
      <section>
        <div className="border border-y-gray-400 p-5 m-4">
          <div className="">
            <h1 className="text-start mt-8 mx-12 p-2 font-semibold text-2xl">
              Características de Productos
            </h1>
          </div>
          <div className=" p-2 my-2 sm:mx-10 grid grid-cols-1 sm:flex sm:flex-row-1 gap-0.5">
            <table className="border border-gray-400  m-2 w-full sm:w-2/5 ">
              <tbody>
                {data.map((item, index) => [
                  <tr key={`${index}-desarrollador`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Desarrollador
                    </th>
                    <td>{item.desarrollador}</td>
                  </tr>,
                  <tr key={`${index}-software`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Software
                    </th>
                    <td>{item.software}</td>
                  </tr>,
                  <tr key={`${index}-version`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Versión
                    </th>
                    <td>{item.version}</td>
                  </tr>,
                  <tr key={`${index}-licencia`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Licencia
                    </th>
                    <td>{item.licencia}</td>
                  </tr>,
                  <tr key={`${index}-formato`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Formato
                    </th>
                    <td>{item.formato}</td>
                  </tr>,
                ])}
              </tbody>
            </table>
            <table className="border border-gray-400  m-2 w-full sm:w-3/5 ">
              <tbody>
                {dataDos.map((item, index) => [
                  <tr key={`${index}-funciones`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Funciones del software
                    </th>
                    <td>{item.funciones}</td>
                  </tr>,
                  <tr key={`${index}-sistemas-operativos`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Sistemas operativos compatibles
                    </th>
                    <td>{item.sistemasOperativos}</td>
                  </tr>,
                  <tr key={`${index}-versiones-sistemas-operativos`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Versiones de sistemas operativos
                    </th>
                    <td>{item.versionesSistemasOperativos}</td>
                  </tr>,
                  <tr key={`${index}-procesador`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Procesador
                    </th>
                    <td>{item.procesador}</td>
                  </tr>,
                  <tr key={`${index}-velocidad-minima`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Velocidad mínima requerida
                    </th>
                    <td>{item.velocidadMinima}</td>
                  </tr>,
                  <tr key={`${index}-dibujo-ilustracion`}>
                    <th className="text-start px-6 py-4" scope="row">
                      Dibujo, ilustración
                    </th>
                    <td>{item.dibujoIlustracion}</td>
                  </tr>,
                ])}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className="p-5 m-5 border-b-gray-400">
          <div className="text-start mt-2 mx-12 p-2 font-semibold text-2xl">
            <h1>Descripción</h1>
          </div>
          {descripcion == null ? (
            <p className="text-start mt-3 mb-1 mx-12 p-2 ">
              No hay descripción disponible para este producto
            </p>
          ) : (
            <p className="text-start mt-3 mb-1 mx-12 p-2 ">{descripcion}</p>
          )}

          {/* <p className="text-start mt-3 mb-1 mx-12 p-2 ">
            Descubre AutoCAD 2023, la herramienta definitiva para dar vida a tus
            diseños.
          </p>
          <p className="my-2 mx-14 py-2">
            Con su interfaz intuitiva y potentes funciones, AutoCAD te permite
            crear, editar y visualizar tus proyectos en 2D y 3D con una
            precisión incomparable. Desde arquitectura hasta ingeniería, pasando
            por diseño industrial, AutoCAD es la elección número uno para
            profesionales de todas las disciplinas, Aprovecha sus herramientas
            avanzadas de dibujo, modelado y documentación para llevar tus ideas
            al siguiente nivel. No te pierdas la oportunidad de experimentar la
            innovación con AutoCAD 2023
          </p>
          <p className="my-2 mx-14 py-2">
            Procesador: Intel Core 5 o Posterior / Amd Ryzen 5 o Posterior 2.5
            GHZ Memoria Ram: 16 Gb Recomendado Placa de Video: Placa Geforce o
            Amd Ati Radeon de 4Gb o Posterior Almacenamiento: 15 Gb Libres
          </p> */}
        </div>
      </section>
    </>
  );
};
