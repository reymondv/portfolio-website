import { ReactElement } from "react";
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

const ICONS: Record<string, ReactElement> = {
  react: <RiReactjsFill className="w-11 h-11" />,
  tailwind: <RiTailwindCssFill className="w-11 h-11" />,
  typescript: <SiTypescript className="w-11 h-11" />,
  javascript: <RiJavascriptFill className="w-11 h-11" />,
  html: <RiHtml5Fill className="w-11 h-11" />,
  css: <RiCss3Fill className="w-11 h-11" />,
  postgres: <SiPostgresql className="w-11 h-11" />,
  mysql: <SiMysql className="w-11 h-11" />,
  git: <SiGit className="w-11 h-11" />,
  ror: <SiRubyonrails className="w-11 h-11" />,
  nextjs: <RiNextjsFill className="w-11 h-11" />,
  aws: <FaAws className="w-11 h-11" />,
  remix: <SiRemix className="w-11 h-11" />,
  supabase: <RiSupabaseFill className="w-11 h-11" />,
  redis: <SiRedis className="w-11 h-11" />,
  docker: <SiDocker className="w-11 h-11" />,
  datadog: <SiDatadog className="w-11 h-11" />,
  circleci: <SiCircleci className="w-11 h-11" />,
  go: <SiGo className="w-11 h-11" />,
  ruby: <SiRuby className="w-11 h-11" />,
  terraform: <SiTerraform className="w-11 h-11" />,
  linear: <SiLinear className="w-11 h-11" />,
  firebase: <RiFirebaseFill className="w-11 h-11" />,
  scss: <BsFiletypeScss className="w-11 h-11" />,
  python: <SiPython className="w-11 h-11" />,
};

export default function RenderIcon({ name }: { name?: string }) {
  if (name === undefined || name === null) return null;

  return ICONS[name] ?? null;
}
