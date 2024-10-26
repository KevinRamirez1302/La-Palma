import Banner from '/banner.jpg'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <section
      className=" w-full h-screen bg-cover flex justify-center px-14 py-10"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.6 }}
        className=" flex flex-col justify-center "
      >
        <div className="text-white max-w-[700px] text-center font-extrabold lg:text-[60px] text-[45px] mb-4">
          <h1 className="m-1">
            <span className=" font-PoppinBold">Ven y visita</span>
          </h1>
          <h1 className=" font-PoppinBold m-1">
            <span className="">LA PALMA</span>
          </h1>
          <p className=" text-justify font-Poppins text-ellipsis text-[18px]">
            La Palma, en las Islas Canarias, es un destino increíble para
            aquellos que buscan aventura, naturaleza y tranquilidad. Con
            paisajes volcánicos impresionantes, hermosas playas, senderos para
            hacer senderismo, observación de estrellas y una rica cultura local,
            La Palma ofrece una experiencia única. Ven a disfrutar de su clima
            agradable, su gastronomía deliciosa y sus paisajes impresionantes.
          </p>
        </div>
        <div className=" flex justify-center">
          <button className="transition ease-in-out delay-75 bg-amber-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-100 px-4 py-2 lg:text-3xl rounded-sm ">
            Visitanos
          </button>
        </div>
      </motion.div>
    </section>
  )
}
