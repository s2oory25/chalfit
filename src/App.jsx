import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">CHALFIT</div>

        <nav className="nav">
          <a href="#">셀럽픽</a>
          <a href="#">종류</a>
          <a href="#">얼굴형</a>
          <a href="#">스타일</a>
          <a href="#">고객센터</a>
        </nav>

        <div className="header-right">
          <button>로그인</button>
          <button>장바구니</button>
        </div>
      </header>

      {/* Main */}
      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="hero-small">AI PERSONALIZED SUNGLASSES</p>

            <h1>
              나에게 딱 맞는
              <br />
              선글라스를 찾아보세요.
            </h1>

            <p className="hero-description">
              AI가 얼굴형과 스타일을 분석하여
              <br />
              나에게 어울리는 선글라스를 추천해드립니다.
            </p>

            <button className="ai-button">
              AI FIT 시작하기
            </button>
          </div>
        </section>

        {/* Product Section */}
        <section className="products">
          <div className="section-title">
            <p>CHALFIT'S PICK</p>
            <h2>추천 선글라스</h2>
          </div>

          <div className="product-list">
            <div className="product-card">
              <div className="product-image">
                SUNGLASSES
              </div>

              <p className="brand">GENTLE MONSTER</p>
              <h3>New Her 01</h3>
              <p className="price">₩320,000</p>
            </div>

            <div className="product-card">
              <div className="product-image">
                SUNGLASSES
              </div>

              <p className="brand">GENTLE MONSTER</p>
              <h3>Lang 01</h3>
              <p className="price">₩300,000</p>
            </div>

            <div className="product-card">
              <div className="product-image">
                SUNGLASSES
              </div>

              <p className="brand">OAKLEY</p>
              <h3>Holbrook</h3>
              <p className="price">₩210,000</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;