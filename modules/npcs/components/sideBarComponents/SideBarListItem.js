const SideBarListItem = ({ label, values }) => {
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
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarListItem;
