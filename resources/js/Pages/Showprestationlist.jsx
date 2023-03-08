import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/react';

export default function Showprestationlist(props) {

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"><Link href="/insertprestationform" type="button" as="button" class="btn btn-block bg-secondary btn-sm">AJOUTER</Link></h3>
            <div className="card-tools">
              <div className="input-group input-group-sm" style={{ width: 200 }}>
                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
              </div>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body table-responsive p-0" style={{ height: 300 }}>
            <table className="table table-head-fixed table-hover text-nowrap">
              <thead>
                <tr>
                  <th>DATES</th>
                  <th>PHOTOC</th>
                  <th>T TEXTE</th>
                  <th>IMPRESSION</th>
                  <th>WIFI</th>
                  <th>RELIURE</th>
                  <th>AUTRES</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td><span className="tag tag-success">Approved</span></td>
                  <td>Bacon ipsum</td>
                  <td>Bacon ipsum</td>
                  <td>Bacon ipsum</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Rocky Doe</td>
                  <td>11-7-2014</td>
                  <td><span className="tag tag-danger">Denied</span></td>
                  <td>Bacon ipsum doloR</td>
                  <td>Bacon ipsum doloR</td>
                  <td>Bacon ipsum doloR</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
          <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
              <li className="page-item"><a className="page-link" href="#">«</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">»</a></li>
            </ul>
          </div>
        </div>
        {/* /.card */}
      </div>
    </div>


  );
}

Showprestationlist.layout = page => <Layout children={page} title="Showprestationlist" />