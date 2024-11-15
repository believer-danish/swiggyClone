import BURGER from "../../public/img/burger.png";
import DELIVERY from "../../public/img/delivery.png";
const About = () => {
  return (
    <main className="min-h-screen svgBackgroundOrange">
      <header className="flex justify-center items-center max-md:flex-col gap-4 p-4 text-center ">
        <div>
          <img src={BURGER} alt="" className="w-full max-w-96" />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-white">About Swiggy</h1>
          <p className="text-2xl text-white w-full max-w-3xl py-4">
            Swiggy is an Indian online platform that offers food delivery, quick
            commerce, and same-day package delivery services:
          </p>
        </div>
        <div>
          <img src={DELIVERY} alt="" className="w-full max-w-96" />
        </div>
      </header>

      <footer className="max-w-5xl w-full p-4 flex justify-around max-md:flex-col max-md:items-center mx-auto  gap-4">
        <div className="bg-gray-900 text-white w-full max-w-60 p-4 rounded-xl">
          <h1 className="font-bold text-2xl py-4 ">Food Delivery</h1>
          <p>
            Swiggy's food delivery service, Swiggy Food, partners with
            restaurants across India to deliver food to customers.{" "}
          </p>
        </div>
        <div className="bg-gray-900 text-white w-full max-w-60 p-4 rounded-xl">
          <h1 className="font-bold text-2xl py-4 ">Quick Commerce</h1>
          <p>
            Swiggy Instamart delivers groceries and other essentials in 10
            minutes across 43 cities.We provide variety of range of household
            products.
          </p>
        </div>
        <div className="bg-gray-900 text-white w-full max-w-60 p-4 rounded-xl">
          <h1 className="font-bold text-2xl py-4 ">Same day Delivery</h1>
          <p>
            Our delivery partner works day and night for providing you easy and
            hassle free service.We provide same day delivery without contact.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default About;
