"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  CheckBadgeIcon,
  QrCodeIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: QrCodeIcon,
    title: "Proffsig QR-kod",
    description:
      "En stilren QR-kod som passar in i alla miljöer. ",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Smartphone",
    description:
      "Alla med en smartphone kan använda vårat system. Bara rikta kameran mot QR-koden och du är igång.",
  },
  {
    icon: CreditCardIcon,
    title: "Sätt dina egna priser",
    description: "Sätt dina egna priser och få betalt direkt till ditt konto.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/qr.png"
            className="h-full rounded-md max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Ingen app inget krångel
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Vårat system kräver ingen förkunskap och kan användas av alla mobiler, inga installationer krävs.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
