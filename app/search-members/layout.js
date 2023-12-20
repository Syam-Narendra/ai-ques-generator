"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const sideBarButtons = [
  { id: 1, link: "/search-members", text: "Search Team" },
  { id: 2, link: "/search-members/saved-projects", text: "Saved Projects" },
];

function SideBar({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex  flex-col md:flex-row">
      <div className="md:flex md:flex-col md:w-52 justify-center p-1  flex-row items-center w-screen max-h-full">
        {sideBarButtons.map((each) => {
          const activeClass =
            each.link === pathname ? "text-white" : "text-gray-600";
          return (
            <Link
              key={each.id}
              href={each.link}
              className={`${activeClass} w-full mb-5 font-bold py-2 px-4 rounded`}
            >
              {each.text}
            </Link>
          );
        })}
      </div>
      <div className="w-screen bg-customBlack">{children}</div>
    </div>
  );
}

export default SideBar;
