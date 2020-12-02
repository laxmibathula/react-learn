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
              e.preventDefault();
               return "login failed";
            }
            else 
               return response.json();
        })
        .then((data) =>{
            const userObject = data[0];
            console.log("userObject",userObject);
            resolve(userObject);
        })
        .catch((error) => {
            reject(error);	
        })
    })
}
