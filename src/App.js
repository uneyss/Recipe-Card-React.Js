import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "İskender",
    date: "30 Mart 2021, Salı",
    image: "https://im.haberturk.com/2020/11/21/ver1605969860/2877487_810x458.jpg",
    description:
      "İskender kebap veya iskender döner, Bursa yöresinin meşhur kebap yemeklerinden biridir. 1867 yılında Kayhan Çarşısı'nda başlamıştır. Aslında temel malzemesi döner olsa da iskenderi iskender yapan, üstündeki tereyağ, domates sosu, yanındaki yoğurt ve altındaki yağlı pide parçalarıdır. Ayrıca iskenderin eti herhangi bir dönerin etinden farklıdır. İskender kebabının yapıldığı et, Uludağ kekiği ile beslenen koçlardan elde edilir. İskender etinin yağı daha az olur. Kullanılan domates sosu ve yoğurt da kaliteyi çok etkilemektedir.",
  };

  const likeCount = 193;
  const isLiked = false;



  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
