
function App() {
// JS code goes here. Before the return
const text = 'Hi World'
  return (    
     <>
      {/* Everything here needs to be HTML or JS Expressions using {} */}     
      {/* <> </> This is known as fragment */}
      <h1>{text.toUpperCase()}</h1>
      <input type="text" />
    </>
  )
}

export default App

/* to construct a function automatically you can use the next abreviations:
rafce -> arrow function
rfce -> function
see ES7 extension for more abreviations
*/
