export default function Display({ display }) {
    return (
        <main>
            {display &&
                display.map((data) => {
                    const { id, prompt, message } = data;
                    return (
                        <div key={id}>
                            <div>{prompt}</div>
                            <pre>{message}</pre>
                        </div>
                    );
                })}
        </main>
    );
}
