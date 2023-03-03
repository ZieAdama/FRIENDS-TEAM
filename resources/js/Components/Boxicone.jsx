
export default function Boxicone(params) {
    return(
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon elevation-1" style={{backgroundColor: "#81ccc5"}}><i className="fas fa-cog"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Photocopies</span>
                <span className="info-box-number">
                  10 000
                  <small>F</small>
                </span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon elevation-1" style={{backgroundColor: "#81ccc5"}}><i className="fas fa-thumbs-up"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">RELIURE</span>
                <span className="info-box-number">41 410<small>F</small> </span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}

          {/* <!-- fix for small devices only --> */}
          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon elevation-1" style={{backgroundColor: "#81ccc5"}}><i className="fas fa-shopping-cart"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">WIFI</span>
                <span className="info-box-number">76 000<small>F</small></span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon elevation-1" style={{backgroundColor: "#81ccc5"}}><i className="fas fa-users"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Autres Prestations</span>
                <span className="info-box-number">200 000<small>F</small></span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
    )
}