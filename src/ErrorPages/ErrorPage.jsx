import { Button } from "flowbite-react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <section className="w-11/12 mx-auto mt-10 flex justify-center items-center flex-col font-PoppinsRegular">
        <div className="max-w-full">
          <img
            src="/src/assets/images/Filmrolls.png"
            alt="Filmrolls"
            className="w-full object-contain"
          />
        </div>
        <div className="w-5/12 mt-5 text-center box-border mb-6">
          <h2 className=" text-3xl lg:text-5xl lg:leading-leading-56px tracking-tight font-semibold	text-grey-50  mb-4 md:text-4xl md:leading-10">
            Lost your way?
          </h2>
          <p className="lg:px-4 text-grey-300  text-base mb-2">
            Oops! This is awkward. You are looking for something that doesn't
            actually exist.
          </p>
          <p className="px-4 text-grey-300 text-base"> Error: {error.status}</p>
        </div>
        <Button
          as={Link}
          to={"/"}
          className="text-white-100 bg-primary-400  focus:outline-none focus:ring-0 "
        >
          Go Home
        </Button>
      </section>
    </>
  );
}
