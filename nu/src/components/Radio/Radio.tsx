import React from "react";
import styled, { css } from "styled-components";

export interface RadioProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "status"
> {
  status?:
    | "Default"
    | "Hover"
    | "Active"
    | "Disabled (Active)"
    | "Focused"
    | "Disabled (Inactive)";
}

const StyledRoot = styled.div<{
  $status:
    | "Default"
    | "Hover"
    | "Active"
    | "Disabled (Active)"
    | "Focused"
    | "Disabled (Inactive)";
}>(
  ({ theme, $status }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($status) {
        case "Focused":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($status) {
        case "Default":
          return css`
            border-radius: 0px;
          `;
        case "Hover":
          return css`
            border-radius: 0px;
          `;
        case "Active":
          return css`
            border-radius: 0px;
          `;
        case "Disabled (Active)":
          return css`
            border-radius: 0px;
          `;
        case "Disabled (Inactive)":
          return css`
            border-radius: 0px;
          `;
        case "Focused":
          return css`
            border-radius: 1000px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledcircle = styled.div<{
  $status:
    | "Default"
    | "Hover"
    | "Active"
    | "Disabled (Active)"
    | "Focused"
    | "Disabled (Inactive)";
}>(
  ({ theme, $status }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 99px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    ${(() => {
      switch ($status) {
        case "Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Active":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Disabled (Active)":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Disabled (Inactive)":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($status) {
        case "Default":
          return css`
            border-color: ${theme["button"]["Default"]["default"]};
          `;
        case "Hover":
          return css`
            border-color: ${theme["button"]["Default"]["default"]};
          `;
        case "Active":
          return css`
            border-color: ${theme["button"]["Default"]["default"]};
          `;
        case "Disabled (Active)":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Disabled (Inactive)":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Focused":
          return css`
            border-color: ${theme["button"]["Default"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A radio button input component used for selecting a single option from a group. Supports multiple visual states including default, hover, active, focused, and disabled variants. */
export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  function Radio({ status = "Default", ...rest }, ref) {
    return (
      <StyledRoot role="radio" {...rest} ref={ref} $status={status}>
        <Styledcircle $status={status}></Styledcircle>
      </StyledRoot>
    );
  },
);
