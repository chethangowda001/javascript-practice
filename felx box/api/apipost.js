let createTo = async()=>{
let option = {
    method : "post",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1001,
    })};
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let respnse = await p.json();
    return respnse;

};


const mainfun = async () => {
    let todo = await createTo();
    console.log(todo);
}


mainfun();