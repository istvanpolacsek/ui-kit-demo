import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTextUnderlay } from "../TextBoxTextUnderlay";
import {
  UserButtonTextPrimary,
  type UserButtonTextPrimaryProps,
} from "../UserButtonTextPrimary";
import { ToolbarModule } from "../ToolbarModule";
import { FABSubtle } from "../FABSubtle";
import { Drag } from "../Drag";
import { TooltipCharacterLimit } from "../TooltipCharacterLimit";

export interface TextBoxRegularProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasButton"
  | "reachingLimit"
  | "aboveImage"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "mode"
  | "userButtonTextPrimaryReachingLimit"
  | "colorOverride"
  | "userButtonTextPrimaryState"
  | "roundness"
  | "userButtonTextPrimaryMode"
> {
  hasButton?: boolean;
  reachingLimit?: boolean;
  aboveImage?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Editing" | "Passive";
  mode?: "Dark" | "Light";
  userButtonTextPrimaryReachingLimit?: UserButtonTextPrimaryProps["reachingLimit"];
  colorOverride?: UserButtonTextPrimaryProps["colorOverride"];
  userButtonTextPrimaryState?: UserButtonTextPrimaryProps["state"];
  roundness?: UserButtonTextPrimaryProps["roundness"];
  userButtonTextPrimaryMode?: UserButtonTextPrimaryProps["mode"];
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;
    width: 488px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Color 2"]};
  `,
);

const StyledTextBoxTextUnderlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 488px;
    height: 114px;
  `,
);

const StyledText = styled.p(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -8px;
    width: 504px;
    height: 130px;
    border-radius: 6px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 508px;
    height: 134px;
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
    height: 134px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAnchor = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor2 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -72px;
    width: 314px;
    height: 56px;
  `,
);

const StyledMoveContainer = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 488px;
    height: 114px;
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
    height: 114px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8px;
    width: 24px;
    height: 24px;
  `,
);

const StyledTooltipCharacterLimit = styled.div(
  () => css`
    position: absolute;
    right: -10px;
    bottom: -44px;
    width: 50px;
    height: 26px;
  `,
);

/** A rich text box component supporting multiple states (Default, Hover, Active, Editing, Passive) and modes (Light, Dark). It can optionally include a button, a toolbar, resize handles, move controls, drag interaction, and a character limit tooltip. Typically used as an editable content block within a layout. */
export const TextBoxRegular = React.forwardRef<
  HTMLDivElement,
  TextBoxRegularProps
>(function TextBoxRegular(
  {
    hasButton = false,
    reachingLimit = false,
    aboveImage = false,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    mode = "Light",
    userButtonTextPrimaryReachingLimit = false,
    colorOverride = false,
    userButtonTextPrimaryState = "Default",
    roundness = "Sharp",
    userButtonTextPrimaryMode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="textbox" aria-label="Text box" {...rest} ref={ref}>
      {aboveImage && (
        <StyledTextBoxTextUnderlay>
          <TextBoxTextUnderlay hasModuleExtension={"False"} />
        </StyledTextBoxTextUnderlay>
      )}
      <StyledText>
        {
          "This is your heading\nYou can write here as much as you want, this text will always look nice, whether you write longer paragraphs or just a few words. Click here and try it out."
        }
      </StyledText>
      {hasButton && (
        <UserButtonTextPrimary
          reachingLimit={userButtonTextPrimaryReachingLimit}
          colorOverride={colorOverride}
          state={userButtonTextPrimaryState}
          roundness={roundness}
          mode={userButtonTextPrimaryMode}
        />
      )}
      {["Hover", "Active", "Editing", "Passive"].includes(state) && (
        <StyledContainer />
      )}
      {["Active", "Editing"].includes(state) && (
        <StyledResizeContainer>
          {["Active", "Editing"].includes(state) && (
            <StyledAnchor $mode={mode} />
          )}
          {["Active", "Editing"].includes(state) && (
            <StyledAnchor2 $mode={mode} />
          )}
        </StyledResizeContainer>
      )}
      {["Active", "Editing"].includes(state) && (
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Text box"}
            mode={"Light"}
          />
        </StyledToolbarModule>
      )}
      {["Active", "Editing"].includes(state) && (
        <StyledMoveContainer>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
      )}
      {((state === "Active" && mode === "Dark") ||
        (state === "Editing" && mode === "Dark")) && (
        <StyledDrag>
          <Drag />
        </StyledDrag>
      )}
      {reachingLimit && (
        <StyledTooltipCharacterLimit>
          <TooltipCharacterLimit mode={"Light"} />
        </StyledTooltipCharacterLimit>
      )}
    </StyledRoot>
  );
});
