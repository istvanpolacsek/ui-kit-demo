import React from "react";
import styled, { css } from "styled-components";
import { Tag, type TagProps } from "../Tag";

export interface PipelineItemProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "title" | "description" | "label" | "type" | "status"
> {
  title?: string;
  description?: string;
  label?: TagProps["label"];
  type?: TagProps["type"];
  status?: TagProps["status"];
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
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
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
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.3;
  `,
);

/** Displays a pipeline item with a title and a monetary description value, optionally tagged for categorization or status. */
export const PipelineItem = React.forwardRef<HTMLElement, PipelineItemProps>(
  function PipelineItem(
    {
      title = "Income",
      description = "$100,00",
      label = "Label",
      type = "Light",
      status = "Error",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot aria-label="Income: $100,00" {...rest} ref={ref}>
        <StyledIncome>{title}</StyledIncome>
        <StyledContent>
          <Styled10000>{description}</Styled10000>
          <Tag label={label} type={type} status={status} />
        </StyledContent>
      </StyledRoot>
    );
  },
);
