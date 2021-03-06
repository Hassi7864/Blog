import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';

export const Post = ({ title, body, image}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'hel9lmqd',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);
  return (
    <div>
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.body}>
          <BlockContent blocks={body} />
        </div>

        </div>
      </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }
 /**
  *  For getting the data from sanity we like to go for a http request
  *  We using query as to get the specific data we want 
  */
  const query = encodeURIComponent(`*[ _type == "boring" && slug.current == "${pageSlug}" ]`);
  const url = `https://hel9lmqd.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      
      }
    }
  }
};

export default Post;