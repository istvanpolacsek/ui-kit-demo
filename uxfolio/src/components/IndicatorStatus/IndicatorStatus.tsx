import React from "react";
import styled, { css } from "styled-components";
import { Info } from "../Info";

export interface IndicatorStatusProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "mode" | "selected"
> {
  type?: "Negative" | "Neutral" | "Positive" | "Warning" | "Highlight";
  mode?: "Dark" | "Light";
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{
  $hasIcon: string;
  $type: "Negative" | "Neutral" | "Positive" | "Warning" | "Highlight";
  $mode: "Dark" | "Light";
}>(
  ({ $hasIcon, $type, $mode }) => css`
    border-radius: 4px;
    ${(() => {
      switch ($hasIcon) {
        case "True":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 8px;
            padding-bottom: 3px;
            padding-left: 5px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "False":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 8px;
            padding-bottom: 3px;
            padding-left: 8px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Positive","Dark"]':
          return css`
            background-color: ${"#245d48"};
          `;
        case '["Warning","Dark"]':
          return css`
            background-color: ${"#694915"};
          `;
        case '["Negative","Dark"]':
          return css`
            background-color: ${"#672929"};
          `;
        case '["Neutral","Dark"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Highlight","Dark"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Positive","Light"]':
          return css`
            background-color: ${"#def7ee"};
          `;
        case '["Warning","Light"]':
          return css`
            background-color: ${"#fcefd7"};
          `;
        case '["Negative","Light"]':
          return css`
            background-color: ${"#fce0e0"};
          `;
        case '["Neutral","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Highlight","Light"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Highlight","Dark"]':
          return css`
            color: ${"#1a1a1a"};
          `;
        case '["Highlight","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledStatus = styled.div<{
  $type: "Negative" | "Neutral" | "Positive" | "Warning" | "Highlight";
  $mode: "Dark" | "Light";
}>(
  ({ $type, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Positive","Dark"]':
          return css`
            color: ${"#7ce3bd"};
          `;
        case '["Warning","Dark"]':
          return css`
            color: ${"#fad69b"};
          `;
        case '["Negative","Dark"]':
          return css`
            color: ${"#f48787"};
          `;
        case '["Neutral","Dark"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Highlight","Dark"]':
          return css`
            color: ${"#1a1a1a"};
          `;
        case '["Positive","Light"]':
          return css`
            color: ${"#2dc28c"};
          `;
        case '["Warning","Light"]':
          return css`
            color: ${"#f59e0b"};
          `;
        case '["Negative","Light"]':
          return css`
            color: ${"#ef4444"};
          `;
        case '["Neutral","Light"]':
          return css`
            color: ${"#707070"};
          `;
        case '["Highlight","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A status indicator badge that visually communicates a state (Positive, Negative, Neutral, Warning, or Highlight) with an optional icon and label text. Used inline to convey contextual status information. */
export const IndicatorStatus = React.forwardRef<
  HTMLButtonElement,
  IndicatorStatusProps
>(function IndicatorStatus(
  { type = "Positive", mode = "Dark", selected, ...rest },
  ref,
) {
  const hasIcon = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $hasIcon={hasIcon}
      $type={type}
      $mode={mode}
    >
      {hasIcon === "True" && <Info />}
      <StyledStatus $type={type} $mode={mode}>
        {"Status"}
      </StyledStatus>
    </StyledRoot>
  );
});
