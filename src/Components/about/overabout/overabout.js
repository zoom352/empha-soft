



const Overabout = ({result, ...props}) => {

    return <div onClick={() => result()}>
            <p>{props.author}</p>
            <br/>
            <p>{props.urlToImage}</p>
            <br/>
            <p>{props.content}</p>
    </div>
}


// const Overabout = (props) => {

//     const {allTheDates} = props

//     if(!allTheDates) return <p>nothing</p>

//     return <div>
//         {allTheDates.map((allTheDate) => 
//                    <p>{allTheDate.articles.title}</p>)}
//     </div>
// }

export default Overabout;


// || allTheDates.length === 0