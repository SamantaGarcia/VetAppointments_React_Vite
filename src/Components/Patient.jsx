import {LuPencil, LuTrash2} from "react-icons/lu"
const Patient = ({patient, setPatient, deletePatient}) => {
  const {petName, ownerName, ownerEmail, apptDate, desc, id } = patient

  const handleDelete = () =>{
    const response = confirm('Are you sure you want to delete this appointment?')
    if (response){
      deletePatient(id)
    }
  }
  return (

    <div className="h-fit mb-5 mx-5 shadow-lg rounded-md bg-white border">
      <div className="p-3 grid-rows-4">
        <div className="grid grid-cols-3">
          <span className="normalText text-gray-700 font-semibold col-span-2 capitalize">{petName}</span>
          <span className="rounded-md text-center border dateBg font-semibold">{apptDate}</span>
        </div>
        <div className="font-normal normalText capitalize">{ownerName}</div>
        <div className="font-normal text-gray-400">{ownerEmail}</div>
        <div className="pt-2 font-normal text-gray-500">{desc}</div>
      </div>

      <div className="grid grid-cols-2">
        <div className="border-t-2 border-r-2 px-3 py-2 font-semibold text-center cursor-pointer" type="button" onClick={()=> setPatient(patient)}><LuPencil className="icon mr-1" />Edit</div>
        <div className="border-t-2 px-3 py-2 font-semibold text-center cursor-pointer"type="button" onClick={handleDelete} ><LuTrash2 className="icon mr-1" />Delete</div>
      </div>
    </div>
  )
}

export default Patient