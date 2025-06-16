import { fetchData } from '@/app/lib/utils/fetchData';

const cataloguePath = '/local/acorn_coursemanagement/index.php/api/1.1/external_catalogue/188?perPage=16';

export const getCatalogue = () => fetchData(cataloguePath);
