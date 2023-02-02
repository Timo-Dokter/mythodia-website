import Link from "next/link";

const ItemLinks = ({ items }) => {
  return items.map((item, index) => (
    <li key={item.name}>
      <Link
        href={item.route}
        className="truncate text-blue-600 hover:underline hover:text-blue-400"
      >
        {item.name}
      </Link>
    </li>
  ));
};

export default ItemLinks;
