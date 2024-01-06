import requests from "../Request";
import Main from "../component/Main";
import Row from "../component/Row";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID = '1' title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID = '2' title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID = '3' title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID = '4' title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID = '5' title="Upcoming" fetchURL={requests.requestUpcoming} />
    </div>
  );
};

export default Home;
