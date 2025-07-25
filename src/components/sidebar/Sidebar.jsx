import "./Sidebar.css";
import SidebarData from "./SidebarData";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((data, idx) => {
          return (
            <li key={idx} className="row">
              <div className="icon">{data.icon} </div>
              <div className="title">{data.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
