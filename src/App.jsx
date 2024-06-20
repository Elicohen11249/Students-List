import { StudentsList } from "./components/SetStudents"
import { useState } from 'react'
import { classA } from "./components/ClassA"
import { classB } from "./components/ClassB"




function App() {
  let [listType, setListType] = useState()
  let [classType, setClassType] = useState(classA)


  return (
    <>
      <button onClick={() => { setClassType(classType = classA) }}>Class A</button>
      <button onClick={() => { setClassType(classType = classB) }}>Class B</button><br></br>
      {classType.map((student, index) => { return <StudentsList key={index} name={student.name} score={student.score} list={listType} /> })}
      <button onClick={() => { setListType(listType = 0) }}>All Students</button>
      <button onClick={() => { setListType(listType = 1) }}> score: 100+</button>
    </>
  )
}

export default App
