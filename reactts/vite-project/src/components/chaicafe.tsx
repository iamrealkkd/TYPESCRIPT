interface Chaicardprop{
         name: string;
         price: number;
         isSpeacial: boolean;
}

export function chaicafe({name, price, isSpecial = false}){
    return (
        <article>
            <h2>
                {
                    {name} {isSpecial && <span>⭐</span>} 
                }
            </h2>
            <p>
                {price}
            </p>
        </article>
    )
}