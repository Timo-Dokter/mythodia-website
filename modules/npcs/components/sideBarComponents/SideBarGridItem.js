const SideBarGridItem = ({ label, stat }) => {
  return (
    <div className="w-1/3 p-3 flex flex-col border border-parchment gap-1">
      <h6 className="text-center font-bold">{label}</h6>
      <span className="text-center">{stat}</span>
    </div>
  );
};

export default SideBarGridItem;
