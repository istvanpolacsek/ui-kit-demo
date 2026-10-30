import React from "react";
import styled, { css } from "styled-components";
import { ToolbarModule } from "../ToolbarModule";
import { TooltipCharacterLimit } from "../TooltipCharacterLimit";

export interface TextBoxTextOverflowProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasToolbar" | "reachingLimit" | "mode"
> {
  hasToolbar?: boolean;
  reachingLimit?: boolean;
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

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: 85.5px;
    top: -68px;
    width: 317px;
    height: 56px;
  `,
);

const StyledText = styled.p(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: -4px;
    top: -4px;
    width: 496px;
    height: 152px;
    background-color: ${theme["Color 5"]};
    border-radius: 2px;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.12),
      0px 16px 24px 0px rgba(0, 0, 0, 0.08);
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

/** A text area component that displays overflowing text content, with optional toolbar and character limit tooltip. Supports light and dark display modes. */
export const TextBoxTextOverflow = React.forwardRef<
  HTMLDivElement,
  TextBoxTextOverflowProps
>(function TextBoxTextOverflow(
  { hasToolbar = false, reachingLimit = false, mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="textbox"
      aria-label="Text input area"
      aria-describedby="character-limit-tooltip"
      {...rest}
      ref={ref}
    >
      {hasToolbar && (
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Simple text"}
            mode={"Light"}
          />
        </StyledToolbarModule>
      )}
      <StyledText>
        {
          "Start describing your topic in a few words. Make sure to stay concise and be professional. You can write about your design process, skills and expertise, or your awards and recognitions. If you have client testimonials, include them here. By the way this text box has more characters than the maximum rows you can write, so it is only visible when editing."
        }
      </StyledText>
      <StyledContainer />
      {reachingLimit && (
        <StyledTooltipCharacterLimit>
          <TooltipCharacterLimit mode={"Light"} />
        </StyledTooltipCharacterLimit>
      )}
    </StyledRoot>
  );
});
