import axios from 'axios';
import { useEffect, useState } from 'react'
import s from './about.module.css'
import Overabout from './overabout/overabout'


const About = (props) => {

    
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);
      
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-07-01&sortBy=publishedAt&apiKey=33f02f375f8b455a82cddfa1688de455')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setArticles(result.articles);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const result = (i) =>
        test.filter((tes) => tes[i] )

    let test = articles
        .map(article => {
            return <Overabout key={article.id} author={article.author}
                urlToImage={article.urlToImage} content={article.content}
                result={result}/>
        })
        
    
    
    if (error) {
        return <div>
            mistake: {error.message}
        </div>
    } else if (!isLoaded) {
        return <div>loading...</div>
    } else {
        return (<div className='wrapper'>
            
            {  test
                // (
                //     <div className={s.item} key={article.id}>
                //        <p>{article.author}</p>
                //         <br/>
                //         <p>{article.urlToImage}</p>
                //         <br/>
                //         <p>{article.content}</p>
                //     </div>
                // )
            }
            
            </div>
        )
    }
}



export default About;



// 33f02f375f8b455a82cddfa1688de455, https://jsonplaceholder.typicode.com/posts