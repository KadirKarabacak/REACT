import Counter from "../components/Counter";

export default async function Page() {
    //! Only available in Server Components
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <h1>Cabins Page</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <Counter />
        </div>
    );
}
