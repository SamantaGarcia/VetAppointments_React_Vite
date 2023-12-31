import Patient from "./Patient"

const PatientsList = ({patients, setPatient, deletePatient}) => {
  return (
    <div>
      {patients && patients.length ? (
        <>
        <p className="text-lg text-center my-5 subTitle font-bold uppercase"> List of Appointments</p>
          <div className="DivWithScroll grid md:grid-cols-2 xl:grid-cols-3 gap-2">
            { patients.slice(0).reverse().map( (patient)=> (
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
        <p className="text-lg text-center my-5 subTitle font-bold uppercase"> There are no Appointments</p>
        )}
      
    </div>
  )
}

export default PatientsList