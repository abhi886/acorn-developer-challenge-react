
export default function Home() {
  return (
      <main>
        <header>
          <h1>ABC Catalogue Items</h1>
        </header>
  
  {/* Catalogue Section */}
        <section aria-labelledby="filters-heading">
          <h2 id="filters-heading">Filter Catalogue</h2>
          <form>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search catalogue..."
              aria-label="Search catalogue"
            />
  
            <label htmlFor="category">Category</label>
            <select id="category" name="category" aria-label="Select category">
              <option value="">All Categories</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
  
            <label htmlFor="type">Type</label>
            <select id="type" name="type" aria-label="Select type">
              <option value="">All Types</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
  
            <fieldset>
              <legend>Filter by tags</legend>
              <div role="group" aria-label="Tag filters">
                <button type="button">Tag1</button>
                <button type="button">Tag2</button>
                <button type="button">Tag3</button>
                <button type="button">Tag4</button>
              </div>
            </fieldset>
          </form>
        </section>
  
        <section aria-labelledby="results-heading">
          <h2 id="results-heading">Catalogue Results</h2>
          <ul>
            <li>
              <article>
                <h3>Item Fullname 1</h3>
                <p>Summary text for item 1.</p>
                <p><strong>Category:</strong> Category Name 1</p>
                <p><strong>Type:</strong> Content Type 1</p>
                <p><strong>Tags:</strong> Tag1, Tag2, Tag3</p>
              </article>
            </li>
  
            <li>
              <article>
                <h3>Item Fullname 2</h3>
                <p>Summary text for item 2.</p>
                <p><strong>Category:</strong> Category Name 2</p>
                <p><strong>Type:</strong> Content Type 2</p>
                <p><strong>Tags:</strong> TagA, TagB</p>
              </article>
            </li>
          </ul>
        </section>
      </main>
  );
}
