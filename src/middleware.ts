import { i18n } from "@/config/i18n-config";
import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages([
    ...locales,
  ]);

  const locale = matchLocale(languages, [...locales], i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingLocale = i18n.locales.every(
    (locale) => !pathName.startsWith(`/${locale}`) && pathName !== `/${locale}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathName.startsWith("/") ? "" : "/"}${pathName}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
