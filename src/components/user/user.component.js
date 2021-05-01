export default function UserComponent(props) {

    let {address: {city, country, houseNumber, street}, age, id, list, name, set, status, clearFunc} = props;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{age} - {status.toString()}</h3>
            <p>{country} {city} {street} {houseNumber}</p>
            <button onClick={()=> set(list.filter(value=> value.id !== id))}>Clear</button>

        </div>
    );
}

