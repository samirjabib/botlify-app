import Link from "next/link";
import NavigationLinks from "../../utils/constants";

const ItemNav = ({ name, path, icon }: NavigationLinks) => {
  return (
    <li className="text-white text-xl font-bold">
      <Link href={path}>{name}</Link>
    </li>
  );
};


export default ItemNav