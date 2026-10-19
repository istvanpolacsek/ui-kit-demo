import React from "react";
import styled, { css } from "styled-components";
import { TextStrong } from "../TextStrong";

export interface TextLinkListProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "hasTitle" | "density" | "slot"
> {
  hasTitle?: boolean;
  density?: "Default" | "Tight";
  slot?: React.ReactNode;
}

const StyledRoot = styled.nav<{ $density: "Default" | "Tight" }>(
  ({ $density }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($density) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Tight":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.header<{ $density: "Default" | "Tight" }>(
  ({ $density }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($density) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 16px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Tight":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSlot = styled.div<{ $density: "Default" | "Tight" }>(
  ({ $density }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($density) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Tight":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A navigational list of text links, optionally preceded by a title. Supports variable density and accepts a slot of Text Link List Item components. */
export const TextLinkList = React.forwardRef<HTMLElement, TextLinkListProps>(
  function TextLinkList(
    { hasTitle = true, density = "Default", slot, ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="Text link list"
        {...rest}
        ref={ref}
        $density={density}
      >
        {hasTitle && (
          <StyledTitle $density={density}>
            <TextStrong text={"Text Strong"} />
          </StyledTitle>
        )}
        <StyledSlot $density={density}>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);
