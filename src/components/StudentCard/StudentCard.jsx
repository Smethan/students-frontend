

const StudentCard = (props) => {

    const {name, email, id} = props.studentObj

  return (

    <div>
          <h2>Name: {name}</h2>
          <p>Email: {email}</p>
          <p>ID: {id}</p>
    </div>

  )
}

export default StudentCard;