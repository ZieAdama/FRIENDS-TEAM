import Layout from '@/Layouts/Layout';
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Insertprestationform(props) {

    const [values, setValues] = useState({
        photocopie: "",
        wifi: "",
        traitement_texte: "",
        reliure: "",
        impression: "",
        autres_prestations: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/storeprestationdata', values)
    }

    return (
        <form onSubmit={handleSubmit}>
            @csrf
            <section className="content">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-secondary">
                            <div className="card-header">
                                <h3 className="card-title">ENREGISTREMENT</h3>
                            </div>
                            <div className="card-body">
                                <Input id="photocopie" label="PHOTOCOPIE" values={values} handleChange={handleChange} />
                                <Input id="wifi" label="WIFI" values={values} handleChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-secondary">
                            <div className="card-header">
                                <h3 className="card-title">PRESTATIONS</h3>
                            </div>
                            <div className="card-body">
                                <Input id="traitement_texte" label="TRAITEMENT TEXTE" values={values} handleChange={handleChange} />
                                <Input id="reliure" label="RELIURE" values={values} handleChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-secondary">
                            <div className="card-header">
                                <h3 className="card-title">PRESTATIONS</h3>
                            </div>
                            <div className="card-body">
                                <Input id="impression" label="IMPRESSION" values={values} handleChange={handleChange} />
                                <Input id="autres_prestations" label="AUTRES PRESTATIONS" values={values} handleChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-secondary float-right bg-secondary" type="submit">ENREGISTRER</button>
                    </div>
                </div>
            </section>
        </form>

    );
}


function Input({ id, label, values, handleChange }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input placeholder="Montant" type="number" id={id} value={values.id} onChange={handleChange} className="form-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" />
        </div>
    )
}


Insertprestationform.layout = page => <Layout children={page} title="Insertprestationform" />