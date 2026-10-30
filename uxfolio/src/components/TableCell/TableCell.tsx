import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { IndicatorStatus } from "../IndicatorStatus";

export interface TableCellProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasCopy" | "type" | "state"
> {
  hasCopy?: boolean;
  type?: "Normal" | "Header" | "Status";
  state?: "Default";
}

const StyledRoot = styled.div<{ $type: "Normal" | "Header" | "Status" }>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 160px;
    height: 52px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Header":
          return css`
            background-color: ${"#f9f9f9"};
          `;
        default:
          return css``;
      }
    })()}
    color: #0f0f0f;
  `,
);

const StyledValue = styled.span(
  () => css`
    color: #0f0f0f;
  `,
);

/** A table cell component that supports header, normal, and status variants. Can display a text value with an optional copy action button and a status indicator depending on the variant. */
export const TableCell = React.forwardRef<HTMLDivElement, TableCellProps>(
  function TableCell(
    { hasCopy = true, type = "Header", state = "Default", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="cell" {...rest} ref={ref} $type={type}>
        {["Header", "Normal"].includes(type) && (
          <StyledValue>{"Value"}</StyledValue>
        )}
        {hasCopy && (
          <IconOnlyPrimaryButtonSubtle
            state={"Default"}
            size={"Tiny"}
            mode={"Light"}
          />
        )}
        {type === "Status" && (
          <IndicatorStatus type={"Positive"} mode={"Light"} />
        )}
      </StyledRoot>
    );
  },
);
