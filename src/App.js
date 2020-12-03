import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Citas'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = []
  }

  const [citas, citasSave] = useState(citasIniciales)

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])


  const citasCreate = cita => {
    citasSave([
      ...citas,
      cita
    ])

  }
  const eliminarCitas = id => {

    let nuevasCitas = citas.filter(cita => cita.id !== id)
    citasSave(nuevasCitas)
  }

  const titulo = citas.length === 0 ? 'No hay citas para mostrar' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>
        Administracion de pacientes
      </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              citasCreate={citasCreate}
            />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCitas={eliminarCitas}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
