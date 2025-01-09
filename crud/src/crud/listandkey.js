import React from 'react'

function ListAndKey() {
    const Students = [
        {id:1,name:'imran',class:'React'},
        {id:2,name:'Raja',class:'React'},
        {id:3,name:'Kamal',class:'React'},
        {id:4,name:'Khan',class:'React'},
        {id:5,name:'Josh',class:'React'},
    ]
  return (
    <div>
        <h1>List And Keys Component </h1>
        <h1>Students Details</h1>
        {
            Students.map((student)=>{
                return(
                    <div key={student.id}>
                        <li>ID : {student.id}</li>
                        <li>Student Name : {student.name}</li>
                        <li>Student Class : {student.class}</li>
                        <hr></hr>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default ListAndKey