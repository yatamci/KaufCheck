"use client"


import {useState} from "react";

import categories from "@/data/categories.json";

import {calculateScore}
from "@/lib/calculator";

import ResultCard
from "./ResultCard";


export default function Calculator(){


const [result,setResult]=useState<any>();


const [data,setData]=useState({

category:"Smartphone",
price:"",
date:"",
newPrice:""

});


function reset(){

setData({

category:"Smartphone",
price:"",
date:"",
newPrice:""

})

setResult(undefined)

}



return(

<div>


<select

className="input"

value={data.category}

onChange={
e=>setData({
...data,
category:e.target.value
})
}

>

{
Object.keys(categories)
.map(x=>

<option key={x}>
{x}
</option>

)

}

</select>



<input
placeholder="Alter Kaufpreis"
className="input"
value={data.price}

onChange={
e=>setData({
...data,
price:e.target.value
})
}
/>



<input

type="date"

className="input"

value={data.date}

onChange={
e=>setData({
...data,
date:e.target.value
})
}

/>



<input

placeholder="Preis neues Gerät"

className="input"

value={data.newPrice}

onChange={
e=>setData({
...data,
newPrice:e.target.value
})
}

/>



<button

className="
mt-4
bg-black
text-white
px-6
py-3
rounded-2xl
"

onClick={()=>{


const life =
categories[
data.category as keyof typeof categories
]


setResult(

calculateScore(

Number(data.price),

data.date,

Number(data.newPrice),

life

)

)


}}

>

Ergebnis berechnen

</button>



<button

onClick={reset}

className="
ml-3
px-6
py-3
rounded-2xl
border
"

>

Neu starten

</button>



{
result &&
<ResultCard result={result}/>

}


</div>

)

}