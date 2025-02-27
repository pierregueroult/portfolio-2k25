import type { APIRoute } from "astro";
import { getThemes } from "../data/themes";

export const GET: APIRoute = async ({ cookies }) => {
  const currentTheme = cookies.get("theme");
  const allThemes = getThemes();
  const theme = allThemes.find((theme) => theme.value === currentTheme?.value);

  let svgColor;

  switch (theme?.value) {
    case "dark":
      svgColor = "#fff";
      break;
    case "arc-browser":
    case "light":
      svgColor = "#000";
      break;
    case "pastel":
      svgColor = "#4f4f4f";
      break;
    case "solarized-light":
      svgColor = "#657b83";
      break;
    case "solarized-dark":
      svgColor = "#839496";
      break;
    default:
      svgColor = "black";
      break;
  }

  return new Response(
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2779 29.8331C15.0139 28.2731 14.3179 26.5931 13.1899 24.7931C12.0619 22.9691 10.4539 21.2771 8.36589 19.7171C6.30189 18.1571 4.23789 17.1611 2.17389 16.7291V15.2171C4.21389 14.7371 6.16989 13.8491 8.04189 12.5531C9.93789 11.2331 11.5219 9.6491 12.7939 7.8011C14.0899 5.9051 14.9179 4.0331 15.2779 2.1851H16.7899C17.0059 3.3851 17.4379 4.6211 18.0859 5.8931C18.7339 7.1411 19.5619 8.3411 20.5699 9.4931C21.6019 10.6211 22.7539 11.6411 24.0259 12.5531C25.9219 13.8971 27.8539 14.7851 29.8219 15.2171V16.7291C28.5019 16.9931 27.1339 17.5331 25.7179 18.3491C24.3259 19.1651 23.0299 20.1371 21.8299 21.2651C20.6299 22.3691 19.6459 23.5331 18.8779 24.7571C17.7499 26.5571 17.0539 28.2491 16.7899 29.8331H15.2779Z" fill="${svgColor}"/>
        </svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    },
  );
};
