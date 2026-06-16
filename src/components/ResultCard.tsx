export default function ResultCard(
{result}:any
){

return(

<div className="
mt-8
p-6
rounded-3xl
bg-white
dark:bg-neutral-900
shadow
">


<h2 className="text-2xl font-bold">

Ergebnis

</h2>


<p>
Score:
<b>
 {result.score} %
</b>
</p>


<p>
Nutzung:
{result.years} Jahre
</p>


<p>
Kosten pro Jahr:
{result.oldCostYear} €
</p>


<p>
Kosten pro Monat:
{result.oldCostMonth} €
</p>


<p>
Empfohlene Restnutzung:
{result.remaining} Jahre
</p>


</div>

)

}