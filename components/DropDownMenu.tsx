import Link from "next/link"


function DropDownMenu({links, divider}: {links: string[], divider: boolean}) {
    
  return (
    <ul className="*:hover:text-[#A68547] w-2/3 space-y-3 cursor-pointer">
        {links.map((title, i)=>(
            <li key={i}>
                <Link href={`/${title.replace(/ /g, "-")}`}>
                    {title}
                </Link>
                {i<links.length-1&&divider?<hr className="text-white my-4" />:<></>}
            </li>
        ))}
    </ul>
  )
}

export default DropDownMenu