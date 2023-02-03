import SideBarItem from "../../../../common/ui/sideBar/SideBarItem";
import SideBarListItem from "../../../../common/ui/sideBar/SideBarListItem";
import SideBarLinkListItem from "../../../../common/ui/sideBar/SideBarLinkListItem";
import SideBarGridItem from "../../../../common/ui/sideBar/SideBarGridItem";

const StatsSection = ({ stats }) => {
  return (
    <section className="flex flex-col divide-y divide-parchment">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        Stats
      </div>
      <div className="flex flex-wrap">
        {stats && (
          <>
            {stats.hp && <SideBarGridItem label={"HP"} stat={stats.hp} />}
            {stats.ac && <SideBarGridItem label={"AC"} stat={stats.ac} />}
            {stats.speed && (
              <SideBarGridItem label={"SPEED"} stat={stats.speed} />
            )}
            {stats.str && <SideBarGridItem label={"STR"} stat={stats.str} />}
            {stats.dex && <SideBarGridItem label={"DEX"} stat={stats.dex} />}
            {stats.con && <SideBarGridItem label={"CON"} stat={stats.con} />}
            {stats.int && <SideBarGridItem label={"INT"} stat={stats.int} />}
            {stats.wis && <SideBarGridItem label={"WIS"} stat={stats.wis} />}
            {stats.cha && <SideBarGridItem label={"CHA"} stat={stats.cha} />}
          </>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
