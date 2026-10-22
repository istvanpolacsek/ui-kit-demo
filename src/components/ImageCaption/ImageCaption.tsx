import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTight } from "../TextBoxTight";
import { ToolbarModule } from "../ToolbarModule";

export interface ImageCaptionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "colorOverride" | "mode"
> {
  colorOverride?: boolean;
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextBoxTight = styled.div(
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

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -41.5px;
    top: -68px;
    width: 483px;
    height: 56px;
  `,
);

/** Displays a caption beneath an image, optionally accompanied by a toolbar. Supports light and dark modes, active/hover/default states, and an optional color override. */
export const ImageCaption = React.forwardRef<HTMLDivElement, ImageCaptionProps>(
  function ImageCaption(
    { colorOverride = false, mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="figure" aria-label="Image caption" {...rest} ref={ref}>
        <StyledTextBoxTight>
          <TextBoxTight
            reachingLimit={false}
            hasToolbar={false}
            colorOverride={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledTextBoxTight>
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Image caption"}
            mode={"Light"}
          />
        </StyledToolbarModule>
      </StyledRoot>
    );
  },
);
