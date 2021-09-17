//Custom Styled Components
import { Text, Content, Image } from './styles'

import Angular from "../../Static/Assets/Images/angular.png";
import React from "../../Static/Assets/Images/react.png";
import Vuejs from "../../Static/Assets/Images/vuejs.png";

export const newsType = [
  {
    value: "angular",
    label: (
      <Content>
        <Image src={Angular} alt="Angular logo" />
        <Text>
          Angular
        </Text>
      </Content>
    ),
  },
  {
    value: "react",
    label: (
      <Content>
        <Image src={React} alt="Reacts logo" />
        <Text>
          Reacts
        </Text>
      </Content>
    ),
  },
  {
    value: "vue",
    label: (
      <Content>
        <Image src={Vuejs} alt="Vuejs logo" />
        <Text>
          Vuejs
        </Text>
      </Content>
    ),
  },
]

export const tabs = [
  { title: "All", value: "all" },
  { title: "My faves", value: "faves" }
]

export const getKey = (item) => {
  return `${item.created_at}-${item.author}`;
}