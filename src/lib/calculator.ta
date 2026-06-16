export function calculateScore(
price:number,
date:string,
newPrice:number,
life:number
){

const bought =
new Date(date);

const now =
new Date();


const years =
(now.getTime()-bought.getTime())
/31557600000;


const oldCostYear =
price / years;


const newCostYear =
newPrice / life;


const efficiency =
oldCostYear /
(oldCostYear+newCostYear)
*100;


const usage =
Math.min(years/life,1);


const score =
Math.round(efficiency*usage);



return {

years:years.toFixed(1),

oldCostYear:
oldCostYear.toFixed(2),

oldCostMonth:
(oldCostYear/12).toFixed(2),

newCostYear:
newCostYear.toFixed(2),

score,

remaining:
Math.max(
life-years,
0
).toFixed(1)

};

}