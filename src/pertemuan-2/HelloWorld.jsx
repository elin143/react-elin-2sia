export default function HelloWorld(){
        const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <img src="img/image.png" alt="logo" width={300}/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>

            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Elin" 
	            nim="2457301041"
	            tanggal="2023/03/10"
                />
            <UserCard
                nama="Seonghyeon" 
	            nim="24573"
	            tanggal="2023/03/11"
                />
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small> Salam dari binjai 😘😘😘 </small>
    )
}

function QuoteText() {
    const text = "mulutmu harimaumu";
    const text2 = "Aku mw jadi manusia serigala";
    return (
        <div className="card">
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}


function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>

        </div>
    )
}