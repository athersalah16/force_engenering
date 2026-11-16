import { ClipboardCheck, PackageSearch, Settings, Truck } from "lucide-react";

const capabilities = [
  { label: "Product & Material Sourcing", icon: PackageSearch },
  { label: "Technical Coordination", icon: Settings },
  { label: "Procurement & Supply Support", icon: ClipboardCheck },
  { label: "Project & Delivery Coordination", icon: Truck },
];

function HowCanWeHelp() {
  return (
    <article className="w-full max-w-xl px-4 py-2 flex-col">
      <h2 className="text-3xl font-bold text-brand-950">How Can We Help?</h2>
      <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
        Tell us about your project requirements, material needs, or sourcing
        enquiries. <br />
        <span className="text-copper-700 font-semibold">
          {" "}
          Our team is ready to support you with:
        </span>
      </p>

      <ol
        className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2"
        aria-label="Our capabilities"
      >
        {capabilities.map(({ label, icon: Icon }, index) => (
          <li key={label} className="flex items-start gap-3">
            <p className="text-brand-700 font-bold">{index + 1}. </p>
            <Icon
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand-700"
              strokeWidth={1.8}
            />
            <span className="text-sm leading-6 text-brand-800">{label}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default HowCanWeHelp;
