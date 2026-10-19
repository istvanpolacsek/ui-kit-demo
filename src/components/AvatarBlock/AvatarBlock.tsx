import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "../Avatar";

export interface AvatarBlockProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title" | "description"
> {
  title?: string;
  description?: string;
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 139px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.h3(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

const StyledDescription = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Tertiary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** Displays a user avatar alongside a title and description, typically used to represent a person or entity with brief identifying information. */
export const AvatarBlock = React.forwardRef<HTMLDivElement, AvatarBlockProps>(
  function AvatarBlock(
    { title = "Title", description = "Description", ...rest },
    ref,
  ) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <Avatar initials={"F"} type={"Image"} size={"Large"} shape={"Circle"} />
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledInfo>
      </StyledRoot>
    );
  },
);
