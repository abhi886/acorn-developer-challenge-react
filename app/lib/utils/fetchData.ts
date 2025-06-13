const BASE_URL = process.env.ACORN_API_BASE_URL! || 'https://staging.acornlms.com';;
const BEARER_TOKEN = process.env.ACORN_API_BEARER_TOKEN! || "ODJuU1ZDakRsdTkxb21OOGF6a3lqbFlXUzN4QzgxOU5FMzdWTERZcA==";

export const fetchData = async <T>(requestUrl: string): Promise<T> => {
  const fullUrl = `${BASE_URL}${requestUrl}`;

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 } 
  };

  try {
    const response = await fetch(fullUrl, requestOptions);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch. Status: ${response.status}, ${response.statusText}`
      );
    }

    return response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred during fetch');
  }
};
