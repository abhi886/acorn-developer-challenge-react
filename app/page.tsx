
import FilterableContentCatalogue from '@/app/components/filterableContentCatalogue/FilterableContentCatalogue';
import {getCatalogue} from '@/app/services/getCatalogue';

export default async function Home() {
const {data } = await getCatalogue();
  return (
      <main>
        <header>
          <h1>ABC Catalogue Items</h1>
        </header>
  
  {/* Catalogue Section */}
       <FilterableContentCatalogue catalogueData={data}/>
      </main>
  );
}
