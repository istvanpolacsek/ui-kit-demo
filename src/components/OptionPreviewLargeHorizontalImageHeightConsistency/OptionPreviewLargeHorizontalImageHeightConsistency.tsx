import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewLargeHorizontalImageHeightConsistencyProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Even" | "Uneven";
}

const StyledRoot = styled.div<{ $type: "Even" | "Uneven" }>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Even":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 20px;
            padding-right: 27px;
            padding-bottom: 19px;
            padding-left: 27px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Uneven":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 17px;
            padding-right: 27px;
            padding-bottom: 16px;
            padding-left: 27px;
            gap: 4px;
            justify-content: center;
            align-items: flex-start;
            width: 134px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 134px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledLayer = styled.span(
  () => css`
    width: 24px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledLayer2 = styled.span(
  () => css`
    width: 24px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

const StyledLayer3 = styled.span(
  () => css`
    width: 24px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
    box-shadow: 0px 80px 80px 0px rgba(0, 0, 0, 0.07);
  `,
);

/** A preview component for displaying options in a large horizontal layout, supporting both even and uneven image height configurations. */
export const OptionPreviewLargeHorizontalImageHeightConsistency =
  React.forwardRef<
    HTMLDivElement,
    OptionPreviewLargeHorizontalImageHeightConsistencyProps
  >(function OptionPreviewLargeHorizontalImageHeightConsistency(
    { type = "Even", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="group"
        aria-label="Option preview"
        {...rest}
        ref={ref}
        $type={type}
      >
        <StyledLayer />
        <StyledLayer2 />
        <StyledLayer3 />
      </StyledRoot>
    );
  });
