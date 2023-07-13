"use client";
import Image from "next/image";
import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
useLocale;

export default function Home() {
  const t = useTranslations("Home");

  const locale = useLocale();

  console.log(locale);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <Link href="/secondPage" locale={locale}>
        Go to Second Page
      </Link>
    </main>
  );
}
