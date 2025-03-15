import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "../database";

export const server = {
  contact: defineAction({
    input: z.object({
      email: z.string().email(),
      message: z.string().min(1),
      name: z.string().min(1),
      userAgent: z.string().min(1),
    }),
    handler: async (input, context) => {
      const ipAddress = context.request.headers.get("x-forwarded-for") || "No IP";
      
      let country = "No Country";
      if (ipAddress !== "No IP") {
        try {
          const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
          const data = await response.json();
          country = data.country_name || "Inconnu";
        } catch {}
      }

      const { email, message, name, userAgent } = input;

      try {
        await prisma.message.create({
          data: {
            email,
            message,
            name,
            userAgent,
            ipAddress,
            country,
          },
        });

        return { success: true };
      } catch {
        return { success: false };
      }
    },
  }),
};
