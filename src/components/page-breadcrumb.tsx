"use client";

import { useSetBreadcrumbs } from "@/hooks/use-breadcrumb";
import type { BreadcrumbItem } from "@/hooks/use-breadcrumb";

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function PageBreadcrumb({
  items,
}: PageBreadcrumbProps) {
  useSetBreadcrumbs(items);

  return null;
}