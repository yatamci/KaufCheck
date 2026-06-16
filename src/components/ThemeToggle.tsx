"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle(){

const {theme,setTheme}=useTheme()

return (

<button

onClick={() =>
setTheme(theme === "dark" ? "light" : "dark")
}

className="
px-4 py-2
rounded-xl
bg-neutral-200
dark:bg-neutral-800
"

>

🌙 / ☀️

</button>

)

}