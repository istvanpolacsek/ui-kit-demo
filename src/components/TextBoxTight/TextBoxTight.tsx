import React from "react";
import styled, { css } from "styled-components";
import { ColorOverride } from "../ColorOverride";
import { ToolbarModule } from "../ToolbarModule";
import { TooltipCharacterLimit } from "../TooltipCharacterLimit";
import { TextBoxTextOverflow } from "../TextBoxTextOverflow";

export interface TextBoxTightProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasToolbar" | "reachingLimit" | "colorOverride" | "state" | "mode"
> {
  hasToolbar?: boolean;
  reachingLimit?: boolean;
  colorOverride?: boolean;
  state?: "Default" | "Hover" | "Active" | "Active overflow";
  mode?: "Dark" | "Light";
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

const StyledColorOverride = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 488px;
    height: 96px;
  `,
);

const StyledText = styled.p(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -4px;
    top: -4px;
    width: 496px;
    height: 104px;
    border-radius: 2px;
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: 85.5px;
    top: -68px;
    width: 317px;
    height: 56px;
  `,
);

const StyledTooltipCharacterLimit = styled.div(
  () => css`
    position: absolute;
    right: -6px;
    bottom: -40px;
    width: 50px;
    height: 26px;
  `,
);

const StyledTextBoxTextOverflow = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 488px;
    height: 144px;
  `,
);

/** A tight text box component for multi-line text input with optional toolbar, character limit tooltip, and color override support. Supports default, hover, active, and overflow states in both light and dark modes. */
export const TextBoxTight = React.forwardRef<HTMLDivElement, TextBoxTightProps>(
  function TextBoxTight(
    {
      hasToolbar = false,
      reachingLimit = false,
      colorOverride = false,
      state = "Default",
      mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="textbox"
        aria-label="Text input area"
        {...rest}
        ref={ref}
      >
        {colorOverride && (
          <StyledColorOverride>
            <ColorOverride mode={"Light"} />
          </StyledColorOverride>
        )}
        <StyledText>
          {
            "Start describing your topic in a few words. Make sure to stay concise and be professional. You can write about your design process, skills and expertise, or your awards and recognitions. If you have client testimonials, include them here."
          }
        </StyledText>
        {["Hover", "Active", "Active overflow"].includes(state) && (
          <StyledContainer />
        )}
        {hasToolbar && (
          <StyledToolbarModule>
            <ToolbarModule
              isCustomImage={true}
              type={"Simple text"}
              mode={"Light"}
            />
          </StyledToolbarModule>
        )}
        {reachingLimit && (
          <StyledTooltipCharacterLimit>
            <TooltipCharacterLimit mode={"Light"} />
          </StyledTooltipCharacterLimit>
        )}
        {state === "Active overflow" && (
          <StyledTextBoxTextOverflow>
            <TextBoxTextOverflow
              reachingLimit={false}
              hasToolbar={false}
              mode={"Light"}
            />
          </StyledTextBoxTextOverflow>
        )}
      </StyledRoot>
    );
  },
);
