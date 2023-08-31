const Patient = ({patient, setPatient, deletePatient}) => {
  const {petName, ownerName, ownerEmail, apptDate, desc, id } = patient
  const handleDelete = () =>{
    const response = confirm('Are you sure you want to delete this appointment?')
    if (response){
      deletePatient(id)
    }
  }
  return (
    
    <div className="h-fit mb-5 mx-5 p-3 shadow-lg rounded-md bg-white">   
      <div>     
        <p className="font-bold mb-3 normalText">Pet Name: {''}
        <span className="font-normal normal-case text-gray-500">{petName}</span>
        </p>        

        <p className="font-bold mb-3 normalText">Owner Name: {''}
        <span className="font-normal normal-case text-gray-500">{ownerName}</span>
        </p> 

        <p className="font-bold mb-3 normalText">Email: {''}
        <span className="font-normal normal-case text-gray-500">{ownerEmail}</span>
        </p> 

        <p className="font-bold mb-3 normalText">Appointment Date: {''}
        <span className="font-normal normal-case text-gray-500">{apptDate}</span>
        </p> 

        <p className="font-bold mb-3 normalText">Description: {''}
        <span className="font-normal normal-case text-gray-500">{desc}</span>
        </p> 
      </div>  
      <div className="flex flex-row-reverse">
          <button
            type="button"
            className="px-3 py-1 m-1 warning text-white font-bold rounded-md uppercase"          
            onClick={()=> setPatient(patient)}
          >Edit</button>
          <button
            type="button"
            className="px-3 py-1 m-1 delete text-white font-bold rounded-md uppercase" 
            onClick={handleDelete}         
          >Delete</button>
      </div> 
    </div>
  )
}

export default Patient