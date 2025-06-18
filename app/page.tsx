import FilterableContentCatalogue from '@/app/components/filterableContentCatalogue/FilterableContentCatalogue';
// import { getCatalogue } from '@/app/services/getCatalogue';
import { Container, Typography } from '@mui/material';
import { getCatalogue } from './services/getCatalogue';
// import { catalogue } from '@/app/data/catalogue';
import { CatalogueItem } from './types/catalogue';

type PageProps = {
  status: string;
  data: {
    items: CatalogueItem[];
  };
  next_page_url: string | null;
  previous_page_url: string | null;
  per_page: number;
};

// Home Page Component
export default async function Home() {
  // Fetch catalogue data form API service in the server
  const { data } = await getCatalogue<PageProps>();
  // const { data } = catalogue;
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h1"
        sx={{ fontSize: '2rem', fontWeight: 600, mb: 2 }}
      >
        ABC Catalogue Items
      </Typography>

      {/* Filterable Content Catalogue Section */}
      <FilterableContentCatalogue catalogueData={data} />
    </Container>
  );
}
