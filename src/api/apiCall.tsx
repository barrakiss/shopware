const ACCESS_KEY = 'SWSCMDV3N2DIOUNZTKNNCTBBCW';

const BASE_URL = 'https://demo.crehler.dev/store-api'
const DEFAULT_CATEGORY_ID = 'e435c9763b0d44fcab67ea1c0fdb3fa0';

const PRODUCT_LISTING_URL = `${BASE_URL}/product-listing/${DEFAULT_CATEGORY_ID}`;
const SEARCH_URL = `${BASE_URL}/search`;

export const fetchDataBySearch = async (phrase: string, order: string) => {
  const response = await fetch(SEARCH_URL, {
    method: 'POST',
    headers: {
      "sw-access-key": ACCESS_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "search": phrase,
      "order": order
    })
  })

  const responseData = await response.json();

  if (responseData) {
    return responseData;
  }

  return null;
}


export const fetchDefaultData = async (order: string) => {
  const response = await fetch(PRODUCT_LISTING_URL, {
    method: 'POST',
    headers: {
      "sw-access-key": ACCESS_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "order": order
    })
  })

  const responseData = await response.json();

  if (responseData) {
    return responseData;
  }

  return null;
}