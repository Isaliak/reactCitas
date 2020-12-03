import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({ citasCreate }) => {

    const [cita, citaUpdate] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })
    const [error, errorUpdate] = useState(false)

    const { mascota, propietario, fecha, hora, sintomas } = cita
    const stateUpdate = (e) => {
        citaUpdate({
            ...cita,
            [e.target.name]: e.target.value,

        })
    }

    const submitForm = (e) => {

        e.preventDefault()

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            console.log('estan vacios')
            errorUpdate(true)
            return
        } else {
            errorUpdate(false)
        }
        //asignar id
        cita.id = uuid()
        //crear cita
        citasCreate(cita)
        //reiniciar el form
        citaUpdate({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error ? <p className="alerta-error">Debe llenar todos los campos</p> : null
            }
            <form action=""
                onSubmit={submitForm}
            >
                <label htmlFor="">
                    Nombre Mascota
                </label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={stateUpdate}
                    value={mascota}
                />
                <label htmlFor="">
                    Nombre dueño de la mascota
                </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={stateUpdate}
                    value={propietario}
                />
                <label htmlFor="">
                    Fecha
                </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={stateUpdate}
                    value={fecha}
                />
                <label htmlFor="">
                    Hora
                </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={stateUpdate}
                    value={hora}
                />
                <label htmlFor="">
                    Sintomas
                </label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={stateUpdate}
                    value={sintomas}
                >

                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>


        </Fragment>
    )
}


Formulario.propTypes = {
    citasCreate: PropTypes.func.isRequired
}


export default Formulario;