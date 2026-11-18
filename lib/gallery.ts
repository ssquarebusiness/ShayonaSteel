export const categories = [
  { id: "pergola", label: "Pergolas & Canopies" },
  { id: "gate", label: "Gates & Boundary" },
  { id: "jali", label: "Laser-cut Jali" },
  { id: "railing", label: "Railings" },
  { id: "shed", label: "Sheds & Industrial" },
  { id: "furniture", label: "Furniture & Décor" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type WorkItem = {
  src: string;
  alt: string;
  category: CategoryId;
  width: number;
  height: number;
};

export const work: WorkItem[] = [
  { src: "/work/pergola-02.jpg", alt: "Black steel pergola and matching boundary grill over a home entrance", category: "pergola", width: 959, height: 1280 },
  { src: "/work/gate-01.jpg", alt: "Double steel gate with laser-cut geometric top panels", category: "gate", width: 749, height: 562 },
  { src: "/work/jali-04.jpg", alt: "Laser-cut leaf-pattern steel facade panels on a building", category: "jali", width: 1104, height: 541 },
  { src: "/work/pergola-01.jpg", alt: "Blue powder-coated steel pergola with railing on a raised platform", category: "pergola", width: 736, height: 719 },
  { src: "/work/shed-01.jpg", alt: "Industrial steel shed with blue colour-coated roofing sheets", category: "shed", width: 1280, height: 591 },
  { src: "/work/gate-04.jpg", alt: "Modern double gate with horizontal steel slats", category: "gate", width: 1019, height: 945 },
  { src: "/work/jali-01.jpg", alt: "Laser-cut steel jali panel with triangle pattern", category: "jali", width: 615, height: 1194 },
  { src: "/work/pergola-08.jpg", alt: "Laser-cut decorative steel canopy over an outdoor patio", category: "pergola", width: 1029, height: 1034 },
  { src: "/work/railing-01.jpg", alt: "Steel staircase railing with mesh infill panels", category: "railing", width: 1200, height: 840 },
  { src: "/work/furniture-05.jpg", alt: "Steel table frame with laser-cut swirl side panels", category: "furniture", width: 1200, height: 1200 },
  { src: "/work/pergola-04.jpg", alt: "White louvred steel pergola over a garden deck", category: "pergola", width: 1280, height: 506 },
  { src: "/work/gate-02.jpg", alt: "White gate with laser-cut floral panel", category: "gate", width: 500, height: 282 },
  { src: "/work/jali-02.jpg", alt: "Stainless steel laser-cut jali partition panels", category: "jali", width: 1004, height: 995 },
  { src: "/work/pergola-07.jpg", alt: "Black steel rooftop pergola over a wooden deck", category: "pergola", width: 987, height: 1250 },
  { src: "/work/shed-02.jpg", alt: "Large steel-structure cattle shed with feeding lanes", category: "shed", width: 1125, height: 897 },
  { src: "/work/furniture-02.jpg", alt: "Black steel console table with geometric frame", category: "furniture", width: 400, height: 400 },
  { src: "/work/gate-05.jpg", alt: "Boundary wall railing with laser-cut floral steel panels", category: "gate", width: 884, height: 540 },
  { src: "/work/pergola-05.jpg", alt: "Wood-finish steel ceiling panels and pergola beams", category: "pergola", width: 1280, height: 1232 },
  { src: "/work/jali-03.jpg", alt: "Tree-pattern laser-cut decorative panels in white, black and gold", category: "jali", width: 1066, height: 660 },
  { src: "/work/furniture-03.jpg", alt: "Wall-mounted steel coat rack with shelf", category: "furniture", width: 720, height: 960 },
  { src: "/work/pergola-03.jpg", alt: "Steel louvre pergola over an outdoor kitchen", category: "pergola", width: 1026, height: 711 },
  { src: "/work/gate-03.jpg", alt: "Sliding steel gate with horizontal slats", category: "gate", width: 358, height: 358 },
  { src: "/work/furniture-04.jpg", alt: "Steel-frame treatment bed with storage shelf", category: "furniture", width: 848, height: 848 },
  { src: "/work/pergola-06.jpg", alt: "Steel pergola with retractable fabric shade", category: "pergola", width: 1007, height: 1005 },
  { src: "/work/furniture-01.jpg", alt: "Console table with black steel geometric frame", category: "furniture", width: 400, height: 400 },
  { src: "/work/furniture-06.jpg", alt: "Steel garden arch frame, 8 ft tall", category: "furniture", width: 874, height: 784 },
];
