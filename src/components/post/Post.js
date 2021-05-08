export default function Post({item, readPost}) {
    return (
        <div>
            <h2>id: {item.id};</h2>
            <h4>title: {item.title};</h4>
            <button onClick={() => readPost(item.id)}>read</button>
        </div>
    );
}