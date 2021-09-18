import React from 'react';
import * as timeago from "timeago.js";

//Custom Styled Components
import {
  Card,
  ContentRight,
  ContentLeft,
  Head,
  Title,
  ClockImage,
  TextDateAndAuthor,
  HeartImage
} from './styles';

import Clock from '../../Static/Assets/Images/clock.png';
import HeartEmpty from '../../Static/Assets/Images/heartEmpty.png';
import Heart from '../../Static/Assets/Images/heart.png';

export const PostCard = (props) => {
  const { item, faved, manageFave } = props;
  const { author, created_at, story_title, story_url } = item;

  return (
    <Card data-testid="home-post-card">
      <ContentLeft href={story_url} target="_blank">
        <Head>
          <ClockImage src={Clock} />
          <TextDateAndAuthor>
            {timeago.format(created_at)} by {author}
          </TextDateAndAuthor>
        </Head>
        <Title>{story_title}</Title>
      </ContentLeft>

      <ContentRight>
        <HeartImage data-testid="home-post-card-heart" onClick={() => { manageFave(item) }} src={faved ? Heart : HeartEmpty} />
      </ContentRight>
    </Card>
  )
}