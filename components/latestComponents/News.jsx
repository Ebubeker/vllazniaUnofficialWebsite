import React, {useState} from 'react';
import {section, title, bigNews, content, theme, excerpt,TwoNews, ThreeNews, restOfNews, newsContainer, button } from './News.module.css';
import Link from 'next/link';

const News = ({news}) => {

  const [limit, setLimit] = useState(14);

  const enlargenLimit = () => {
    if(news.length !== limit && news.length > limit){
      setLimit(limit + 4)
    }else{
      alert('post limit is reached')
    }
  }

  return (
      <div className={section}>
          <p className={title}>News About The Team</p>
          {news.map((newsIt, i) => {
              if(i < 1){
                  return(
                    <Link key={i} href={`/news/${newsIt.node.slug}`}>
                      <div className={bigNews}>
                          <div style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                              <div className={content}>
                                  <p className={theme}>{newsIt.node.title}</p>
                                  <p className={excerpt}>{newsIt.node.excerpt}</p>
                              </div>
                          </div>
                      </div>
                    </Link>
                  );
              }
          })}
          <div className={TwoNews}>
            {news.map((newsIt, i)=>{
                if(i < 3 && i >= 1){
                  return(
                    <Link key={i} href={`/news/${newsIt.node.slug}`}>
                      <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                          <div className={content}>
                              <p className={theme}>{newsIt.node.title}</p>
                              <p className={excerpt}>{newsIt.node.excerpt}</p>
                          </div>
                      </div>
                    </Link>
                  )
                }
            })}
          </div>
          <div className={ThreeNews}>
            {news.map((newsIt, i)=>{
                if(i < 6 && i >= 3){
                  return(
                    <Link key={i} href={`/news/${newsIt.node.slug}`}>
                      <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                          <div className={content}>
                              <p className={theme}>{newsIt.node.title}</p>
                              <p className={excerpt}>{newsIt.node.excerpt}</p>
                          </div>
                      </div>
                    </Link>
                  )
                }
            })}
          </div>
          <div className={restOfNews}>
            {news.map((newsIt, i)=>{
                if(i >= 6 && i < limit){
                  return(
                    <Link key={i} href={`/news/${newsIt.node.slug}`}>
                      <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                          <div className={content}>
                              <p className={theme}>{newsIt.node.title}</p>
                              <p className={excerpt}>{newsIt.node.excerpt}</p>
                          </div>
                      </div>
                    </Link>
                  )
                }
            })}
          </div>
          <div className={button} onClick={enlargenLimit}>Load more News</div>
      </div>
  );
};

export default News;
