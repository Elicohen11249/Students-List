import './SetStudents.css'


export function StudentsList(props) {

    return <>
        {  

            (props.list==0) ?
                <p className='best'> Student {props.name}, score :{props.score} </p> :(props.score<=99 )?<></>: 
                <p className='good'> Student {props.name}, score : {props.score}</p>
        }
       

    </>
}
