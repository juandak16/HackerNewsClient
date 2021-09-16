import React from 'react';
import * as timeago from "timeago.js";

//Custom Styled Components
import { Card, ContentRight, ContentLeft, Head, Title, ClockImage, TextDateAndAuthor } from './styles';

import Clock from '../../Static/Assets/Images/clock.png';

export const PostCard = (props) => {
  const { author, date, title, url } = props;
  return (
    <Card>
      <ContentLeft href={url}>
        <Head>
          <ClockImage src={Clock} />
          <TextDateAndAuthor>
            {timeago.format(date)} by {author}
          </TextDateAndAuthor>
        </Head>

        <Title>{title}</Title>
      </ContentLeft>
      <ContentRight>
        corazon
      </ContentRight>
    </Card>
  )
}