import React from "react";
import styled, { css } from "styled-components";
import { Tag, type TagProps } from "../Tag";

export interface PipelineItemProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title" | "description" | "label" | "type" | "status"
> {
  title?: string;
  description?: string;
  label?: TagProps["label"];
  type?: TagProps["type"];
  status?: TagProps["status"];
}

const StyledRoot = styled.div(
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

const StyledIncome = styled.div(
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

const Styled10000 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 32px;
    font-weight: 400;
    line-height: 1.3;
  `,
);

export const PipelineItem = React.forwardRef<HTMLDivElement, PipelineItemProps>(
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
      <StyledRoot {...rest} ref={ref}>
        <StyledIncome>{title}</StyledIncome>
        <StyledContent>
          <Styled10000>{description}</Styled10000>
          <Tag label={label} type={type} status={status} />
        </StyledContent>
      </StyledRoot>
    );
  },
);
