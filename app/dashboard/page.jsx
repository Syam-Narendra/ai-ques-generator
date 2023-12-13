import Link from "next/link";
import { v4 } from "uuid";
function DashBoard() {
  const skills = [
    {
      id: v4(),
      skillName: "Java",
      bgColor: "bg-[#FFCCE6]",
      textColor: "text-[#800000]",
      hoverBg: "hover:bg-[#FF99CC]",
      hrefLink: "/start-exam/java/2",
    },
    {
      id: v4(),
      skillName: "Python",
      bgColor: "bg-[#E6E6FA]",
      textColor: "text-[#000080]",
      hoverBg: "hover:bg-[#CCCCFF]",
      hrefLink: "/start-exam/python/3",
    },
    {
      id: v4(),
      skillName: "React",
      bgColor: "bg-[#E6FAE6]",
      textColor: "text-[#008000]",
      hoverBg: "hover:bg-[#CCFFCC]",
      hrefLink: "/start-exam/react/2",
    },
    {
      id: v4(),
      skillName: "AWS",
      bgColor: "bg-[#FAE6E6]",
      textColor: "text-[#800000]",
      hoverBg: "hover:bg-[#FFCCCC]",
      hrefLink: "/start-exam/aws/3",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E6FCFF]">
      <div className="text-4xl font-bold text-[#008080] my-10">
        Welcome to DashBoard
      </div>
      <div className="grid grid-cols-2 gap-4 w-3/4">
        {skills.map((each) => (
          <Link
            key={each.id}
            className={`${each.bgColor} ${each.hoverBg} ${each.skillName} ${each.textColor} flex flex-col items-center justify-center py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-300`}
            href={each.hrefLink}
          >
            {each.skillName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
