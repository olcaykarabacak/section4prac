import Header from './Header';
import Contents from './Contents';

function Concepts(props) {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <li className="concept">
          <Contents
            image={props.items[0].image}
            title={props.items[0].title}
            description={props.items[0].description}
          />
          </li>
          <li className='concept'>
          <Contents
            image={props.items[1].image}
            title={props.items[1].title}
            description={props.items[1].description}
          />
          </li>
          <li className='concept'>
          <Contents
            image={props.items[2].image}
            title={props.items[2].title}
            description={props.items[2].description}
          />
          </li>
      </ul>
    </div>
  );
}

export default Concepts;
