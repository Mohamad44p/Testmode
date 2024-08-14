/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

export default function WhoServe() {
  return (
    <div
     data-color="light-blue"
    className="flex h-screen p-12">
      <div className="w-1/3">
        <h2 className="text-5xl font-bold text-gray-800 leading-tight">
          Who we serve
        </h2>
      </div>
      <div className="w-2/3 space-y-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="healthtech"
            className="border-t border-gray-300"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Healthtech Solutions
                </h3>
                <ChevronRight className="h-6 w-6 text-gray-500 transform transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-4">
                Navigate regulatory and compliance complexity to bring your
                technology to scale.
              </p>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Digital Health"
                    className="w-1/3 object-cover"
                  />
                  <div className="w-2/3 p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      How to Use Digital Health Interventions to Align Employee
                      & Organizational Goals
                    </h4>
                    <p className="text-gray-600 mb-4">
                      How to use personalized digital health interventions to
                      empower employees while achieving your organization's
                      goals.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      GET STARTED
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="insurance" className="border-t border-gray-300">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Insurance Solutions
                </h3>
                <ChevronRight className="h-6 w-6 text-gray-500 transform transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">Content for Insurance Solutions</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pharma" className="border-t border-gray-300">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Pharma Solutions
                </h3>
                <ChevronRight className="h-6 w-6 text-gray-500 transform transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">Content for Pharma Solutions</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
