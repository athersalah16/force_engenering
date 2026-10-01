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
      className={`px-4 py-2   md:border-0 ${index !== 0 ? " border-b border-b-blue-300 md:border-l md:border-l-blue-300 lg:border-l lg:border-l-blue-300" : " border-b border-b-blue-300"}`}
    >
      <Icon
        aria-hidden="true"
        className="mx-auto mb-3 size-10 text-blue-500"
        strokeWidth={1.6}
      />
      <h3
        className={`text-center text-sm font-semibold lg:font-bold uppercase ${className === "text-white" ? "text-white" : "text-blue-900"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-center text-sm leading-6 ${className === "text-white" ? "text-white" : "text-blue-900"} `}
      >
        {description}
      </p>
    </div>
  );
}

export default ProcessTimeline;
