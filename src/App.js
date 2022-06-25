
import Card from "./component/cards/Card";
import Header from "./component/header/Header";
import data from "./helper/data";
import "./scss/App.scss";


const App = () => {
    return (

        <>
            <Header />
            <Card data={data} />

        </>


    )
}

export default App