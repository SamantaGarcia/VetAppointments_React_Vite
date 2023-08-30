import Patient from "./Patient"

const PatientsList = ({patients, setPatient, deletePatient}) => {
  return (
    <div className="h-screen">
      {patients && patients.length ? (
        <>
        <p className="text-lg text-center my-5 text-sky-700 font-bold uppercase"> List of Appointments</p>
      <div className="overflow-y-scroll">
        { patients.map( (patient)=> (
            <Patient
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            deletePatient={deletePatient}
            />
          ))}        
      </div>
        </>
      ): (
        <p className="text-lg text-center my-5 text-sky-700 font-bold uppercase"> There are no Appointments</p>
        )}
      
    </div>
  )
}

export default PatientsList