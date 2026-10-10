export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  index: string;
}

export const services: ServiceCapability[] = [
  {
    id: "web-development",
    title: "WEB DEVELOPMENT",
    description: "Building responsive websites and web applications around a clear purpose, considered interactions, and maintainable foundations.",
    index: "01",
  },
  {
    id: "website-design",
    title: "WEBSITE DESIGN",
    description: "Shaping page structure, visual direction, and content rhythm into a distinctive digital presence.",
    index: "02",
  },
  {
    id: "ui-ux",
    title: "UI / UX",
    description: "Turning user needs and product ideas into coherent flows, useful interfaces, and thoughtful details.",
    index: "03",
  },
  {
    id: "branding",
    title: "BRANDING",
    description: "Exploring identity systems, visual language, and the details that help a brand feel like itself.",
    index: "04",
  },
  {
    id: "digital-experiences",
    title: "DIGITAL EXPERIENCES",
    description: "Combining interaction, motion, and technology to make digital work feel immersive and memorable.",
    index: "05",
  },
  {
    id: "automation",
    title: "AUTOMATION",
    description: "Designing small workflows and tool connections that simplify repetitive tasks and make everyday processes smoother.",
    index: "06",
  },
  {
    id: "ai-development",
    title: "AI / DEVELOPMENT",
    description: "Exploring AI-enabled tools and software development to turn useful ideas into working prototypes and products.",
    index: "07",
  },
];
