import React from "react";
import styled, { css } from "styled-components";

export interface ProgressBarSegmentedProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "value" | "mode" | "type"
> {
  value?: "1/3" | "1/2" | "1/5" | "1/4";
  mode?: "Light" | "Dark";
  type?: "Active" | "Passive";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: 350px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 999px;
  `,
);

const StyledUsedTime = styled.div<{
  $mode: "Light" | "Dark";
  $type: "Active" | "Passive";
}>(
  ({ $mode, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$mode, $type])) {
        case '["Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUnusedTime = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUnusedTime2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime3 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A segmented progress bar that visually represents progress through a series of steps or time segments. Displays used and unused portions as discrete segments, supporting multiple value configurations (1/2, 1/3, 1/4, 1/5) and light/dark modes. */
export const ProgressBarSegmented = React.forwardRef<
  HTMLDivElement,
  ProgressBarSegmentedProps
>(function ProgressBarSegmented(
  { value = "1/2", mode = "Light", type = "Active", ...rest },
  ref,
) {
  return (
    <StyledRoot role="progressbar" aria-label="Progress" {...rest} ref={ref}>
      <StyledUsedTime $mode={mode} $type={type} />
      <StyledUnusedTime $mode={mode} />
      {["1/3", "1/5"].includes(value) && <StyledUnusedTime2 $mode={mode} />}
      {["1/4", "1/5"].includes(value) && <StyledUsedTime2 $mode={mode} />}
      {["1/4", "1/5"].includes(value) && <StyledUsedTime3 $mode={mode} />}
    </StyledRoot>
  );
});
