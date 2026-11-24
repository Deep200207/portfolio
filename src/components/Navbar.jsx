import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deepak-roy-18547a296/", Icon: FaLinkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/royannu149/", Icon: SiLeetcode },
  { label: "GitHub", href: "https://github.com/Deep200207", Icon: FaGithub },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          Deepak
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-xl">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               aria-label={label} className="text-muted transition-colors hover:text-accent">
              <Icon />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;