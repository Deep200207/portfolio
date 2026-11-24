import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";

const skills = [
  { name: "React", Icon: FaReact, color: "text-sky-400" },
  { name: "JavaScript", Icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", Icon: SiExpress, color: "text-fg" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
  { name: "Tailwind CSS", Icon: RiTailwindCssLine, color: "text-cyan-400" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "Java", Icon: FaJava, color: "text-red-400" },
  { name: "Python", Icon: FaPython, color: "text-blue-400" },
];

export default function Technologies() {
  return (
    <section id="skills" className="grid gap-8 border-t border-line py-20 lg:grid-cols-[1fr_2fr]">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map(({ name, Icon, color }) => (
          <li key={name}
              className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 transition-colors hover:border-accent/60">
            <Icon className={`text-2xl ${color}`} aria-hidden="true" />
            <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}