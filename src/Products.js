function Products() {
    const productsFromDb = [
      {
        title: "Paillasson",
        price: 20,
        isPublished: true,
      },
      {
        title: "Aspirateur",
        price: 340,
        isPublished: true,
      },
      {
        title: "Lampe",
        price: 50,
        isPublished: true,
      },
      {
        title: "Casque vélo",
        price: 60,
        isPublished: true,
      },
    ];
  
    return (
      <main>
        {productsFromDb.map((product) => {
            return (
                <>
                    {article.isPublished && (
                        <article>
                            <h2>{product.title}</h2>
                            <p>{product.price} €</p>
                        </article>
                    )}
                </>                     
            )
        })}
      </main>
    );
  }
  
  export default Products;