import Card from './Card'
function Tours({ tours, removeTour, deleteAll }) {

    return (
      <div className="container">
        <div className='extra'>
          <h2 className="title"> Plane with Prem </h2>
          <button className="btn-delete" onClick={deleteAll}>
            Delete All Tours
          </button>
        </div>
        <div className="cards">
          {tours.map((tour) => {
            return (
              <Card
                {...tour}
                removeTour={removeTour}
                deleteAll={deleteAll}
              ></Card>
            );
          })}
        </div>
      </div>
    );
    
}
export default Tours;
