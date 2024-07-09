let p = fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml");
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.header);
    return response.json;
}).then((value2)=>{
    return value2;
})

setTimeout(()=>{
    console.log(p);
},2000)

// post down code 

// let option = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1001,
//     })
// };

// fetch('https://jsonplaceholder.typicode.com/posts', option)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
