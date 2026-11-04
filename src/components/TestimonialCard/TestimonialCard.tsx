import React from "react";
import styled, { css } from "styled-components";
import { TextHeading } from "../TextHeading";
import { AvatarBlock, type AvatarBlockProps } from "../AvatarBlock";

export interface TestimonialCardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "title" | "description"
> {
  title?: AvatarBlockProps["title"];
  description?: AvatarBlockProps["description"];
}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledTextHeading = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A testimonial card component that displays a heading quote or statement alongside an avatar block representing the person providing the testimonial. */
export const TestimonialCard = React.forwardRef<
  HTMLElement,
  TestimonialCardProps
>(function TestimonialCard(
  { title = "Title", description = "Description", ...rest },
  ref,
) {
  return (
    <StyledRoot role="article" aria-label="Testimonial" {...rest} ref={ref}>
      <StyledTextHeading>
        <TextHeading text={"“Quote”"} />
      </StyledTextHeading>
      <AvatarBlock title={title} description={description} />
    </StyledRoot>
  );
});
