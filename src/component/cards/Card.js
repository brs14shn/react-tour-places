import "../../scss/_card.scss";


const Card = ({data}) => {
   

    return (
            <main>

        {data.map((item) => {
        const { title, desc, image } = item;

            return(
            <div className="card-container">
            <h1 className="title">{title}</h1>
            <img className="img" src={image} alt="img" />
            <p className="p">{desc}</p>
            </div>

           )})}

            </main>
           
      

    )
}

export default Card