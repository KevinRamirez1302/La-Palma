export const Navbar = () => {
  return (
    <nav className=" pt-3 absolute flex w-full justify-around">
      <p className=" font-bold text-[25px]">Hola</p>
      <ul className="flex text-[22px] gap-4 text-white font-bold">
        <li>
          <a href="">Enjoy</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
