import Banner from '/banner.jpg'
import Volcanica from '/volcanica.jpg'
import Salinas from '/salinas.jpg'
import Ciudad from '/ciudad.jpg'

export const Places = () => {
  return (
    <>
      <section className=" flex flex-col lg:flex-row lg:just  items-center w-full">
        <div className=" m-4  lg:w-[50%] grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Banner}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Volcanica}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Salinas}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Ciudad}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-5/6 lg:w-[50%] flex justify-center   ">
          <div className=" w-full lg:max-w-[600px]">
            <h1 className=" text-3xl font-PoppinBold text-yellow-500 p-2 text-center  font-bold">
              Que visitar ?
            </h1>
            <p className=" p-2 font-Poppins text-left text-xl">
              En La Palma, una hermosa isla de Canarias, hay muchos lugares
              interesantes para visitar. Algunos de ellos son el Parque Nacional
              de la Caldera de Taburiente, la Ruta de los Volcanes, el
              Observatorio Astrofísico del Roque de los Muchachos, la capital
              Santa Cruz de La Palma, la playa de Puerto Naos y el Bosque de Los
              Tilos. También puedes disfrutar de la gastronomía local y explorar
              los encantadores pueblos de la isla. ¡Espero que disfrutes tu
              visita a La Palma!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
