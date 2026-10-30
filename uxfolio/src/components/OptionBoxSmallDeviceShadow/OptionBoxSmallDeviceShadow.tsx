import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallDeviceShadow } from "../OptionPreviewSmallDeviceShadow";

export interface OptionBoxSmallDeviceShadowProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Shadow" | "None";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A small option box component representing a device shadow selection state. Displays a preview of a device shadow option with support for default, hover, and active interaction states, as well as shadow and none type variants. */
export const OptionBoxSmallDeviceShadow = React.forwardRef<
  HTMLDivElement,
  OptionBoxSmallDeviceShadowProps
>(function OptionBoxSmallDeviceShadow({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot
      role="option"
      aria-label="Device shadow option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallDeviceShadow type={"None"} />
    </StyledRoot>
  );
});
