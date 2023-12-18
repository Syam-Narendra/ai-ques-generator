
// import LogoutIcon from "../../assets/icons/logout.svg";
'use client'
import Link from 'next/link'
import "./styles.css";
function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <h1 className="sidebar-item-label">iTalent Members</h1>
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            <Link href="/search-members" className="sidebar-item-active">
              <span className="sidebar-item-label">Members Search</span>
            </Link>
          </div>

          <div className="sidebar-footer">
            <span className="sidebar-item-label">Logout</span>
            <img
            //   src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
