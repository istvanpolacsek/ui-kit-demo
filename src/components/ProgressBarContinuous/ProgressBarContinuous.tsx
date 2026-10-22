import React from "react";
import styled, { css } from "styled-components";

export interface ProgressBarContinuousProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "timePast" | "mode" | "type"
> {
  timePast?: "1/3" | "1/2" | "2/3" | "Full" | "Almost full";
  mode?: "Dark" | "Light";
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
    gap: 0px;
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
  $timePast: "1/3" | "1/2" | "2/3" | "Full" | "Almost full";
  $mode: "Dark" | "Light";
  $type: "Active" | "Passive";
}>(
  ({ $timePast, $mode, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$timePast, $mode, $type])) {
        case '["1/3","Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["1/2","Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["2/3","Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["Almost full","Light","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Full","Light","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["1/3","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["1/2","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["2/3","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Full","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["1/3","Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["1/2","Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["2/3","Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Almost full","Dark","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Full","Dark","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["1/3","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["1/2","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["2/3","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Full","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSpacer = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledUnusedTime = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledUnusedTime2 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledUsedTime2 = styled.div<{
  $timePast: "1/3" | "1/2" | "2/3" | "Full" | "Almost full";
  $mode: "Dark" | "Light";
  $type: "Active" | "Passive";
}>(
  ({ $timePast, $mode, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$timePast, $mode, $type])) {
        case '["2/3","Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["Almost full","Light","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["2/3","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["2/3","Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Almost full","Dark","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["2/3","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime3 = styled.div<{
  $timePast: "1/3" | "1/2" | "2/3" | "Full" | "Almost full";
  $mode: "Dark" | "Light";
  $type: "Active" | "Passive";
}>(
  ({ $timePast, $mode, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$timePast, $mode, $type])) {
        case '["2/3","Light","Active"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        case '["Almost full","Light","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["2/3","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Light","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["2/3","Dark","Active"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Almost full","Dark","Active"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["2/3","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Almost full","Dark","Passive"]':
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime4 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime5 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime6 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime7 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime8 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUsedTime9 = styled.div<{ $type: "Active" | "Passive" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Active":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Passive":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A continuous progress bar component that visually represents elapsed time or progress as a filled segment. Supports multiple fill states (1/3, 1/2, 2/3, Full, Almost full), light/dark modes, and active/passive types. */
export const ProgressBarContinuous = React.forwardRef<
  HTMLDivElement,
  ProgressBarContinuousProps
>(function ProgressBarContinuous(
  { timePast = "1/3", mode = "Light", type = "Active", ...rest },
  ref,
) {
  return (
    <StyledRoot role="progressbar" aria-label="Progress" {...rest} ref={ref}>
      <StyledUsedTime $timePast={timePast} $mode={mode} $type={type} />
      {["1/3", "1/2", "2/3", "Almost full"].includes(timePast) && (
        <StyledSpacer />
      )}
      {["1/3", "1/2", "2/3", "Almost full"].includes(timePast) && (
        <StyledUnusedTime $mode={mode} />
      )}
      {timePast === "1/3" && <StyledUnusedTime2 $mode={mode} />}
      {["2/3", "Almost full"].includes(timePast) && (
        <StyledUsedTime2 $timePast={timePast} $mode={mode} $type={type} />
      )}
      {["2/3", "Almost full"].includes(timePast) && (
        <StyledUsedTime3 $timePast={timePast} $mode={mode} $type={type} />
      )}
      {timePast === "Almost full" && <StyledUsedTime4 $type={type} />}
      {timePast === "Almost full" && <StyledUsedTime5 $type={type} />}
      {timePast === "Almost full" && <StyledUsedTime6 $type={type} />}
      {timePast === "Almost full" && <StyledUsedTime7 $type={type} />}
      {timePast === "Almost full" && <StyledUsedTime8 $type={type} />}
      {timePast === "Almost full" && <StyledUsedTime9 $type={type} />}
    </StyledRoot>
  );
});
