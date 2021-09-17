import React from "react";
import { render, screen } from "@testing-library/react";
import { PostCard } from "./index";

const postCardMock = {
  faved: false,
  item: {
    author: "Pedro",
    created_at: "2021-09-17T18:43:35.000Z",
    story_id: 28564021,
    story_title: "A Go Package for Building Progressive Web Apps",
    story_url: "https://go-app.dev/"
  },
  manageFave: jest.fn(),
}

describe("PostCard", () => {
  test("should render the PostCard component", () => {
    render(
      <PostCard
        item={postCardMock.item}
        faved={postCardMock.faved}
        manageFave={postCardMock.manageFave}
      />
    );

    expect(screen.getByTestId("home-post-card")).toBeInTheDocument();
  });
});
