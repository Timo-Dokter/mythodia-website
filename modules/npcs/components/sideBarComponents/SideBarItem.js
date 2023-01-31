const SideBarItem = ({ label, value }) => {
  return (
    <div className="flex flex-row justify-between gap-2 overflow-hidden p-2">
      <h3 className="font-bold basis-25.5 leading-normal">{label}</h3>
      <div className="basis-44 w-44">
        <p className="break-words font-semibold leading-normal">{value}</p>
      </div>
    </div>
  );
};

export default SideBarItem;
