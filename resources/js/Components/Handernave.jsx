import { Link } from '@inertiajs/react'


export default function Handernave(params) {
    return(
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">AUJOURD'HUI: 03 MARS 2023</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <td>
                            <Link type="button" href="/insertrecette" as="button" style={{backgroundColor: "#81ccc5"}} className="btn btn-block btn-default btn-lg text-white">Prestations</Link>
                        </td>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}