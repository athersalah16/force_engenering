import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { endToEndCoordination } from "../../../company_data/endToEndCoporeation";
import { Card, CardContent } from "@/components/ui/card";
import EndToEnd from "../../types/endToEndType";

function RFQToDelivery() {
  const IndicatorStyle =
    " bg-blue-600 cursor-pointer text-white hover:text-white hover:bg-blue-700";
  return (
    <Carousel className="w-full max-w-full h-70 sm:max-w-sm lg:max-w-lg py-5 flex justify-center items-center text-center px-5">
      <CarouselContent className="w-full px-2">
        {endToEndCoordination.map(
          ({ id, title, icon: Icon, description }: EndToEnd) => (
            <CarouselItem key={id}>
              <div className="p-1 ">
                <Card>
                  <CardContent className=" px-4 py-5 gap-2 flex flex-col justify-center items-center rounded-md ">
                    <div className="w-12 h-12 bg-blue-600 rounded-full px-3 py-3 text-white text-2xl">
                      {" "}
                      <Icon />
                    </div>{" "}
                    <span className="text-blue-600 text-2xl font-bold">
                      {title}
                    </span>
                    <p className="text-gray-500">{description}</p>
                  </CardContent>
                </Card>{" "}
              </div>
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious className={`left-0  ${IndicatorStyle}`} />
      <CarouselNext className={`right-0  ${IndicatorStyle}`} />
    </Carousel>
  );
}

export default RFQToDelivery;