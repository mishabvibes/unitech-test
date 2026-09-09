import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define the Locale type matching routing.locales
type Locale = "en" | "fr" | "id";

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale which may be string or undefined
  let locale: string | undefined = await requestLocale;

  // Ensure locale is valid and included in routing.locales
  if (locale && routing.locales.includes(locale as Locale)) {
    // locale is valid, no changes needed
  } else {
    // If locale is invalid or undefined, set to default (en)
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
