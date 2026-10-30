import React from "react";
import styled, { css } from "styled-components";

export interface TooltipMediumProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledBody = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHereComesTheExplanationProvidedByTheTooltip = styled.p(
  () => css`
    color: #eeeeee;
  `,
);

const StyledHereComesTheExplanationProvidedByTheToopltip = styled.p(
  () => css`
    color: #262626;
  `,
);

const StyledArrowWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 264px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledArrow = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 20px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A tooltip component that displays a brief explanatory message near a UI element. Supports Light and Dark display modes and includes a directional arrow indicator. */
export const TooltipMedium = React.forwardRef<
  HTMLDivElement,
  TooltipMediumProps
>(function TooltipMedium({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot role="tooltip" aria-label="Tooltip" {...rest} ref={ref}>
      <StyledBody $mode={mode}>
        {mode === "Light" && (
          <StyledHereComesTheExplanationProvidedByTheTooltip>
            {"Here comes the explanation provided by the tooltip."}
          </StyledHereComesTheExplanationProvidedByTheTooltip>
        )}
        {mode === "Dark" && (
          <StyledHereComesTheExplanationProvidedByTheToopltip>
            {"Here comes the explanation provided by the toopltip."}
          </StyledHereComesTheExplanationProvidedByTheToopltip>
        )}
      </StyledBody>
      <StyledArrowWrapper>
        <StyledArrow $mode={mode} />
      </StyledArrowWrapper>
    </StyledRoot>
  );
});
