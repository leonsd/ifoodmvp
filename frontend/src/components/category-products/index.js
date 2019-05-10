import React from 'react';
import { Title, Column, Box, Image } from 'rbx';

import 'styles/product.scss';

const CategoryProducts = ({ title, products }) => {
    return (
        <div id="product">
            <Title size="5">{title}</Title>
            <Column.Group gapSize={2} multiline>
                {products.map((product) => {
                    return (
                        <Column size="6" key={product.id}>
                            <Box>
                                <Column.Group>
                                    <Column size="three-fifths">
                                        <Title size="6">{product.name}</Title>
                                        <p>{product.description}</p>
                                        <span className="dashed_box">Preço ${product.price}</span>
                                    </Column>
                                    <Column size="two-fifths">
                                        <Image src={product.image_url} width="50%" />
                                    </Column>
                                </Column.Group>
                            </Box>
                        </Column>
                    );
                })}
            </Column.Group>
        </div>
    );
};

export default CategoryProducts;
