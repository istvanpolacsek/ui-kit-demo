import React from "react";
import styled, { css } from "styled-components";
import { ImageBoxTight } from "../ImageBoxTight";
import { TextBoxTight } from "../TextBoxTight";
import { UserButtonTextPrimary } from "../UserButtonTextPrimary";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";
import { FABSubtle } from "../FABSubtle";

export interface ColumnItemRegularProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  | "addedText"
  | "addedImage"
  | "hasButton"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "mode"
> {
  addedText?: boolean;
  addedImage?: boolean;
  hasButton?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Passive" | "Active";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.article(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 488px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageBoxTight = styled.div(
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

const StyledTextBoxTight2 = styled.div(
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

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -8px;
    width: 504px;
    height: 642px;
    border-radius: 6px;
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -72px;
    width: 200px;
    height: 56px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 508px;
    height: 646px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 502px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 646px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAnchor = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAnchor2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8.000244140625px;
    width: 24px;
    height: 24px;
  `,
);

const StyledMoveContainer = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0px;
    top: -0.000244140625px;
    width: 488px;
    height: 626px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 524px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 626px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFABSubtle = styled.li(() => css``);

const StyledFABSubtle2 = styled.li(() => css``);

/** A column item card component that can display an optional image, optional added text, a primary text block, and an optional action button. Supports interactive states (Default, Hover, Passive, Active) and light/dark modes, with editor-mode controls for reordering and resizing. */
export const ColumnItemRegular = React.forwardRef<
  HTMLElement,
  ColumnItemRegularProps
>(function ColumnItemRegular(
  {
    addedText = false,
    addedImage = true,
    hasButton = false,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="article" aria-label="Column item" {...rest} ref={ref}>
      {addedImage && (
        <StyledImageBoxTight>
          <ImageBoxTight
            snaps={false}
            aspectRatio={"1:1"}
            state={"Default"}
            mode={"Light"}
          />
        </StyledImageBoxTight>
      )}
      {addedText && (
        <TextBoxTight
          reachingLimit={false}
          hasToolbar={false}
          colorOverride={false}
          state={"Default"}
          mode={"Light"}
        />
      )}
      <StyledTextBoxTight2>
        <TextBoxTight
          reachingLimit={false}
          hasToolbar={false}
          colorOverride={false}
          state={"Default"}
          mode={"Light"}
        />
      </StyledTextBoxTight2>
      {hasButton && (
        <UserButtonTextPrimary
          reachingLimit={false}
          colorOverride={false}
          state={"Default"}
          roundness={"Sharp"}
          mode={"Light"}
        />
      )}
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Column item"}
            mode={"Light"}
          />
        </StyledToolbarModule>
      )}
      {state === "Active" && (
        <StyledResizeContainer>
          {state === "Active" && <StyledAnchor $mode={mode} />}
          {state === "Active" && <StyledAnchor2 $mode={mode} />}
        </StyledResizeContainer>
      )}
      {state === "Active" && (
        <StyledDrag>
          <Drag />
        </StyledDrag>
      )}
      {state === "Active" && (
        <StyledMoveContainer>
          {moveRight && (
            <StyledFABSubtle>
              <FABSubtle size={"Tiny"} mode={"Light"} />
            </StyledFABSubtle>
          )}
          {moveLeft && (
            <StyledFABSubtle2>
              <FABSubtle size={"Tiny"} mode={"Light"} />
            </StyledFABSubtle2>
          )}
        </StyledMoveContainer>
      )}
    </StyledRoot>
  );
});
