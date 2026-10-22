import React from "react";
import styled, { css } from "styled-components";

export interface SubheaderNonEditorPageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state"
> {
  state?: "Default";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTitleWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.h2(
  () => css`
    color: #262626;
  `,
);

const StyledThisIsADescriptionWriteSomethingHere = styled.p(
  () => css`
    color: #707070;
  `,
);

/** A subheader component for non-editor pages, displaying a title and a brief description. Used to introduce or label a page section with contextual information. */
export const SubheaderNonEditorPage = React.forwardRef<
  HTMLElement,
  SubheaderNonEditorPageProps
>(function SubheaderNonEditorPage({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Section subheader" {...rest} ref={ref}>
      <StyledTitleWrapper>
        <StyledTitle>{"Title"}</StyledTitle>
      </StyledTitleWrapper>
      <StyledThisIsADescriptionWriteSomethingHere>
        {"This is a description. Write something here"}
      </StyledThisIsADescriptionWriteSomethingHere>
    </StyledRoot>
  );
});
