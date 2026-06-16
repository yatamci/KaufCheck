import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";


export default function Home(){


return(

<main className="
min-h-screen
p-8
bg-neutral-100
dark:bg-black
">


<div className="max-w-xl mx-auto">


<div className="flex justify-between">

<h1 className="
text-4xl
font-bold
">

KaufCheck

</h1>


<ThemeToggle/>


</div>



<p className="
mt-4
text-neutral-600
dark:text-neutral-400
">

Berechne, wann sich eine Neuanschaffung wirklich lohnt.

</p>


<Calculator/>


</div>

</main>

)

}