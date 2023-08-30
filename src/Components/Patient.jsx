const Patient = ({patient, setPatient, deletePatient}) => {
  const {petName, ownerName, ownerEmail, apptDate, desc, id } = patient
  const handleDelete = () =>{
    const response = confirm('Are you sure you want to delete this appointment?')
    if (response){
      deletePatient(id)
    }
  }
  return (
    
    <div className="mb-5 mx-5 p-3 shadow-md border-2 rounded-md grid grid-cols-2">   
      <div>     
        <p className="font-bold mb-3 text-sky-700">Pet Name: {''}
        <span className="font-normal normal-case text-gray-700">{petName}</span>
        </p>        

        <p className="font-bold mb-3 text-sky-700">Owner Name: {''}
        <span className="font-normal normal-case text-gray-700">{ownerName}</span>
        </p> 

        <p className="font-bold mb-3 text-sky-700">Email: {''}
        <span className="font-normal normal-case text-gray-700">{ownerEmail}</span>
        </p> 

        <p className="font-bold mb-3 text-sky-700">Appointment Date: {''}
        <span className="font-normal normal-case text-gray-700">{apptDate}</span>
        </p> 

        <p className="font-bold mb-3 text-sky-700">Description: {''}
        <span className="font-normal normal-case text-gray-700">{desc}</span>
        </p> 
      </div>  
      <div>
          <button
            type="button"
            className="px-3 py-1 m-1 bg-yellow-500 text-white font-bold rounded-md uppercase"          
            onClick={()=> setPatient(patient)}
          >Edit</button>
          <button
            type="button"
            className="px-3 py-1 m-1 bg-red-600 text-white font-bold rounded-md uppercase" 
            onClick={handleDelete}         
          >Delete</button>
      </div> 
    </div>
  )
}

export default Patient