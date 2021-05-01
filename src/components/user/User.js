export default function User({item, search}) {
    return (
        <div>
            {item.id} --
            {item.username} --
            {item.email};
            <button onClick={()=> search(item.id)}>Details</button>
        </div>
    );
}