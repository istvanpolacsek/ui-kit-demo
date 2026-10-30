import React from "react";
import styled, { css } from "styled-components";
import { ImageManagerSingle } from "../ImageManagerSingle";

export interface ModalSidebarFileProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.aside(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 332px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A modal sidebar panel displaying file-related content, including an image manager and a scroll overlay for navigating file assets or attachments. */
export const ModalSidebarFile = React.forwardRef<
  HTMLElement,
  ModalSidebarFileProps
>(function ModalSidebarFile({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="complementary"
      aria-label="File sidebar"
      {...rest}
      ref={ref}
    >
      <StyledBottomScrollOverlay />
      <ImageManagerSingle
        hasDescription={true}
        hasLabel={false}
        state={"Image"}
      />
    </StyledRoot>
  );
});
