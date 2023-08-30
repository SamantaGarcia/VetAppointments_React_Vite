import { useState, useEffect } from "react"
import Errors from "./Errors"

const Form = ({patients, setPatients, patient, setPatient}) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(false);

  //useEffect for edit patient
  useEffect(()=> {
    if( Object.keys(patient).length > 0){
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setOwnerEmail(patient.ownerEmail)
      setApptDate(patient.apptDate)
      setDesc(patient.desc)
    }
  }, [patient])
  
  const generateId = () => {
    const randomNum = Math.random().toString(36).substring(2)
    const randomDate = Date.now().toString(36)
    return randomNum+randomDate
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validating
    if([petName, ownerName, ownerEmail, apptDate, desc].includes('')){
      setError(true)
      return;
    }
      setError(false)

      //Patient object
      const patientObj ={
        petName, 
        ownerName, 
        ownerEmail, 
        apptDate, 
        desc
      }

      if(patient.id){
        //Editing item
        patientObj.id = patient.id
        const updatePatient = patients.map(patientState => patientState.id ===
          patient.id ? patientObj : patientState)
          setPatients(updatePatient)
          setPatient({})
      }else{
        //Creating item
        patientObj.id = generateId()
        setPatients([...patients, patientObj]);
      }

      

      //Clean form
      setPetName('')
      setOwnerName('')
      setOwnerEmail('')
      setApptDate('')
      setDesc('')
    
  }
  return (
    <div>
      <p className="text-lg my-5 text-center subTitle font-bold uppercase"> Create new appointment</p>
      <form onSubmit={handleSubmit} className="bg-white m-3 shadow-md rounded-lg">
        { error && (
            <Errors message='Please fill in all fields' />
        )}
        <div className="p-2">
          <label htmlFor="petName" className="block normalText font-bold p-1">Pet Name</label>
          <input 
          id="petName" 
          type="text" 
          className="border-2 w-full p-1 text-gray-500 rounded-md" 
          placeholder="Pet Name" 
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="p-2">
          <label htmlFor="ownerName" className="block normalText font-bold p-1">Owner Name</label>
          <input 
          id="ownerName" 
          type="text" 
          className="border-2 w-full p-1 text-gray-500 rounded-md" 
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) =>setOwnerName(e.target.value)}
          />
        </div>

        <div className="p-2">
          <label htmlFor="email" className="block normalText font-bold p-1">Email</label>
          <input 
          id="email" 
          type="email" 
          className="border-2 w-full p-1 text-gray-500 rounded-md" 
          placeholder="Owner Email" 
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
          />
        </div>

        <div className="p-2">
          <label htmlFor="appointmentDate" className="block normalText font-bold p-1">Appointment Date</label>
          <input 
          id="appointmentDate" 
          type="date" 
          className="border-2 w-full p-1 text-gray-500 rounded-md" 
          value={apptDate}
          onChange={(e) => setApptDate(e.target.value)}
          />
        </div>

        <div className="p-2">
          <label htmlFor="description" className="block normalText font-bold p-1">Description</label>
          <textarea 
          id="description" 
          className="border-2 w-full p-1 text-gray-500 rounded-md" 
          placeholder="Symptoms, purpose of visit, etc" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          />

        </div>
        <div className="p-2">
          <input type="submit" className="secondary w-full p-1 rounded-lg text-white uppercase font-bold cursor-pointer" value={patient.id ? 'Edit Appointment' : 'Create Appointment'}/>       
        </div>
      </form>
    </div>
  )
}

export default Form
