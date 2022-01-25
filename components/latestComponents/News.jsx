import React from 'react';
import {section, title, bigNews, content, theme, excerpt,TwoNews, ThreeNews, restOfNews, newsContainer, button } from './News.module.css';

const News = ({news}) => {

  const {edges} = news;

  return (
      <div className={section}>
          <p className={title}>News About The Team</p>
          {edges.map((newsIt, i) => {
              if(i < 1){
                  return(
                    <div key={i} className={bigNews}>
                        <div style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                            <div className={content}>
                                <p className={theme}>{newsIt.node.title}</p>
                                <p className={excerpt}>{newsIt.node.excerpt}</p>
                            </div>
                        </div>
                    </div>
                  );
              }
          })}
          <div className={TwoNews}>
            {edges.map((newsIt, i)=>{
                if(i < 3 && i >= 1){
                  return(
                    <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                        <div className={content}>
                            <p className={theme}>{newsIt.node.title}</p>
                            <p className={excerpt}>{newsIt.node.excerpt}</p>
                        </div>
                    </div>
                  )
                }
            })}
          </div>
          <div className={ThreeNews}>
            {edges.map((newsIt, i)=>{
                if(i < 6 && i >= 3){
                  return(
                    <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                        <div className={content}>
                            <p className={theme}>{newsIt.node.title}</p>
                            <p className={excerpt}>{newsIt.node.excerpt}</p>
                        </div>
                    </div>
                  )
                }
            })}
          </div>
          <div className={restOfNews}>
            {edges.map((newsIt, i)=>{
                if(i >= 6){
                  return(
                    <div key={i} style={{backgroundImage: `url("${newsIt.node.featuredImage.url}")`}} className={newsContainer}>
                        <div className={content}>
                            <p className={theme}>{newsIt.node.title}</p>
                            <p className={excerpt}>{newsIt.node.excerpt}</p>
                        </div>
                    </div>
                  )
                }
            })}
          </div>
          <div className={button}>Load more News</div>
      </div>
  );
};

export default News;
