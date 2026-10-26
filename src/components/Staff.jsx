
//props- Props are used to pass information into a component

function Staff(props) {
    return (
        <>
       <div className='staff'>
                <img src={props.img} alt="" />
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.course}</p>
       </div>
        </>
    )
}

export default Staff;