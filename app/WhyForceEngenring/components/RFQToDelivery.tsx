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
    " bg-primary cursor-pointer text-primary-foreground hover:text-primary-foreground hover:bg-brand-800";
  return (
    <Carousel className="w-full max-w-full h-70 sm:max-w-sm lg:max-w-lg py-5 flex justify-center items-center text-center px-5">
      <CarouselContent className="w-full px-2">
        {endToEndCoordination.map(
          ({ id, title, icon: Icon, description }: EndToEnd) => (
            <CarouselItem key={id}>
              <div className="p-1 ">
                <Card>
                  <CardContent className=" px-4 py-5 gap-2 flex flex-col justify-center items-center rounded-md ">
                    <div className="w-12 h-12 bg-primary rounded-full px-3 py-3 text-primary-foreground text-2xl">
                      {" "}
                      <Icon />
                    </div>{" "}
                    <span className="text-brand-700 text-2xl font-bold">
                      {title}
                    </span>
                    <p className="text-muted-foreground">{description}</p>
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