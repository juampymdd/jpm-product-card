# jpm-product-card

Este es un paquete de despliegue en NPM

### Juan Pablo Maddoni

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jpm-product-card'
```

```
<ProductCard 
                    product={ product }
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ( {reset, increaseBy, count, isMaxCountReached, maxCount} ) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>
```