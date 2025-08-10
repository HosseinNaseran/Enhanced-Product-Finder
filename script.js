let container = document.querySelector(".container")
let search = document.querySelector("input");
let result =  document.querySelector(".result");
let body = document.querySelector("body")
let favorite = document.querySelector(".favorite")
let button = document.querySelector("button").addEventListener("click" ,() => {
    
    if (search.value === "") {
        alert("چیزی وارد کن");
    }
    else if (!search.value === Number) {
    alert("عدد وارد کن");
    }
    
    
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${search.value}`)
    .then(response => response.json())
    .then(data => {
        
        // let post = document.createElement("div");
        
        //     post.className = "post";
        //   post.textContent = data
        
        // let post = result.createElement("div");
        // post.className ="post";
        // post.textContent = data 
        //result = document.createElement("p")
        
        
        // let post = ""
        // for (let index in data) {
            //      post += data[index] + "";
            
            // }
            // result.innerHTML = post
            
            // console.log(post)
            
            let  value =  Object.values(data[0]);
            let  keys = Object.keys(data[0])
                  //                      Inner Html              //
            
            // result.innerHTML =  "<h4>" + keys[0] + " : " + value[0] +  "</h4>"  +
            // "<h4>" + keys[1] + " : " + value[1] + "</h4>" +
            // "<h4>" + keys[2] + " : " + value[2] + "</h4>" +
            // "<h4>" + keys[3] + " : " + value[3] + "</h4>" +
            // "<a>"  +"افزودن به علاقمندی ها" +   "</a>"





               //                  Create Element                    //  

            let post = document.createElement("div");
            post.className = "post";
            post.textContent = keys[0] + " : " + value[0] + '\n' +
            keys[1] + " : " + value[1] +  '\n' +
            keys[2] + " : " + value[2] +  '\n' +
            keys[3] + " : " + value[3] ;


            result.prepend(post);
            







               //                log                //
            
            console.log(keys[0] +":" + value[0] , '\n' ,
                keys[1] + ":" + value[1],'\n' ,
                keys[2] + ":" + value[2],'\n' ,
                keys[3] + ":" + value[3],'\n' 
            );



            



 
    //    let a = document.querySelector("a");
    let a = document.createElement("a");
     result.prepend(a)
     a.textContent = "افزودن به علاقه مندی ها"
        a.onclick =()=> {
            alert("افزوده شد");
            let favoritePost = document.createElement("div");
            favoritePost.textContent = keys[1]+" : "+value[1];
           favorite.prepend(favoritePost)
           favoritePost.className = "favorite-post"
           
           let close = document.createElement("span")
           close.className = "close"
           close.textContent = "\u2715"
           favoritePost.prepend(close)
           close.onclick=()=>{
            favoritePost.remove();
           }
        }


       




  
   

        

    })
    .catch(error => console.error(error))
    
 })
 
 // button.onclick = function () {   
//     fetch(`https://jsonplaceholder.typicode.com/posts?id=${search.value}`)
//     .then(response => response.json())
//     .then(data => {
//         let post = document.createElement("div")
//         post.textContent = data;
    
    
    
//     })
//      .catch(error => console.error(error))
// }

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))