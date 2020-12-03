import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({ cita, eliminarCitas }) => {
    const { mascota, propietario, fecha, hora, sintomas } = cita
    return (
        <div className="cita">
            <p>Mascota: <span> {mascota}</span> </p>
            <p>Propietario: <span>{propietario}</span> </p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora:  <span>{hora}</span> </p>
            <p>Sintomas: <span>{sintomas}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCitas(cita.id)}
            >
                Eliminar &times;
            </button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCitas: PropTypes.func.isRequired
}
export default Cita;