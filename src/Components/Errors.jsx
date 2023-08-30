const Errors = ({message}) => {
  return (
    <div className="pt-3 px-2">
        <p className="bg-red-800 text-center uppercase text-white p-1 rounded-sm">{message}</p>
    </div>
  )
}

export default Errors