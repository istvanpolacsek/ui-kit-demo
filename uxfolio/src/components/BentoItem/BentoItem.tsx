import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";
import { IconButton } from "../IconButton";
import { ProgressBarSegmented } from "../ProgressBarSegmented";

export interface BentoItemProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "hasVisual" | "needsInfo" | "type"
> {
  hasVisual?: boolean;
  needsInfo?: boolean;
  type?: "Valu & progress" | "Value";
}

const StyledRoot = styled.article(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
  `,
);

const StyledVisual = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12.000003814697266px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 56.000003814697266px;
    height: 56px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #eeeeee;
    border-radius: 9999px;
  `,
);

const StyledInfo = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledTitle2 = styled.h3(
  () => css`
    color: #4d4c4c;
  `,
);

const Styled123 = styled.p(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledValue = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 302px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledPrice = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: BASELINE;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled1 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const Styled5 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledProgressBarSegmented = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A bento-style dashboard card that displays a titled metric or value. Optionally includes an illustration/icon, an info button, and either a plain numeric value or a value-with-progress-bar variant. */
export const BentoItem = React.forwardRef<HTMLElement, BentoItemProps>(
  function BentoItem(
    { hasVisual = true, needsInfo = true, type = "Value", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="region" aria-label="Bento item" {...rest} ref={ref}>
        {hasVisual && (
          <StyledVisual>
            <IllustrationIcon type={"Personal success"} mode={"Light"} />
          </StyledVisual>
        )}
        <StyledInfo>
          <StyledTitle>
            <StyledTitle2>{"Title goes here"}</StyledTitle2>
            {needsInfo && <IconButton importance={"Low"} mode={"Light"} />}
          </StyledTitle>
          {type === "Value" && <Styled123>{"123"}</Styled123>}
          {type === "Valu & progress" && (
            <StyledValue>
              {type === "Valu & progress" && (
                <StyledPrice>
                  {type === "Valu & progress" && <Styled1>{"1"}</Styled1>}
                  {type === "Valu & progress" && <Styled5>{"/ 5"}</Styled5>}
                </StyledPrice>
              )}
              {type === "Valu & progress" && (
                <StyledProgressBarSegmented>
                  <ProgressBarSegmented
                    value={"1/5"}
                    mode={"Light"}
                    type={"Active"}
                  />
                </StyledProgressBarSegmented>
              )}
            </StyledValue>
          )}
        </StyledInfo>
      </StyledRoot>
    );
  },
);
