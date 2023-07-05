function Contents(props) {
    return (
      <>
        <img src={props.image} alt="Medal badge with a star" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </>
    );
  }
  
  export default Contents;
  