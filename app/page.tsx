
import FilterableContentCatalogue from '@/app/components/filterableContentCatalogue/FilterableContentCatalogue';
export default function Home() {
  return (
      <main>
        <header>
          <h1>ABC Catalogue Items</h1>
        </header>
  
  {/* Catalogue Section */}
       <FilterableContentCatalogue />
      </main>
  );
}
