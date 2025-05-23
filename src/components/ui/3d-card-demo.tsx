
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Link } from "react-router-dom";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="glass-card relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Experience Electric Vehicles
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white/70 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of 3D perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="h-60 w-full flex items-center justify-center rounded-xl group-hover/card:shadow-xl bg-glass-highlight/20">
            <div className="text-white/50 text-lg">
              [Vehicle Image]
            </div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            to="/vehicles"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Browse vehicles →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            to="/book/model-s"
            className="px-4 py-2 rounded-xl bg-tesla-blue text-white text-xs font-bold"
          >
            Test Drive
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
