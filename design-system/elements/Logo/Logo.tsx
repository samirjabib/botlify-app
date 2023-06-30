import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex flex-row items-center gap-x-2 font-extrabold text-2xl " href='/'>
      <h2 className="text-white">
        Bot
        <span className="text-blue">lify</span>
      </h2>
    </Link>
  );
};

export default Logo;
