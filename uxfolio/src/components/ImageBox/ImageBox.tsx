import React from "react";
import styled, { css } from "styled-components";
import { ImageBoxRegular, type ImageBoxRegularProps } from "../ImageBoxRegular";

export interface ImageBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "size"
  | "imageBoxRegularHasCaption"
  | "imageBoxRegularMoveLeft"
  | "imageBoxRegularMoveRight"
  | "imageBoxRegularState"
  | "imageBoxRegularMode"
  | "imageBoxRegular2HasCaption"
  | "imageBoxRegular2MoveLeft"
  | "imageBoxRegular2MoveRight"
  | "imageBoxRegular2State"
  | "imageBoxRegular2Mode"
> {
  size?: "Flexible" | "3" | "4" | "5" | "6" | "7" | "8" | "12" | "Full";
  imageBoxRegularHasCaption?: ImageBoxRegularProps["hasCaption"];
  imageBoxRegularMoveLeft?: ImageBoxRegularProps["moveLeft"];
  imageBoxRegularMoveRight?: ImageBoxRegularProps["moveRight"];
  imageBoxRegularState?: ImageBoxRegularProps["state"];
  imageBoxRegularMode?: ImageBoxRegularProps["mode"];
  imageBoxRegular2HasCaption?: ImageBoxRegularProps["hasCaption"];
  imageBoxRegular2MoveLeft?: ImageBoxRegularProps["moveLeft"];
  imageBoxRegular2MoveRight?: ImageBoxRegularProps["moveRight"];
  imageBoxRegular2State?: ImageBoxRegularProps["state"];
  imageBoxRegular2Mode?: ImageBoxRegularProps["mode"];
}

const StyledRoot = styled.div<{
  $size: "Flexible" | "3" | "4" | "5" | "6" | "7" | "8" | "12" | "Full";
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
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "3":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "4":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
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
            gap: 8px;
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
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "7":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
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
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "12":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Full":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImageBoxRegular = styled.div<{
  $size: "Flexible" | "3" | "4" | "5" | "6" | "7" | "8" | "12" | "Full";
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

const StyledImageContainer = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 1188px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A responsive image box component that renders an image container with configurable size variants, ranging from flexible/fluid sizing to fixed grid-based sizes (3–12 columns) or full width. */
export const ImageBox = React.forwardRef<HTMLDivElement, ImageBoxProps>(
  function ImageBox(
    {
      size = "Flexible",
      imageBoxRegularHasCaption = true,
      imageBoxRegularMoveLeft = true,
      imageBoxRegularMoveRight = true,
      imageBoxRegularState = "Default",
      imageBoxRegularMode = "Light",
      imageBoxRegular2HasCaption = true,
      imageBoxRegular2MoveLeft = true,
      imageBoxRegular2MoveRight = true,
      imageBoxRegular2State = "Default",
      imageBoxRegular2Mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="img"
        aria-label="Image box"
        {...rest}
        ref={ref}
        $size={size}
      >
        {["Flexible", "3", "4", "5", "6", "7", "8", "12"].includes(size) && (
          <StyledImageBoxRegular $size={size}>
            <ImageBoxRegular
              snaps={false}
              aspectRatio={"1:1"}
              hasCaption={imageBoxRegularHasCaption}
              moveLeft={imageBoxRegularMoveLeft}
              moveRight={imageBoxRegularMoveRight}
              state={imageBoxRegularState}
              mode={imageBoxRegularMode}
            />
          </StyledImageBoxRegular>
        )}
        {size === "Full" && (
          <StyledImageContainer>
            {size === "Full" && (
              <ImageBoxRegular
                snaps={false}
                aspectRatio={"1:1"}
                hasCaption={imageBoxRegular2HasCaption}
                moveLeft={imageBoxRegular2MoveLeft}
                moveRight={imageBoxRegular2MoveRight}
                state={imageBoxRegular2State}
                mode={imageBoxRegular2Mode}
              />
            )}
          </StyledImageContainer>
        )}
      </StyledRoot>
    );
  },
);
