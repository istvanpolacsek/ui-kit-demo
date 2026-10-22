import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IndicatorCaseStudyStatusProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "status"
> {
  status?: "Password" | "Hidden";
}

const StyledRoot = styled.span<{ $status: "Password" | "Hidden" }>(
  ({ $status }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 20px;
    padding-bottom: 16px;
    padding-left: 20px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(15, 15, 15, 0.7200000286102295);
    border-radius: 99px;
    ${(() => {
      switch ($status) {
        case "Hidden":
          return css`
            box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.25);
          `;
        case "Password":
          return css`
            box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
          `;
        default:
          return css``;
      }
    })()}
    color: #fefefe;
  `,
);

const StyledLabel = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledHidden = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** Displays a status indicator for a case study, toggling between a 'Hidden' label and a visual asset (e.g., password-protected or hidden state). Used inline to communicate visibility or access status. */
export const IndicatorCaseStudyStatus = React.forwardRef<
  HTMLSpanElement,
  IndicatorCaseStudyStatusProps
>(function IndicatorCaseStudyStatus({ status = "Hidden", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Case study status: Hidden"
      {...rest}
      ref={ref}
      $status={status}
    >
      {status === "Hidden" && <VisualAsset name={"Hidden"} size={24} />}
      <StyledLabel>
        <StyledHidden>
          {
            (
              {
                '["Hidden"]': "Hidden",
                '["Password"]': "Password-protected",
              } as Record<string, string>
            )[JSON.stringify([status])]
          }
        </StyledHidden>
      </StyledLabel>
      {status === "Password" && <VisualAsset name={"Password"} size={24} />}
    </StyledRoot>
  );
});
