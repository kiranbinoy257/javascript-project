async function getData(){


    const res=await fetch("https://dummyjson.com/products")
    console.log(res);
    const data=await res.json()
    console.log(data);

    str=``
    data.products.map((product)=>{
       str+=`   <div class="col-lg-3 col-md-4 col-sm-6 my-3">
       <div class="card" style="width: 18rem;">
          <div class="image"> <img src=${product.thumbnail} class="card-img-top" alt="..."></div>
           <div class="card-body">
             <h5 class=${product.title}>${product.title.substring(0,20)}</h5>
             <h6 class=${product.price}> Price ${product.price}</h6>
             
             
             <a href="../pages/detail.html?id=${product.id}" class="btn btn-primary">Details</a>
           </div>
         </div>
   </div>`
    })

    document.getElementById("list").innerHTML=str
}


getData()