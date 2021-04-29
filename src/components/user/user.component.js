export default function UserComponent(props) {

    let {address: {city, country, houseNumber, street}, age, name, status} = props;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{age} - {status.toString()}</h3>
            <p>{country} {city} {street} {houseNumber}</p>

        </div>
    );
}