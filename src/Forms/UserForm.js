import React,{useRef,useState} from 'react'

function UserForm() {
    const name=useRef();
    const age=useRef();
    const [nameError,setNameError]=useState("");
    const [ageError,setAgeError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("Submit Button Clicked");
        console.log(name.current.value);
        console.log(age.current.value);

        if(!name.current.value){
            setNameError("Name field is required");
        }
        else if(name.current.value.length>20){
            setNameError("Name should be less than 20 characters");
        }
        else if(name.current.value.length<5){
            setNameError("Name should be greater than 5 characters");
        }
    }

    return (
        <div>
            <div>User Form</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" ref={name} type="text"/>
                    <div style={{color:"red"}}>{nameError}</div>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input id="age" ref={age} type="number"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
