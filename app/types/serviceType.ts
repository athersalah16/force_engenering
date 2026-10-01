export type IconName =
  | "GiValve"
  | "Cable"
  | "Cog"
  | "Construction"
  | "ShieldCheck"
  | "Factory"
  | "Zap"
  | "Lightbulb";

export type Service = {
  icon: IconName;
  text: string;
  category?: string;
  description: string;
};
