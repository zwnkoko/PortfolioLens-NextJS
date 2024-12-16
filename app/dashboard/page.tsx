import Button from "../components/Button"
import Image from "next/image";

const holdings = {
    MU: 2, 
    AAPL: 3, 
    GOOGL: 5,
    NVDA: 8, 
    // AMD: 8, 
    // VOO: 1,
    // QQQM: 3,
    // PLTR: 10,
    // TSLA: 4,
    // MSFT: 6,
    // AMZN: 7,
    // META: 9,
    // NFLX: 2,
    // BABA: 5,
    // JPM: 3,
    // V: 4,
    // DIS: 6,
    // NKE: 7,
    // PFE: 8,
    // KO: 9
};

export default function Dashboard(){
    return(
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-base md:text-xl">
                    My Positions ({Object.keys(holdings).length})
                </h1>
                <Button label="Add transaction" id="add-transaction" animation={true}/>
            </div>

            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
      
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>
            <p>abcd</p>



            {/* <Image
                src="https://assets.parqet.com/logos/symbol/MSFT?format=jpg&size=300"
                alt="Picture of the author"
                width={32}
                height={32}
            />
            <table className="size-full text-center">
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th> Qty </th>
                    <th> Market Value </th>
                    <th> P/L </th>
                    <th> Portfolio % </th>
                </tr>
                </thead>
                <tbody>
            {Object.entries(holdings).map(([symbol, quantity]) => (
                <tr key={symbol}>
                    <td> {symbol} </td>
                    <td> {quantity} </td>
                    <td> $1000 </td>
                    <td> +23.4 </td>
                    <td> 70% </td>
                </tr>
            ))}
            </tbody>
            </table>
            <a href="https://parqet.com/api">Logos provided by Parqet</a> */}
        </>
    )
}