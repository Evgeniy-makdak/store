import { memo, FC } from 'react';
import { ProductModel } from '../../../product.model';
import styled from 'styled-components';

type ProductProps = ProductModel;

const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px !important;
  margin: 8px;
  max-width: 400px;
`;

const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-left: 16px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductCard: FC<ProductProps> = ({ title, image, price, description }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={title} />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
      <ProductPrice>${price}</ProductPrice>
    </ProductCardContainer>
  );
};

export default memo(ProductCard);