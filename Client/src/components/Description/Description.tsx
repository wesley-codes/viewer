
import React,{useState} from 'react'
import { Article, ArticleSection } from '../../styles/Video.styles';



interface DescriptionProps{
    descp : string
}
const Description = ({descp}: DescriptionProps) => {
    const [readMore , setReadMore] = useState<boolean>(false)
    const toggleReadMore = () => {setReadMore(true)};

  return (
    <ArticleSection>
      <Article>
      {readMore ?  descp : descp.slice(0, 200) }
{
    descp.length > 200 && <span style={{color:"#9556cc", cursor:"pointer"}} onClick={toggleReadMore} >{!readMore &&  "...more"}</span>
}
      </Article>
     </ArticleSection>
  )
}

export default Description
