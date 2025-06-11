import { fetchData } from '@/app/lib/utils/fetchData';


export const getCatalogue = async () => {
  const path = '/local/acorn_coursemanagement/index.php/api/1.1/external_catalogue/188?perPage=16';
  return await fetchData(path);
};