import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTight } from "../TextBoxTight";
import { UserInputField } from "../UserInputField";
import { UserButtonTextPrimary } from "../UserButtonTextPrimary";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";
import { FABSubtle } from "../FABSubtle";

export interface FormBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "hasText" | "moveLeft" | "moveRight" | "state" | "mode"
> {
  hasText?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.form(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledForm = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledUserInputField = styled.div(
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

const StyledUserInputField2 = styled.div(
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

const StyledUserInputField3 = styled.div(
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
    width: 586px;
    height: 652px;
    border-radius: 6px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 590px;
    height: 656px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 584px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 656px;
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
    width: 181px;
    height: 56px;
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

const StyledMoveContainer = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 636px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 606px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 636px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A form box component containing a group of user input fields and a submit button, with optional descriptive text, resize handles, toolbar, drag handle, and navigation controls for repositioning the form within a layout. */
export const FormBox = React.forwardRef<HTMLFormElement, FormBoxProps>(
  function FormBox(
    {
      hasText = false,
      moveLeft = true,
      moveRight = true,
      state = "Default",
      mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot role="form" aria-label="Form box" {...rest} ref={ref}>
        {hasText && (
          <TextBoxTight
            reachingLimit={false}
            hasToolbar={false}
            colorOverride={false}
            state={"Default"}
            mode={"Light"}
          />
        )}
        <StyledForm>
          <StyledUserInputField>
            <UserInputField state={"Empty"} />
          </StyledUserInputField>
          <StyledUserInputField2>
            <UserInputField state={"Empty"} />
          </StyledUserInputField2>
          <StyledUserInputField3>
            <UserInputField state={"Empty"} />
          </StyledUserInputField3>
        </StyledForm>
        <UserButtonTextPrimary
          reachingLimit={false}
          colorOverride={false}
          state={"Default"}
          roundness={"Sharp"}
          mode={"Light"}
        />
        {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
        {state === "Active" && (
          <StyledResizeContainer>
            {state === "Active" && <StyledAnchor $mode={mode} />}
            {state === "Active" && <StyledAnchor2 $mode={mode} />}
          </StyledResizeContainer>
        )}
        {state === "Active" && (
          <StyledToolbarModule>
            <ToolbarModule
              isCustomImage={true}
              type={"Form box"}
              mode={"Light"}
            />
          </StyledToolbarModule>
        )}
        {state === "Active" && (
          <StyledDrag>
            <Drag />
          </StyledDrag>
        )}
        {state === "Active" && (
          <StyledMoveContainer>
            {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
            {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
          </StyledMoveContainer>
        )}
      </StyledRoot>
    );
  },
);
