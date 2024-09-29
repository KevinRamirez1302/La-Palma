import Banner from '/banner.jpg';

export const Home = () => {
  return (
    <section
      className=" w-full h-screen bg-cover"
      style={{ backgroundImage: `url(${Banner})` }}
    ></section>
  );
};
