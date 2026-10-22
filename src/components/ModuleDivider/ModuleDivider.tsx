import React from "react";
import styled, { css } from "styled-components";
import {
  ModuleDividerOnlyDivider,
  type ModuleDividerOnlyDividerProps,
} from "../ModuleDividerOnlyDivider";
import { FABSubtle } from "../FABSubtle";
import { FABNeutral } from "../FABNeutral";

export interface ModuleDividerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "canAddModule" | "canResize" | "size" | "state" | "mode" | "side"
> {
  canAddModule?: boolean;
  canResize?: boolean;
  size?: 0 | 1 | 2 | 3;
  state?: "Default" | "Hover" | "Resizing";
  mode?: "Light" | "Dark";
  side?: ModuleDividerOnlyDividerProps["side"];
}

const StyledRoot = styled.div<{ $size: 0 | 1 | 2 | 3 }>(
  ({ $size }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      if ($size < 0.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 0px;
          padding-right: 23px;
          padding-bottom: 0px;
          padding-left: 24px;
          gap: 8px;
          justify-content: flex-start;
          align-items: center;
          width: fit-content;
          height: 300px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($size < 1.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 0px;
          padding-right: 24px;
          padding-bottom: 0px;
          padding-left: 24px;
          gap: 8px;
          justify-content: flex-start;
          align-items: center;
          width: fit-content;
          height: 300px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($size < 2.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 0px;
          padding-right: 24px;
          padding-bottom: 0px;
          padding-left: 24px;
          gap: 8px;
          justify-content: flex-start;
          align-items: center;
          width: fit-content;
          height: 300px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      return css`
        display: flex;
        flex-direction: column;
        padding-top: 0px;
        padding-right: 24px;
        padding-bottom: 0px;
        padding-left: 24px;
        gap: 8px;
        justify-content: flex-start;
        align-items: flex-start;
        width: fit-content;
        height: 300px;
        box-sizing: border-box;
        flex-shrink: 0;
      `;
    })()}
  `,
);

const StyledDivider = styled.div<{ $size: 0 | 1 | 2 | 3 }>(
  ({ $size }) => css`
    ${(() => {
      if ($size < 0.5)
        return css`
          display: flex;
          align-self: stretch;
          && > * {
            align-self: stretch;
            height: auto;
          }
        `;
      if ($size < 1.5)
        return css`
          display: flex;
          align-self: stretch;
          && > * {
            align-self: stretch;
            height: auto;
          }
        `;
      if ($size < 2.5)
        return css`
          display: flex;
          align-self: stretch;
          && > * {
            align-self: stretch;
            height: auto;
          }
        `;
      return css`
        display: flex;
        flex: 1 1 0;
        min-height: 0;
        && > * {
          align-self: stretch;
          height: auto;
        }
      `;
    })()}
  `,
);

const StyledFABSubtle = styled.div(
  () => css`
    position: absolute;
    right: 12px;
    top: 138px;
    width: 24px;
    height: 24px;
  `,
);

const StyledFABSubtle2 = styled.div(
  () => css`
    position: absolute;
    left: 12px;
    top: 138px;
    width: 24px;
    height: 24px;
  `,
);

const StyledFABNeutral = styled.div(
  () => css`
    position: absolute;
    right: 12px;
    bottom: 12px;
    width: 24px;
    height: 24px;
  `,
);

const StyledFABNeutral2 = styled.div(
  () => css`
    position: absolute;
    left: 12px;
    bottom: 12px;
    width: 24px;
    height: 24px;
  `,
);

/** A module divider component that visually separates content modules. Supports resizing via drag handles and adding new modules via action buttons. Adapts to light and dark modes with multiple size variants. */
export const ModuleDivider = React.forwardRef<
  HTMLDivElement,
  ModuleDividerProps
>(function ModuleDivider(
  {
    canAddModule = true,
    canResize = true,
    size = 0,
    state = "Default",
    mode = "Light",
    side = "Normal",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Module divider"
      {...rest}
      ref={ref}
      $size={size}
    >
      <StyledDivider $size={size}>
        <ModuleDividerOnlyDivider side={side} />
      </StyledDivider>
      {canAddModule && (
        <StyledFABSubtle>
          <FABSubtle size={"Tiny"} mode={"Light"} />
        </StyledFABSubtle>
      )}
      {canAddModule && (
        <StyledFABSubtle2>
          <FABSubtle size={"Tiny"} mode={"Light"} />
        </StyledFABSubtle2>
      )}
      {canResize && (
        <StyledFABNeutral>
          <FABNeutral state={"Default"} size={"Tiny"} mode={"Light"} />
        </StyledFABNeutral>
      )}
      {canResize && (
        <StyledFABNeutral2>
          <FABNeutral
            side={"Left"}
            mode={"Light"}
            state={"Hover"}
            size={"Tiny"}
          />
        </StyledFABNeutral2>
      )}
    </StyledRoot>
  );
});
