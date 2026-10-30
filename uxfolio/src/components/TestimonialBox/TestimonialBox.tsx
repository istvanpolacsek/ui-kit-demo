import React from "react";
import styled, { css } from "styled-components";
import {
  TestimonialBoxRegular,
  type TestimonialBoxRegularProps,
} from "../TestimonialBoxRegular";

export interface TestimonialBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "size" | "hasImage" | "state" | "mode"
> {
  size?: "Flexible" | "4" | "5" | "6" | "8";
  hasImage?: TestimonialBoxRegularProps["hasImage"];
  state?: TestimonialBoxRegularProps["state"];
  mode?: TestimonialBoxRegularProps["mode"];
}

const StyledRoot = styled.article<{
  $size: "Flexible" | "4" | "5" | "6" | "8";
}>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Flexible":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "4":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "5":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "6":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "8":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTestimonialBoxRegular = styled.div<{
  $size: "Flexible" | "4" | "5" | "6" | "8";
}>(
  ({ $size }) => css`
    ${(() => {
      switch ($size) {
        case "Flexible":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A testimonial box component that displays a customer or user quote, typically including a review or endorsement. Supports multiple size variants for flexible layout integration. */
export const TestimonialBox = React.forwardRef<
  HTMLElement,
  TestimonialBoxProps
>(function TestimonialBox(
  {
    size = "Flexible",
    hasImage = true,
    state = "Default",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Testimonial"
      {...rest}
      ref={ref}
      $size={size}
    >
      <StyledTestimonialBoxRegular $size={size}>
        <TestimonialBoxRegular hasImage={hasImage} state={state} mode={mode} />
      </StyledTestimonialBoxRegular>
    </StyledRoot>
  );
});
