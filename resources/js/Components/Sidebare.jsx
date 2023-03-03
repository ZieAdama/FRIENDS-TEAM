import { Link } from '@inertiajs/react'

export default function Sidebare(props) {

    return (   
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Main Sidebar Container --> */}
  {/* <!-- Brand Logo --> */}
  <a href="index3.html" className="brand-link">
    <img src="AdminLTE/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity:".8", }} />
    <span className="brand-text font-weight-light">FRIENDS TEAM</span>
  </a>

  {/* <!-- Sidebar --> */}
  <div className="sidebar">
    {/* <!-- Sidebar user panel (optional) --> */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="AdminLTE/dist/img/userprofile.png" className="img-circle elevation-2" alt="User Image" /> 
      </div>
      <div className="info">
        <a href="#" className="d-block">User Profile</a>
      </div>
    </div>

    {/* <!-- SidebarSearch Form --> */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Sidebar Menu --> */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link href="/dashboard" className="nav-link">
            <i className="nav-icon fas fa-th"></i>
            <p>
              ACCUEIL
              <span className="right badge badge-danger">A</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</aside>
    )
}