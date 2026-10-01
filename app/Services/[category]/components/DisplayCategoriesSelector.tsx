import { switchToTitle } from "@/app/utils/switchToTitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

type Props = {
  data: string[];
  handleSelectedCategoryChange: (category: string) => void;
  selectedCategory: string;
};
export default function DisplayCategoriesSelectors({
  data,
  handleSelectedCategoryChange,
  selectedCategory,
}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-full ">
        {switchToTitle(selectedCategory)}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((category) => (
            <SelectItem
              onClick={() => handleSelectedCategoryChange(category)}
              key={category}
              value={category}
            >
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
