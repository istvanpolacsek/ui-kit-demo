import React from "react";
import styled, { css } from "styled-components";

export interface TabProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label" | "selected"
> {
  label?: string;
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $active: string }>(
  ({ theme, $active }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 12px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($active) {
        case "Off":
          return css`
            border-color: ${theme["Border"]["Neutral"]["tertiary"]};
          `;
        case "On":
          return css`
            border-color: ${theme["Border"]["Neutral"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($active) {
        case "Off":
          return css`
            color: ${theme["Text"]["Neutral"]["Tertiary"]};
          `;
        case "On":
          return css`
            color: ${theme["Text"]["Neutral"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
  `,
);

const Styledlabel = styled.span<{ $active: string }>(
  ({ theme, $active }) => css`
    ${(() => {
      switch ($active) {
        case "Off":
          return css`
            color: ${theme["Text"]["Neutral"]["Tertiary"]};
          `;
        case "On":
          return css`
            color: ${theme["Text"]["Neutral"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A single tab component used within a tab list. Displays a label and supports active/inactive and hover states to indicate the currently selected tab. */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { label = "Label", selected, ...rest },
  ref,
) {
  const active = selected ? "On" : "Off";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $active={active}
    >
      <Styledlabel $active={active}>{label}</Styledlabel>
    </StyledRoot>
  );
});
