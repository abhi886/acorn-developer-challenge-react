import { CatalogueItem } from "@/app/types/catalogue";

export type ContentCardProps = {
    item: CatalogueItem;
    onClick: (item:CatalogueItem) => void;
}