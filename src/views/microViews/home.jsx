import Banner from '/banner.jpg';
import { motion } from 'framer-motion';
export const Home = () => {
  return (
    <section
      className=" w-full h-screen bg-cover flex items-center px-14 py-10"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.6 }}
        className=" flex flex-col justify-center"
      >
        <div className="text-white  font-semibold text-[45px] mb-4">
          <h1 className="m-1">
            <span className="bg-green-700 p-1">Ven y visita</span>
          </h1>
          <h1 className="m-1">
            <span className="bg-green-700 p-1">LA PALMA</span>
          </h1>
          <h1>
            <span className="bg-green-700 p-1">únete a la naturaleza</span>
          </h1>
        </div>
        <div className=" flex justify-center">
          <button className="transition ease-in-out delay-75 bg-amber-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-100 px-4 py-2 rounded-xl ">
            Visitanos
          </button>
        </div>
      </motion.div>
    </section>
  );
};
