export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {

    const productId = (await params).productId;  
    return <h1>product details http change by id : {productId}</h1>;
}
                