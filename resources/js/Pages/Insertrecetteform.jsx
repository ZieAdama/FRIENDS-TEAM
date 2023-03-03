import Layout from '@/Layouts/Layout';

export default function Insertrecetteform(props) {
    return (
          <div className="card card-info" >

            <div className="card-header" style={{backgroundColor: "#81ccc5"}}>
                <h3 className="card-title">Enregistermemt Prestation</h3>
            </div>

            <form className="form-horizontal">
              
              <div className="card-body">
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Prestation</label>
                  <div className="col-sm-10">
                    <div className="form-group">
                      <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
                        <option selected="selected">   </option>
                        <option>Photocopie</option>
                        <option>Reliure</option>
                        <option>Traitement de Texte</option>
                        <option>Impression</option>
                        <option>Wifi</option>
                        <option>Conception</option>
                        <option>Porte Cle</option>
                        <option>Scan</option>
                        <option>Autres Prestations</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Montant</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Montant" />
                  </div>
                </div>
              </div>
            
              <div className="card-footer" style={{backgroundColor: "#81ccc5"}}>
                <button type="submit" className="btn btn-info">Annuler</button>
                <button type="submit" className="btn btn-default float-right text-white">Enregistrer</button>
              </div>

            </form>
          </div>

    );
}

Insertrecetteform.layout = page => <Layout children={page} title="Insertrecetteform" />