import Link from "next/link";

const SideBarLinkListItem = ({ label, values }) => {
  return (
    <div className="flex flex-row justify-between gap-2 overflow-hidden p-2">
      <h3 className="font-bold basis-25.5 leading-normal">{label}</h3>
      <div className="basis-44 w-44 ml-4">
        <ul className="list-disc flex flex-col gap-1">
          {values.map((value, index) => (
            <li
              className="break-words font-semibold leading-normal"
              key={index}
            >
              <Link
                href={value.route}
                className="text-blue-600 hover:underline hover:text-blue-400"
              >
                {value.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarLinkListItem;
