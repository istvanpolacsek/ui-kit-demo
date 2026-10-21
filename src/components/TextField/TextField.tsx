import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface TextFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showPlaceholder" | "showHeader" | "showButton" | "state"
> {
  showPlaceholder?: boolean;
  showHeader?: boolean;
  showButton?: boolean;
  state?: "Resting" | "Focused" | "Editing" | "Disabled";
}

const StyledRoot = styled.div<{
  $state: "Resting" | "Focused" | "Editing" | "Disabled";
}>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Resting":
          return css`
            color: ${theme["Text"]["Tertiary"]};
          `;
        case "Focused":
          return css`
            color: ${theme["Text"]["Tertiary"]};
          `;
        case "Editing":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Disabled":
          return css`
            color: ${"#7b7974"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledtextField = styled.div<{
  $state: "Resting" | "Focused" | "Editing" | "Disabled";
}>(
  ({ theme, $state }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.05);
    ${(() => {
      switch ($state) {
        case "Resting":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        case "Focused":
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        case "Editing":
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        case "Disabled":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledplaceholder = styled.span<{
  $state: "Resting" | "Focused" | "Editing" | "Disabled";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Resting":
          return css`
            color: ${theme["Text"]["Tertiary"]};
          `;
        case "Focused":
          return css`
            color: ${theme["Text"]["Tertiary"]};
          `;
        case "Editing":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Disabled":
          return css`
            color: ${"#7b7974"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledcursor = styled.div(
  () => css`
    position: absolute;
    left: 16px;
    top: 13px;
    width: 2px;
    height: 18px;
    display: flex;
    flex-direction: column;
    padding-top: 1px;
    padding-right: 0px;
    padding-bottom: 1px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 2px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styledline = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const Styledbutton = styled.span(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #131313;
    border-radius: 8px;
  `,
);

/** A text field component that supports placeholder text, an optional cursor indicator, and an optional action button. Supports resting, focused, editing, and disabled states. */
export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  function TextField(
    {
      showPlaceholder = true,
      showHeader = false,
      showButton = false,
      state = "Resting",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="textbox"
        aria-label="Text field"
        {...rest}
        ref={ref}
        $state={state}
      >
        <StyledtextField $state={state}>
          {showPlaceholder && (
            <Styledplaceholder $state={state}>
              {
                (
                  {
                    '["Resting"]': "Placeholder",
                    '["Focused"]': "Placeholder",
                    '["Editing"]': "hello",
                    '["Disabled"]': "Placeholder",
                  } as Record<string, string>
                )[JSON.stringify([state])]
              }
            </Styledplaceholder>
          )}
          {["Focused", "Editing"].includes(state) && (
            <Styledcursor>
              {["Focused", "Editing"].includes(state) && <Styledline />}
            </Styledcursor>
          )}
          {showButton && (
            <Styledbutton>
              {state === "Editing" && <Icon name={"Arrow Right"} size={24} />}
            </Styledbutton>
          )}
        </StyledtextField>
      </StyledRoot>
    );
  },
);
