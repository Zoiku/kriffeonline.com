export const ProductSpecification = ({ name, value }) => (
  <div className="product-overview-details-technical-specification">
    <div className="product-overview-details-technical-specification-name">
      {name}
    </div>
    <div className="product-overview-details-technical-specification-value">
      {value}
    </div>
  </div>
);
