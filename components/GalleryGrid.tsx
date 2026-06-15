"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["All", "Eyeglasses", "Sunglasses"] as const;
const WOODS = [
  "All",
  "Walnut",
  "Oak",
  "Maple",
  "Beech",
  "Mahogany",
  "Rosewood",
] as const;

type Category = (typeof CATEGORIES)[number];
type Wood = (typeof WOODS)[number];

export default function GalleryGrid({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<Category>("All");
  const [wood, setWood] = useState<Wood>("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" || product.category === category.toLowerCase();
      const woodMatch =
        wood === "All" ||
        product.wood.toLowerCase().includes(wood.toLowerCase());
      return categoryMatch && woodMatch;
    });
  }, [products, category, wood]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <FilterGroup
          label="Type"
          options={CATEGORIES}
          value={category}
          onChange={setCategory}
        />
        <FilterGroup
          label="Wood"
          options={WOODS}
          value={wood}
          onChange={setWood}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink-muted">
          No pieces match those filters yet &mdash; try a different
          combination.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              value === option
                ? "bg-walnut text-cream"
                : "bg-cream-dark text-ink-muted hover:bg-oak-light/50 hover:text-walnut"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
