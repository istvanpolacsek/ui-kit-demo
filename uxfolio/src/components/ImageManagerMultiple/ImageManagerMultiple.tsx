import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { ImageManagerEditItem } from "../ImageManagerEditItem";
import { ImageManagerReorderItem } from "../ImageManagerReorderItem";
import { TertiaryButtonSubtle } from "../TertiaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface ImageManagerMultipleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "reorder"
> {
  reorder?: "False" | "True";
}

const StyledRoot = styled.section(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledImageManager = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.div(
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

const StyledFrame48096242 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageManagerEditItem = styled.li(() => css``);

const StyledImageManagerEditItem2 = styled.li(() => css``);

const StyledImageManagerEditItem3 = styled.li(() => css``);

const StyledImageManagerEditItem4 = styled.li(() => css``);

const StyledImageManagerEditItem5 = styled.li(() => css``);

const StyledImageManagerEditItem6 = styled.li(() => css``);

const StyledImageManagerReorderItem = styled.li(() => css``);

const StyledImageManagerReorderItem2 = styled.li(() => css``);

const StyledImageManagerReorderItem3 = styled.li(() => css``);

const StyledImageManagerReorderItem4 = styled.li(() => css``);

const StyledImageManagerReorderItem5 = styled.li(() => css``);

const StyledImageManagerReorderItem6 = styled.li(() => css``);

const StyledButtonsWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** An image manager panel that displays multiple images in either an editable or reorderable grid layout. Supports two modes: 'Edit' for managing individual images and 'Reorder' for drag-and-drop reordering. Includes action buttons for managing the image collection. */
export const ImageManagerMultiple = React.forwardRef<
  HTMLElement,
  ImageManagerMultipleProps
>(function ImageManagerMultiple({ reorder = "False", ...rest }, ref) {
  return (
    <StyledRoot role="region" aria-label="Image manager" {...rest} ref={ref}>
      <StyledImageManager>
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
        <StyledFrame48096242>
          {reorder === "False" && (
            <StyledImageManagerEditItem>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem>
          )}
          {reorder === "False" && (
            <StyledImageManagerEditItem2>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem2>
          )}
          {reorder === "False" && (
            <StyledImageManagerEditItem3>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem3>
          )}
          {reorder === "False" && (
            <StyledImageManagerEditItem4>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem4>
          )}
          {reorder === "False" && (
            <StyledImageManagerEditItem5>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem5>
          )}
          {reorder === "False" && (
            <StyledImageManagerEditItem6>
              <ImageManagerEditItem />
            </StyledImageManagerEditItem6>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem2>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem2>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem3>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem3>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem4>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem4>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem5>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem5>
          )}
          {reorder === "True" && (
            <StyledImageManagerReorderItem6>
              <ImageManagerReorderItem state={"Default"} />
            </StyledImageManagerReorderItem6>
          )}
        </StyledFrame48096242>
      </StyledImageManager>
      <StyledButtonsWrapper>
        {reorder === "False" && (
          <TertiaryButtonSubtle
            mode={"Dark"}
            hasIcon={"True"}
            size={"Regular"}
          />
        )}
        {reorder === "False" && (
          <TertiaryButtonSubtle
            mode={"Dark"}
            hasIcon={"True"}
            size={"Regular"}
          />
        )}
        {reorder === "True" && (
          <TertiaryButtonNeutral
            mode={"Dark"}
            hasIcon={"True"}
            size={"Regular"}
          />
        )}
      </StyledButtonsWrapper>
    </StyledRoot>
  );
});
