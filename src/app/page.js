import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link className="nav-link" href="">
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="">
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>

            {data.articles.map((article) => (
              <div className="article-preview" key={article.id}>
                <div className="article-meta">
                  <Link href="/profile/eric-simons">
                    <Image
                      alt="eric-simons-pic"
                      src="http://i.imgur.com/Qr71crq.jpg"
                    />
                  </Link>
                  <div className="info">
                    <Link href="/profile/eric-simons" className="author">
                      Eric Simons
                    </Link>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 29
                  </button>
                </div>
                <Link href={`/articles/${article.id}`} className="preview-link">
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    <li className="tag-default tag-pill tag-outline">
                      realworld
                    </li>
                    <li className="tag-default tag-pill tag-outline">
                      implementations
                    </li>
                  </ul>
                </Link>
              </div>
            ))}

            <ul className="pagination">
              <li className="page-item active">
                <Link className="page-link" href="">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  2
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Link href="" className="tag-pill tag-default">
                  programming
                </Link>
                <Link href="" className="tag-pill tag-default">
                  javascript
                </Link>
                <Link href="" className="tag-pill tag-default">
                  emberjs
                </Link>
                <Link href="" className="tag-pill tag-default">
                  angularjs
                </Link>
                <Link href="" className="tag-pill tag-default">
                  react
                </Link>
                <Link href="" className="tag-pill tag-default">
                  mean
                </Link>
                <Link href="" className="tag-pill tag-default">
                  node
                </Link>
                <Link href="" className="tag-pill tag-default">
                  rails
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/articles`, {
    cache: "no-store",
  });
  return res.json();
}

export default Home;
