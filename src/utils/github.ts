import {Repository, SortingCriteria} from 'model/Github';

const fetchGithubRepos = async (page: number) => {
  const response = await fetch(
    `https://api.github.com/users/ythecombinator/repos?per_page=100&page=${page}`
  );

  const data = await response.json();

  return data as Repository[];
};

const sortByStargazers = (a: Repository, b: Repository) =>
  a.stargazers_count < b.stargazers_count
    ? 1
    : b.stargazers_count < a.stargazers_count
    ? -1
    : 0;

const filterPinnedRepos = (repo: Repository) => {
  const pinned = [
    "react-native-web-monorepo-navigation",
    "space",
    "flat-palettes",
    "vapor-x-hub-middleware",
    "GammaFn",
    "resistance.js",
  ];

  return pinned.includes(repo.name);
};

export const fetchAllGithubRepos = async (
  offset = 1
): Promise<Repository[]> => {
  const batch = await fetchGithubRepos(offset);

  if (batch.length > 0) {
    return batch.concat(await fetchAllGithubRepos(offset + 1));
  } else {
    return batch;
  }
};

export const filterGithubReposResponse = async (
  repos: Repository[],
  criteria: SortingCriteria
) => {
  let selectedRepos = [] as Repository[];

  switch (criteria) {
    case "starred": {
      selectedRepos = repos.sort(sortByStargazers).slice(0, 12);
      break;
    }
    case "pinned": {
      selectedRepos = repos.filter(filterPinnedRepos).sort(sortByStargazers);
      break;
    }
  }

  return selectedRepos;
};

