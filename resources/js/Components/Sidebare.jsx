import { Link } from '@inertiajs/react'

export default function Sidebare(props) {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

      <a href="index3.html" className="brand-link">
        <img src="AdminLTE/dist/img/FRIENDSTEAM.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8", }} />
        <span className="brand-text font-weight-light">FRIENDS TEAM</span>
      </a>

      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="AdminLTE/dist/img/userprofile.png" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">User Profile</a>
          </div>
        </div> */}

        {/* <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div> */}

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <Item libelle="ACCUEIL" lien="/dashboard" icon="A" />

            <Item libelle="PRESTATIONS" lien="/showprestationlist" icon="P" />

            <Item libelle="DEPENSES" lien="/showdepenselist" icon="D" />
          </ul>
        </nav>
      </div>
    </aside>
  )
}

function Item({ libelle, lien, icon }) {
  return (
    <li className="nav-item">
      <Link href={lien} className="nav-link">
        <i className="nav-icon fas fa-th"></i>
        <p>
          {libelle}
          <span className="right badge badge-danger">{icon}</span>
        </p>
      </Link>
    </li>
  )
}