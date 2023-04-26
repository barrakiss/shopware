import { useEffect, useRef, useState } from 'react'
import { fetchDefaultData, fetchDataBySearch } from './api/apiCall';
import { OrderOption, priceAscending, priceDescending } from './helpers/orderOptions';
import { ProductCard, ProductType } from './components/ProductCard';
import { Loader } from './components/Loader';
import { NoResultsHint } from './components/NoResultsHint';

function App() {
  const [data, setData] = useState<ProductType[]>([]);
  const [order, setOrder] = useState<OrderOption>(priceAscending);
  const [isAscending, setIsAscending] = useState(true);
  const [phrase, setPhrase] = useState('');
  const [loading, setLoading] = useState(false);

  const searchInput = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData([]);
      const data = phrase ? await fetchDataBySearch(phrase, order.key) : await fetchDefaultData(order.key);
      setData(data.elements)
      setLoading(false);
    }
    fetchData()
      .catch(console.error)
  }, [phrase, order])

  const handleOrder = () => {
    if (isAscending) {
      setIsAscending(false);
      setOrder(priceDescending);
    }
    if (!isAscending) {
      setIsAscending(true);
      setOrder(priceAscending);
    }
  };

  const noResults = () => {
    if (data.length) return true;
    return false;
  }

  const handleSearchValue = () => setPhrase(searchInput.current.value);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="#">Shopware Listing</a>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle btn-sm border border-secondary" type="button">
                <span className="mr-3 text-secondary" onClick={() => handleOrder()}>{order.label}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-9 col-lg-5">
            <input className="form-control" placeholder="Search" ref={(el) => (searchInput.current = el)} onChange={handleSearchValue} />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light h-100">
        <div className="container py-4">
          <div className="row g-3">
            {loading && <Loader />}
            {!noResults() && !loading && <NoResultsHint phrase={phrase} />}
            {data.map((product) => <ProductCard product={product} key={product._uniqueIdentifier} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