const languageColors = {
  onec_enterprise: "#814CCC",
  abap: "#E8274B",
  ags_script: "#B9D9FF",
  ampl: "#E6EFBB",
  antlr: "#9DC3FF",
  api_blueprint: "#2ACCA8",
  apl: "#5A8164",
  asp: "#6a40fd",
  ats: "#1ac620",
  actionscript: "#882B0F",
  ada: "#02f88c",
  agda: "#315665",
  alloy: "#64C800",
  angelscript: "#C7D7DC",
  applescript: "#101F1F",
  arc: "#aa2afe",
  aspectj: "#a957b0",
  assembly: "#6E4C13",
  asymptote: "#4a0c0c",
  autohotkey: "#6594b9",
  autoit: "#1C3552",
  ballerina: "#FF5000",
  batchfile: "#C1F12E",
  blitzmax: "#cd6400",
  boo: "#d4bec1",
  brainfuck: "#2F2530",
  c: "#555555",
  csharp: "#178600",
  cpp: "#f34b7d",
  css: "#563d7c",
  ceylon: "#dfa535",
  chapel: "#8dc63f",
  cirru: "#ccccff",
  clarion: "#db901e",
  clean: "#3F85AF",
  click: "#E4E6F3",
  clojure: "#db5855",
  coffeescript: "#244776",
  coldfusion: "#ed2cd6",
  common_lisp: "#3fb68b",
  common_workflow_language: "#B5314C",
  component_pascal: "#B0CE4E",
  crystal: "#000100",
  cuda: "#3A4E3A",
  d: "#ba595e",
  dm: "#447265",
  dart: "#00B4AB",
  dataweave: "#003a52",
  dhall: "#dfafff",
  dockerfile: "#384d54",
  dogescript: "#cca760",
  dylan: "#6c616e",
  e: "#ccce35",
  ecl: "#8a1267",
  eq: "#a78649",
  eiffel: "#946d57",
  elixir: "#6e4a7e",
  elm: "#60B5CC",
  emacs_lisp: "#c065db",
  emberscript: "#FFF4F3",
  erlang: "#B83998",
  fsharp: "#b845fc",
  fstar: "#572e30",
  flux: "#88ccff",
  factor: "#636746",
  fancy: "#7b9db4",
  fantom: "#14253c",
  faust: "#c37240",
  forth: "#341708",
  fortran: "#4d41b1",
  freemarker: "#0050b2",
  frege: "#00cafe",
  g_code: "#D08CF2",
  gaml: "#FFC766",
  gdscript: "#355570",
  game_maker_language: "#71b417",
  genie: "#fb855d",
  gherkin: "#5B2063",
  glyph: "#c1ac7f",
  gnuplot: "#f0a9f0",
  go: "#00ADD8",
  golo: "#88562A",
  gosu: "#82937f",
  grammatical_framework: "#79aa7a",
  groovy: "#e69f56",
  html: "#e34c26",
  hack: "#878787",
  harbour: "#0e60e3",
  haskell: "#5e5086",
  haxe: "#df7900",
  hiveql: "#dce200",
  holyc: "#ffefaf",
  hy: "#7790B2",
  idl: "#a3522f",
  igor_pro: "#0000cc",
  idris: "#b30000",
  io: "#a9188d",
  ioke: "#078193",
  isabelle: "#FEFE00",
  j: "#9EEDFF",
  jsoniq: "#40d47e",
  java: "#b07219",
  javascript: "#f1e05a",
  jolie: "#843179",
  jsonnet: "#0064bd",
  julia: "#a270ba",
  jupyter_notebook: "#DA5B0B",
  krl: "#28430A",
  kotlin: "#F18E33",
  lfe: "#4C3023",
  llvm: "#185619",
  lolcode: "#cc9900",
  lsl: "#3d9970",
  lasso: "#999999",
  lex: "#DBCA00",
  livescript: "#499886",
  lookml: "#652B81",
  lua: "#000080",
  matlab: "#e16737",
  maxscript: "#00a6a6",
  mlir: "#5EC8DB",
  mql4: "#62A8D6",
  mql5: "#4A76B8",
  mtml: "#b7e1f4",
  makefile: "#427819",
  mask: "#f97732",
  max: "#c4a79c",
  mercury: "#ff2b2b",
  meson: "#007800",
  metal: "#8f14e9",
  mirah: "#c7a938",
  modula_3: "#223388",
  ncl: "#28431f",
  nearley: "#990000",
  nemerle: "#3d3c6e",
  netlinx: "#0aa0ff",
  netlinxperb: "#747faa",
  netlogo: "#ff6375",
  newlisp: "#87AED7",
  nextflow: "#3ac486",
  nim: "#37775b",
  nit: "#009917",
  nix: "#7e7eff",
  nu: "#c9df40",
  ocaml: "#3be133",
  objectscript: "#424893",
  objective_c: "#438eff",
  objective_cpp: "#6866fb",
  objective_j: "#ff0c5a",
  odin: "#60AFFE",
  omgrofl: "#cabbff",
  opal: "#f7ede0",
  openqasm: "#AA70FF",
  oxygene: "#cdd0e3",
  oz: "#fab738",
  p4: "#7055b5",
  php: "#4F5D95",
  plsql: "#dad8d8",
  pan: "#cc0000",
  papyrus: "#6600cc",
  parrot: "#f3ca0a",
  pascal: "#E3F171",
  pawn: "#dbb284",
  pep8: "#C76F5B",
  perl: "#0298c3",
  piglatin: "#fcd7de",
  pike: "#005390",
  pogoscript: "#d80074",
  postscript: "#da291c",
  powerbuilder: "#8f0f8d",
  powershell: "#012456",
  processing: "#0096D8",
  prolog: "#74283c",
  propeller_spin: "#7fa2a7",
  puppet: "#302B6D",
  purebasic: "#5a6986",
  purescript: "#1D222D",
  python: "#3572A5",
  qml: "#44a51c",
  quake: "#882233",
  r: "#198CE7",
  raml: "#77d9fb",
  runoff: "#665a4e",
  racket: "#3c5caa",
  ragel: "#9d5200",
  raku: "#0000fb",
  rascal: "#fffaa0",
  reason: "#ff5847",
  rebol: "#358a5b",
  red: "#f50000",
  renpy: "#ff7f7f",
  ring: "#2D54CB",
  riot: "#A71E49",
  roff: "#ecdebe",
  rouge: "#cc0088",
  ruby: "#701516",
  rust: "#dea584",
  sas: "#B34936",
  sqf: "#3F3F3F",
  srecode_template: "#348a34",
  saltstack: "#646464",
  scala: "#c22d40",
  scheme: "#1e4aec",
  self: "#0579aa",
  shell: "#89e051",
  shen: "#120F14",
  slash: "#007eff",
  slice: "#003fa2",
  smpl: "#c94949",
  smalltalk: "#596706",
  solidity: "#AA6746",
  sourcepawn: "#5c7611",
  squirrel: "#800000",
  stan: "#b2011d",
  standard_ml: "#dc566d",
  starlark: "#76d275",
  supercollider: "#46390b",
  swift: "#ffac45",
  systemverilog: "#DAE1C2",
  ti_program: "#A0AA87",
  tcl: "#e4cc98",
  tex: "#3D6117",
  terra: "#00004c",
  turing: "#cf142b",
  typescript: "#2b7489",
  unrealscript: "#a54c4d",
  v: "#5d87bd",
  vba: "#867db1",
  vbscript: "#15dcdc",
  vcl: "#148AA8",
  vhdl: "#adb2cb",
  vala: "#fbe5cd",
  verilog: "#b2b7f8",
  vim_script: "#199f4b",
  visual_basic_dotnet: "#945db7",
  volt: "#1F1F1F",
  vue: "#2c3e50",
  webassembly: "#04133b",
  wollok: "#a23738",
  x10: "#4B6BEF",
  xc: "#99DA07",
  xquery: "#5232e7",
  xslt: "#EB8CEB",
  yara: "#220000",
  yasnippet: "#32AB90",
  yacc: "#4B6C4B",
  zap: "#0d665e",
  zil: "#dc75e5",
  zenscript: "#00BCD1",
  zephir: "#118f9e",
  zig: "#ec915c",
  ec: "#913960",
  mirc_script: "#926059",
  mcfunction: "#E22837",
  nesc: "#94B0C7",
  ooc: "#b0b77e",
  q: "#0040cd",
  sed: "#64b970",
  wdl: "#42f1f4",
  wisp: "#7582D1",
};

type LanguageColors = keyof typeof languageColors;

export const getColorForLanguage = (language: string) => {
  const searchTerm = language.toLowerCase() as LanguageColors;
  return languageColors[searchTerm];
};
