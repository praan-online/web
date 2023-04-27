export default function Button({value,width,height}){
    return(
        <button 
        className={`text-lg px-4 py-2 ${width} ${height} font-semibold`}>
     {value}
     </button>)
}