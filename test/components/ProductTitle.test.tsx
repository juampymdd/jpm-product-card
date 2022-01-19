
import React from 'React'

import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
    test('debe demostrar el componente correctamente con el tityulo personalizado', ()=>{
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ()=>(
                    <ProductTitle title="Hola mundo"/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
