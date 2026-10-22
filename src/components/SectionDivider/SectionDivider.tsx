import React from "react";
import styled, { css } from "styled-components";
import { FABSubtle } from "../FABSubtle";

export interface SectionDividerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSeparator = styled.span<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    position: absolute;
    left: 0px;
    top: 15px;
    width: 1440px;
    height: 1px;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
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

/** A visual section divider component that separates content areas, available in Light and Dark display modes. Typically used to create clear boundaries between page sections. */
export const SectionDivider = React.forwardRef<
  HTMLDivElement,
  SectionDividerProps
>(function SectionDivider({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Section divider"
      {...rest}
      ref={ref}
    >
      <FABSubtle size={"Small"} mode={"Light"} />
      <StyledSeparator $mode={mode} />
    </StyledRoot>
  );
});
