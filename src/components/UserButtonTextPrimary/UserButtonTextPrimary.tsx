import React from "react";
import styled, { css } from "styled-components";
import { ColorOverride } from "../ColorOverride";
import { TextBoxTight } from "../TextBoxTight";
import { ToolbarModule } from "../ToolbarModule";
import { TooltipCharacterLimit } from "../TooltipCharacterLimit";

export interface UserButtonTextPrimaryProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "reachingLimit" | "colorOverride" | "state" | "roundness" | "mode"
> {
  reachingLimit?: boolean;
  colorOverride?: boolean;
  state?: "Default" | "Active" | "Hover in view" | "Hover";
  roundness?: "Sharp" | "Round" | "Pill";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button<{ $roundness: "Sharp" | "Round" | "Pill" }>(
  ({ theme, $roundness }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 26px;
    padding-bottom: 12px;
    padding-left: 26px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Color 3"]};
    ${(() => {
      switch ($roundness) {
        case "Sharp":
          return css`
            border-radius: 0px;
          `;
        case "Round":
          return css`
            border-radius: 8px;
          `;
        case "Pill":
          return css`
            border-radius: 999px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColorOverride = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 96px;
    height: 45px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -4px;
    top: -4px;
    width: 104px;
    height: 53px;
    border-radius: 2px;
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -89px;
    top: -68px;
    width: 274px;
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

/** A user-facing button component with text label (primary style). Supports multiple visual states (default, active, hover), shape variants (sharp, round, pill), light/dark modes, and optional color override. May display a character limit tooltip when approaching input limits. */
export const UserButtonTextPrimary = React.forwardRef<
  HTMLButtonElement,
  UserButtonTextPrimaryProps
>(function UserButtonTextPrimary(
  {
    reachingLimit = false,
    colorOverride = false,
    state = "Default",
    roundness = "Sharp",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      aria-label="User action button"
      {...rest}
      ref={ref}
      $roundness={roundness}
    >
      {colorOverride && (
        <StyledColorOverride>
          <ColorOverride mode={"Light"} />
        </StyledColorOverride>
      )}
      <TextBoxTight
        hasToolbar={false}
        reachingLimit={false}
        colorOverride={false}
        state={"Default"}
        mode={"Dark"}
      />
      {["Hover", "Active"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledToolbarModule>
          <ToolbarModule isCustomImage={true} type={"Button"} mode={"Light"} />
        </StyledToolbarModule>
      )}
      {reachingLimit && (
        <StyledTooltipCharacterLimit>
          <TooltipCharacterLimit mode={"Light"} />
        </StyledTooltipCharacterLimit>
      )}
    </StyledRoot>
  );
});
