import React from 'react';
import {image, content, title, body, imageInContent, h3, p, h4, date} from './SingleNews.module.css';
import moment from 'moment';

const SingleNews = ({news}) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <p key={index} className={h3}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'paragraph':
                return <p key={index} className={p}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <p key={index} className={h4}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        className={imageInContent}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

  return (
    <div>
        <img src={news.featuredImage.url} alt={news.title} className={image} />
        <div className={content}>
            <p className={title}>{news.title}</p>
            {news.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
            })}
            <p className={date}>Posted: {moment(news.createdAt).format('MMM DD, YYYY')}</p>
        </div>
    </div>
  );
};

export default SingleNews;
