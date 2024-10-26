import Spain from '/spain-flag.png'

export const Navbar = () => {
  return (
    <nav className=" p-2 flex items-center font-Poppins justify-around">
      <div className=" flex gap-1">
        <p className=" font-bold lg:text-[23px] text-[18px] text-[#52585C]">
          La palma
        </p>
        <img className=" lg:w-10 w-7" src={Spain} alt="SpainFLag" />
      </div>
      <ul className="flex lg:text-[20px] text-[15px] gap-4 text-[#52585C]">
        <li>
          <a href="">Que visitar</a>
        </li>
        <li>
          <a href="">Historia</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}
