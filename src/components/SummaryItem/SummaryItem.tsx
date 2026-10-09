import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface SummaryItemProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "label" | "value" | "iconName"
> {
  label: string;
  value: string;
  iconName: IconProps["iconName"];
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 4px;
    justify-content: space-between;
    align-items: flex-start;
    width: 170px;
    height: 120px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Semantic"]["Error Scale"]["10"]};
    border-radius: 20px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledDealStage = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledCallScheduled = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** Displays a labeled summary item consisting of a label and its corresponding value, typically used in detail views or summary panels to present key-value information. */
export const SummaryItem = React.forwardRef<HTMLDivElement, SummaryItemProps>(
  function SummaryItem({ label, value, iconName, ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledIcon>
          <Icon iconName={iconName} />
        </StyledIcon>
        <StyledText>
          <StyledDealStage>{label}</StyledDealStage>
          <StyledCallScheduled>{value}</StyledCallScheduled>
        </StyledText>
      </StyledRoot>
    );
  },
);
