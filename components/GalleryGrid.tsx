"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  "All",
  "Wood Temples",
  "Signature Series",
  "Full Wood Frame",
] as const;

const TONES = ["All", "Light", "Medium", "Dark"] as const;

type Category = (typeof CATEGORIES)[number];
type Tone = (typeof TONES)[number];

export default function GalleryGrid({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<Category>("All");
  const [tone, setTone] = useState<Tone>("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" ||
        product.category === category.toLowerCase().replace(/ /g, "-");
      const toneMatch =
        tone === "All" || product.tone === tone.toLowerCase();
      return categoryMatch && toneMatch;
    });
  }, [products, category, tone]);

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
          label="Tone"
          options={TONES}
          value={tone}
          onChange={setTone}
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
