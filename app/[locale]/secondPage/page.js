"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function SecondPage() {
  const t = useTranslations("secondPage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <Link href="/">Go to Home Page</Link>
    </main>
  );
}
