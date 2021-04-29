import './character.style.css'
function CharacterComponent(props) {
    return <div>

        <h2>
            {props.description}
        </h2>

        <img
            src={props.image_scr}
            alt={props.image_alt}/>

    </div>;
}

export default CharacterComponent;