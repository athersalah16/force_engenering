import { coreValue } from "@/app/types/coreValue";
import EndToEnd from "@/app/types/endToEndType";
type Props = {
  data: coreValue | EndToEnd;
  index: number;
  className: string;
};
function ProcessTimeline({ data, index, className }: Props) {
  const { title, description, icon: Icon } = data;

  return (
    <div
      className={`px-4 py-2   md:border-0 ${index !== 0 ? " border-b border-b-border md:border-l md:border-l-border lg:border-l lg:border-l-border" : " border-b border-b-border"}`}
    >
      <Icon
        aria-hidden="true"
        className="mx-auto mb-3 size-10 text-brand-600"
        strokeWidth={1.6}
      />
      <h3
        className={`text-center text-sm font-semibold lg:font-bold uppercase ${className === "text-white" ? "text-primary-foreground" : "text-brand-900"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-center text-sm leading-6 ${className === "text-white" ? "text-primary-foreground" : "text-brand-900"} `}
      >
        {description}
      </p>
    </div>
  );
}

export default ProcessTimeline;
