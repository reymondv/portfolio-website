import { BsFiletypeScss } from "react-icons/bs";
import { FaAws } from "react-icons/fa6";
import {
  RiCss3Fill,
  RiFirebaseFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiCircleci,
  SiDatadog,
  SiDocker,
  SiGit,
  SiGo,
  SiLinear,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRemix,
  SiRuby,
  SiRubyonrails,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export default function RenderIcon({ name }: { name: string }) {
  switch (name) {
    case "react":
      return <RiReactjsFill className="w-11 h-11" />;
    case "tailwind":
      return <RiTailwindCssFill className="w-11 h-11" />;
    case "typescript":
      return <SiTypescript className="w-11 h-11" />;
    case "javascript":
      return <RiJavascriptFill className="w-11 h-11" />;
    case "html":
      return <RiHtml5Fill className="w-11 h-11" />;
    case "css":
      return <RiCss3Fill className="w-11 h-11" />;
    case "postgres":
      return <SiPostgresql className="w-11 h-11" />;
    case "mysql":
      return <SiMysql className="w-11 h-11" />;
    case "git":
      return <SiGit className="w-11 h-11" />;
    case "ror":
      return <SiRubyonrails className="w-11 h-11" />;
    case "nextjs":
      return <RiNextjsFill className="w-11 h-11" />;
    case "aws":
      return <FaAws className="w-11 h-11" />;
    case "remix":
      return <SiRemix className="w-11 h-11" />;
    case "supabase":
      return <RiSupabaseFill className="w-11 h-11" />;
    case "redis":
      return <SiRedis className="w-11 h-11" />;
    case "docker":
      return <SiDocker className="w-11 h-11" />;
    case "datadog":
      return <SiDatadog className="w-11 h-11" />;
    case "circleci":
      return <SiCircleci className="w-11 h-11" />;
    case "go":
      return <SiGo className="w-11 h-11" />;
    case "ruby":
      return <SiRuby className="w-11 h-11" />;
    case "terraform":
      return <SiTerraform className="w-11 h-11" />;
    case "linear":
      return <SiLinear className="w-11 h-11" />;
    case "firebase":
      return <RiFirebaseFill className="w-11 h-11" />;
    case "scss":
      return <BsFiletypeScss className="w-11 h-11" />;
    case "python":
      return <SiPython className="w-11 h-11" />;
    default:
      null;
  }
}
