import { type CodeToken } from "../../../constants/code-lines";

const TOKEN_COLORS: Record<string, string> = {
  kw: "text-indigo-400",
  fn: "text-blue-300",
  param: "text-sky-300",
  type: "text-emerald-400",
  str: "text-amber-300",
  num: "text-orange-400",
  cm: "text-neutral-500 italic",
  pp: "text-violet-400",
  w: "text-neutral-200",
};

export default function Token({ t, v }: CodeToken) {
  return <span className={TOKEN_COLORS[t] ?? "text-neutral-200"}>{v}</span>;
}
