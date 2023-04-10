import Link from "next/link";

export default function NavBar(): JSX.Element {
  return (
    <nav>
      <h1 className="text-center font-extrabold p-5 lg:text-8xl sm:text-5xl">
        <Link
          href={"/"}
          className="font-thin text-red  lg:text-8xl sm:text-6xl"
        >
          {">"}
        </Link>
        Sudo Films
      </h1>
    </nav>
  );
}
