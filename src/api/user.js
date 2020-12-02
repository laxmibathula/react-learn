export const fetchUsers = () => {
    return  new Promise( (resolve,reject) => {
        fetch('/table-data',{
            method:"GET",
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(result => {
          return resolve(result);
        })
        .catch(error =>{
            reject(error);
        })
    })
}

export const loginUser = (email,password) => {
    return  new Promise( (resolve,reject) => {
        fetch('http://localhost:8086/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
        })      
        .then((response) => {
            if(response.status == 400){
              alert("invalid user");
              e.preventDefault();
            }
            else 
            return response.json();
        })
        .then((data) =>{
            console.log(data);
            resolve(data);
        })
        .catch((error) => {
            alert("somthing went wrong");
            reject(error);	
        })
    })
}
