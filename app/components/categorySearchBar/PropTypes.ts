export type CategorySearchBarProps = {
    searchTerm: string;
     onSearchTermChange:(newTerm: string)=> void;
     categoryOptions?: string[];
     typeOptions?: string[];
     tagOptions?: string[];
     selectedCategory?: string;
     selectedType?: string; 
     selectedTags?: string[];
     setSelectedCategory?: (category: string) => void;
     setSelectedType?: (type: string) => void;
     setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
     handleFilterClear: () => void;
     isFilterActive: boolean;
    };