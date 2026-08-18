import { Aside, Detalle } from "@/components/blog/aside";
import DeltaLab from "@/components/blog/delta-lab";
import DeltaModeComparator from "@/components/blog/delta-mode-comparator";
import Quiz from "@/components/blog/quiz";
import StorageCalculator from "@/components/blog/storage-calculator";
import { globalComponents } from "@/components/mdx";
import type { MDXComponents } from "mdx/types";

/**
 * Todo lo que un post puede usar sin importar nada: los overrides de HTML
 * (headings con ancla, links, imágenes) más los widgets interactivos.
 */
export const mdxComponents: MDXComponents = {
  ...globalComponents,
  // Las tablas anchas scrollean dentro de su caja en vez de romper el layout
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  Aside,
  Detalle,
  Quiz,
  DeltaLab,
  DeltaModeComparator,
  StorageCalculator,
};
