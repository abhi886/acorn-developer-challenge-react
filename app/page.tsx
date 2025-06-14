import FilterableContentCatalogue from '@/app/components/filterableContentCatalogue/FilterableContentCatalogue';
import { getCatalogue } from '@/app/services/getCatalogue';
import { Container, Typography } from '@mui/material';

// Home Page Component
export default async function Home() {
  // Fetch catalogue data form API service in the server
  const { data } = await getCatalogue();
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        sx={{ fontSize: '2rem', fontWeight: 600, mb: 2 }}
      >
        ABC Catalogue Items
      </Typography>

      {/* Filterable Content Catalogue Section */}
      <FilterableContentCatalogue catalogueData={data} />
    </Container>
  );
}
