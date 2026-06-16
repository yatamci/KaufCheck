import Calculator from "@/components/Calculator"
import ThemeToggle from "@/components/ThemeToggle"


export default function Home(){


return(

<main className="
min-h-screen
bg-gradient-to-br
from-neutral-100
to-neutral-300
dark:from-black
dark:to-neutral-900
p-6
">


<div className="
max-w-xl
mx-auto
">


<div className="
flex
justify-between
items-center
">

<h1 className="
text-5xl
font-bold
tracking-tight
">

KaufCheck

</h1>


<ThemeToggle/>


</div>



<p className="
mt-5
text-xl
opacity-70
">

Berechne, wann sich eine Neuanschaffung wirklich lohnt.

</p>


<div className="mt-10 glass rounded-[35px] p-6">

<Calculator/>

</div>


</div>


</main>

)

}