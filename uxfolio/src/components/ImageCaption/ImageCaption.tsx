import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTight } from "../TextBoxTight";
import { ToolbarModule } from "../ToolbarModule";

export interface ImageCaptionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "colorOverride" | "mode"
> {
  colorOverride?: boolean;
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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

/** Displays a caption associated with an image, optionally including a toolbar for actions. Supports light and dark modes, active/hover states, and an optional color override. */
export const ImageCaption = React.forwardRef<
  HTMLButtonElement,
  ImageCaptionProps
>(function ImageCaption(
  { colorOverride = false, mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
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
});
