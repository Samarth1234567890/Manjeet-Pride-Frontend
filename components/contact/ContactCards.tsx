"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const cards = [
  {
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: Phone,
    description: "Speak directly with our sales team.",
  },
  {
    title: "Email Us",
    value: "info@manjeetpride.com",
    href: "mailto:info@manjeetpride.com",
    icon: Mail,
    description: "We'll respond within 24 hours.",
  },
  {
    title: "Visit Office",
    value: "Chhatrapati Sambhajinagar",
    href: "/contact",
    icon: MapPin,
    description: "Corporate Office & Sales Gallery.",
  },
  {
    title: "Working Hours",
    value: "9:30 AM – 7:00 PM",
    href: "#",
    icon: Clock,
    description: "Monday to Sunday",
  },
];

export default function ContactCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.a
            key={card.title}
            href={card.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-[#C9A54C] hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#163d6c]/10 text-[#163d6c] transition group-hover:bg-[#C9A54C] group-hover:text-white">
              <Icon size={24} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#163d6c]">
              {card.title}
            </h3>

            <p className="mt-3 text-lg font-medium text-neutral-900 break-words">
              {card.value}
            </p>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {card.description}
            </p>
          </motion.a>
        );
      })}
    </div>
  );
}