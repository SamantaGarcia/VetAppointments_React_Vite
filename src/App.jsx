import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientsList from "./Components/PatientsList"
import { useState, useEffect } from "react"
function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []); //Obtain local storage. Mantain content when refresh
  const [patient, setPatient] = useState([]);

  //Local Storage. Execute it every time patients has a change
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))
  }, [patients])

  const deletePatient = id => {
    //delete patients and show the rest
    const deletedPatients = patients.filter(del => del.id !== id)
    setPatients(deletedPatients)
  }

  return (    
    <div>
       <div className="grid md:grid-cols-2">
          <div className="bg-slate-200"><Header/></div>
       </div>

      <div className="grid md:grid-cols-2">
          <div className="bg-slate-200">         
            <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
          </div>
          <div>
            <PatientsList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
          </div>
      </div>          
    </div>
  )
}

export default App
