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
       <div className="grid md:grid-cols-3">
          <div className="bgColor md:col-span-1"><Header/></div>
          <div className="bg-slate-50 md:col-span-2"></div>
       </div>

      <div className="grid md:grid-cols-3">
          <div className="bgColor h-screen">         
            <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
          </div>
          <div className="md:col-span-2 bg-slate-50">
            <PatientsList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
          </div>
      </div>   

    </div>
  )
}

export default App
