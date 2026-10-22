import React from "react";
import styled, { css } from "styled-components";
import { ToolbarButtonNeutral } from "../ToolbarButtonNeutral";
import { ToolbarButtonStatus } from "../ToolbarButtonStatus";
import { Separator } from "../Separator";
import { ToolbarButtonDestructive } from "../ToolbarButtonDestructive";

export interface ToolbarThumbnail2Props extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "isCustomImage" | "type" | "mode"
> {
  isCustomImage?: boolean;
  type?: "Move" | "Edit";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 4px;
    padding-bottom: 0px;
    padding-left: 4px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 56px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            border-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledActionGroup = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToolbarButtonNeutral = styled.li(() => css``);

const StyledToolbarButtonNeutral2 = styled.li(() => css``);

const StyledSeparator = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledSeparator2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

/** A contextual toolbar displaying action buttons for a thumbnail element. Supports two modes (Light/Dark) and two types (Move/Edit), with optional custom image actions. Contains grouped neutral, status, and destructive toolbar buttons separated by dividers. */
export const ToolbarThumbnail2 = React.forwardRef<
  HTMLDivElement,
  ToolbarThumbnail2Props
>(function ToolbarThumbnail2(
  { isCustomImage = true, type = "Move", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="toolbar"
      aria-label="Thumbnail actions"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      {type === "Move" && (
        <StyledActionGroup>
          {type === "Move" && (
            <StyledToolbarButtonNeutral>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral>
          )}
          {type === "Move" && (
            <StyledToolbarButtonNeutral2>
              <ToolbarButtonNeutral
                hasIcon={false}
                state={"Default"}
                type={"Icon"}
                mode={"Dark"}
              />
            </StyledToolbarButtonNeutral2>
          )}
        </StyledActionGroup>
      )}
      {type === "Edit" && (
        <ToolbarButtonStatus
          hasIcon={false}
          type={"Text"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
      {type === "Edit" && (
        <StyledSeparator>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator>
      )}
      {type === "Edit" && (
        <ToolbarButtonNeutral
          hasIcon={false}
          state={"Default"}
          type={"Icon"}
          mode={"Dark"}
        />
      )}
      {isCustomImage && (
        <ToolbarButtonNeutral
          hasIcon={false}
          state={"Default"}
          type={"Icon"}
          mode={"Dark"}
        />
      )}
      {type === "Edit" && (
        <ToolbarButtonNeutral
          hasIcon={false}
          state={"Default"}
          type={"Icon"}
          mode={"Dark"}
        />
      )}
      {type === "Edit" && (
        <StyledSeparator2>
          <Separator angle={"Vertical"} mode={"Dark"} />
        </StyledSeparator2>
      )}
      {type === "Edit" && (
        <ToolbarButtonDestructive
          state={"Default"}
          type={"Icon"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
    </StyledRoot>
  );
});
