import { logo } from "../assets";

function Welcome() {
  return (
    <section className="relative w-full h-screen flex flex-wrap justify-center items-center">
       <div className="absolute bg-welcomepage inset-0 bg-cover bg-center bg-no-repeat bg-blend-overlay"></div>
       <div className="absolute inset-0 bg-gradient-to-r from-dark-shade/70 to-purple-shade/90 bg-blend-overlay"></div>
       <div className="relative grid justify-items-center z-10 text-white p-8">
          <img src={logo} className="w-32 h-8" alt="logo" />
          <h1 className="text-lg font-bold pt-4 pb-10">Enjoy the newest movies</h1>
          <a href="#" className="py-4 bg-login font-medium text-base px-24 rounded-xl">Log in</a>
          <p className="pt-4 text-base">No account ? <a href="#" className="font-bold underline">Sign up</a></p>
       </div>
    </section>
  );
};

export default Welcome