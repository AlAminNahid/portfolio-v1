export type CodeToken = { t: string; v: string };
export type CodeLine = { content: CodeToken[] };

export const CODE_LINES: CodeLine[] = [
  {
    content: [
      { t: "pp", v: "#include" },
      { t: "w", v: " <" },
      { t: "type", v: "iostream" },
      { t: "w", v: ">" },
    ],
  },
  {
    content: [
      { t: "pp", v: "#include" },
      { t: "w", v: " <" },
      { t: "type", v: "string" },
      { t: "w", v: ">" },
    ],
  },
  {
    content: [
      { t: "pp", v: "#include" },
      { t: "w", v: " <" },
      { t: "type", v: "vector" },
      { t: "w", v: ">" },
    ],
  },
  {
    content: [
      { t: "pp", v: "using" },
      { t: "w", v: " name" },
      { t: "w", v: "space" },
      { t: "w", v: " std;" },
    ],
  },
  { content: [] },
  { content: [{ t: "cm", v: "// First program — where it all began" }] },
  {
    content: [
      { t: "kw", v: "int" },
      { t: "fn", v: " main" },
      { t: "w", v: "() {" },
    ],
  },
  {
    content: [
      { t: "type", v: "vector" },
      { t: "w", v: "<" },
      { t: "type", v: "string" },
      { t: "w", v: "> langs = {" },
    ],
  },
  {
    content: [
      { t: "str", v: '        "C++"' },
      { t: "w", v: ", " },
      { t: "str", v: '"JavaScript"' },
      { t: "w", v: ", " },
      { t: "str", v: '"TypeScript"' },
      { t: "w", v: "," },
    ],
  },
  {
    content: [
      { t: "str", v: '        "Kotlin"' },
      { t: "w", v: ", " },
      { t: "str", v: '"NextJS"' },
      { t: "w", v: ", " },
      { t: "str", v: ' "NestJS"' },
    ],
  },
  { content: [{ t: "w", v: "    };" }] },
  { content: [] },
  {
    content: [
      { t: "w", v: "    cout << " },
      { t: "str", v: '"Hello, World!"' },
      { t: "w", v: " << endl;" },
    ],
  },
  { content: [] },
  {
    content: [
      { t: "kw", v: "    for" },
      { t: "w", v: " (" },
      { t: "kw", v: "const auto" },
      { t: "w", v: "& lang : langs) {" },
    ],
  },
  {
    content: [
      { t: "w", v: "        cout << lang << " },
      { t: "str", v: '" is cool"' },
      { t: "w", v: " << endl;" },
    ],
  },
  { content: [{ t: "w", v: "    }" }] },
  { content: [] },
  {
    content: [
      { t: "kw", v: "    return" },
      { t: "w", v: " " },
      { t: "num", v: "0" },
      { t: "w", v: ";" },
    ],
  },
  { content: [{ t: "w", v: "}" }] },
];
