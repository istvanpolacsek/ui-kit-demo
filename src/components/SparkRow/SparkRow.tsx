import React from "react";
import styled, { css } from "styled-components";

export interface SparkRowProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Default" | "Thinking" | "Thinking (long)";
}

const StyledRoot = styled.div<{
  $state: "Default" | "Thinking" | "Thinking (long)";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
          `;
        case "Thinking":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Thinking (long)":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A row component within a Spark UI layout that displays content in a structured horizontal arrangement, supporting default and thinking/loading states. */
export const SparkRow = React.forwardRef<HTMLDivElement, SparkRowProps>(
  function SparkRow({ state = "Default", ...rest }, ref) {
    return (
      <StyledRoot
        role="status"
        aria-label="Spark row"
        {...rest}
        ref={ref}
        $state={state}
      ></StyledRoot>
    );
  },
);
