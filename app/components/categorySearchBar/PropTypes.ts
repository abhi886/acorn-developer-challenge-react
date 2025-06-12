export type CategorySearchBarProps = {
    searchTerm: string;
     onSearchTermChange:(newTerm: string)=> void;
     categoryOptions?: string[];
     typeOptions?: string[];
     tagOptions?: string[];
  };