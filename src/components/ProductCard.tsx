import { emptyData } from "../helpers/emptyData";

export type ProductType = {
  name: string;
  description: string;
  calculatedPrice: {
    totalPrice: string;
  }
  _uniqueIdentifier: string;
}

export const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4" key={product._uniqueIdentifier}>
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className="card-title small fw-bold">{product.name ? product.name : emptyData()}</p>
            <p className="card-text small">{product.description ? product.description : emptyData()}</p>
          </div>
          <div className='mt-3'>
            <p className="card-text fw-bold small">Cena&nbsp;
              <span className='fw-normal'>{product.calculatedPrice.totalPrice ? `${product.calculatedPrice.totalPrice} zł` : emptyData()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};