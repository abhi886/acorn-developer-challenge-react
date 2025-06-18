import { CatalogueItem } from "@/app/types/catalogue";

export type ContentModalPropTypes = {
    selectedItem: CatalogueItem;
    closeModal: ()=> void;
}