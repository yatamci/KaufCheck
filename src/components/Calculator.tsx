"use client"

import {useState} from "react"
import categories from "@/data/categories.json"
import {calculateScore} from "@/lib/calculator"
import ResultCard from "./ResultCard"


export default function Calculator(){

const list =
Object.keys(categories).sort(
(a,b)=>a.localeCompare(b)
)


const [search,setSearch]=useState("")
const [selected,setSelected]=useState("")

const [data,setData]=useState({
price:"",
date:"",
newPrice:""
})


const [result,setResult]=useState<any>()


const filtered =
list.filter(x=>
x.toLowerCase()
.includes(search.toLowerCase())
)



function reset(){

setSearch("")
setSelected("")
setData({
price:"",
date:"",
newPrice:""
})

setResult(undefined)

}


return(

<div className="space-y-5 mt-10">


<div className="relative">

<input

placeholder="Kategorie suchen..."

value={search}

onChange={
e=>{
setSearch(e.target.value)
setSelected("")
}
}

className="glassInput"

/>


{
search && !selected &&

<div className="
absolute
z-10
w-full
mt-2
glass
rounded-3xl
overflow-hidden
">

{
filtered.map(item=>(

<button

key={item}

onClick={()=>{

setSelected(item)
setSearch(item)

}}

className="
block
w-full
text-left
px-5
py-3
hover:bg-white/20
"

>

{item}

</button>

))

}

</div>

}


</div>



<input

placeholder="Alter Kaufpreis (€)"

className="glassInput"

value={data.price}

onChange={
e=>setData({
...data,
price:e.target.value
})
}

/>


<label className="text-sm opacity-70">

Kaufdatum

</label>


<input

type="date"

className="glassInput"

value={data.date}

onChange={
e=>setData({
...data,
date:e.target.value
})
}

/>



<input

placeholder="Preis neues Gerät (€)"

className="glassInput"

value={data.newPrice}

onChange={
e=>setData({
...data,
newPrice:e.target.value
})
}

/>



<div className="flex gap-3">


<button

className="mainButton"

onClick={()=>{


const life =
categories[selected as keyof typeof categories]


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

className="secondButton"

onClick={reset}

>

Neu starten

</button>


</div>



{
result &&
<ResultCard result={result}/>
}


</div>

)

}