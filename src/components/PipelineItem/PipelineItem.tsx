import React from "react";
import styled, { css } from "styled-components";
import { Tag, type TagProps } from "../Tag";

export interface PipelineItemProps {
  title: string;
  description: string;
  label: TagProps["label"];
  type: TagProps["type"];
  status: TagProps["status"];
}

const StyledRoot = styled.article(
  ({ theme }) => css`
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
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledIncome = styled.h3(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled10000 = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 32px;
    font-weight: 400;
    line-height: 1.3;
  `,
);

/** Displays a pipeline item with a title and a monetary description value, optionally tagged. Used to represent a single entry in a financial pipeline list. */
export function PipelineItem({
  title,
  description,
  label,
  type,
  status,
}: PipelineItemProps) {
  return (
    <StyledRoot aria-label="Income: $100,00">
      <StyledIncome>{title}</StyledIncome>
      <StyledContent>
        <Styled10000>{description}</Styled10000>
        <Tag label={label} type={type} status={status} />
      </StyledContent>
    </StyledRoot>
  );
}
