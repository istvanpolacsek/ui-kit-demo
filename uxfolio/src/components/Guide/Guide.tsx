import React from "react";
import styled, { css } from "styled-components";
import { GuideStep } from "../GuideStep";

export interface GuideProps extends Omit<
  React.ComponentPropsWithoutRef<"ol">,
  "type"
> {
  type?: "Referral" | "Domain connection";
}

const StyledRoot = styled.ol(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 673px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
  `,
);

const StyledGuideStep = styled.li(
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

const StyledGuideStep2 = styled.li(
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

const StyledGuideStep3 = styled.li(
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

const StyledGuideStep4 = styled.li(
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

/** A step-by-step guide component that displays an ordered sequence of steps (e.g., Referral or Domain connection flows). Each step is represented by a Guide/Step instance, with the number of steps varying by variant. */
export const Guide = React.forwardRef<HTMLOListElement, GuideProps>(
  function Guide({ type = "Domain connection", ...rest }, ref) {
    return (
      <StyledRoot
        role="list"
        aria-label="Setup guide steps"
        {...rest}
        ref={ref}
      >
        <StyledGuideStep>
          <GuideStep hasInfo={false} type={"Text only"} />
        </StyledGuideStep>
        <StyledGuideStep2>
          <GuideStep hasInfo={false} type={"Text only"} />
        </StyledGuideStep2>
        <StyledGuideStep3>
          <GuideStep hasInfo={true} type={"Text + table"} />
        </StyledGuideStep3>
        {type === "Domain connection" && (
          <StyledGuideStep4>
            <GuideStep hasInfo={false} type={"Text only"} />
          </StyledGuideStep4>
        )}
      </StyledRoot>
    );
  },
);
