interface MyProps {
  title: string;
  text: string;
  price: string;
  imgURL: string;
}
export function Card({ title, text, price, imgURL }: MyProps) {
  return (
    <main className="card-main">
      <article className="card-container">
        <div className="card">
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-h1">
              <strong>{title}</strong>
            </h1>
            <p className="card-text">{text}</p>
            <p className="card-price">{price}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
