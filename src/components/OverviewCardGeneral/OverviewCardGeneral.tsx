import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";

export interface OverviewCardGeneralProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "showText" | "type"
> {
  showText?: boolean;
  type?: "Url" | "Favicon";
}

const StyledRoot = styled.article(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCard = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 64px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
  `,
);

const StyledURL = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #adadad;
  `,
);

const StyledIconButton = styled.div(
  () => css`
    position: absolute;
    right: 24px;
    top: 24px;
    width: 24px;
    height: 24px;
  `,
);

const StyledHelperText = styled.p<{ $type: "Url" | "Favicon" }>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Favicon":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPreviewCard = styled.div(
  () => css`
    overflow: hidden;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
  `,
);

const StyledVisual = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledRectangle137 = styled.div(
  () => css`
    width: 306px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border-radius: 0px;
  `,
);

const StyledEllipse16 = styled.div(
  () => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 50%;
  `,
);

const StyledEllipse17 = styled.div(
  () => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 50%;
  `,
);

const StyledEllipse18 = styled.div(
  () => css`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 50%;
  `,
);

const StyledUnion = styled.div(
  () => css`
    width: 311px;
    height: 102px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 0px;
    box-shadow: 0px 4px 16px 0px rgba(18, 17, 24, 0.1);
  `,
);

const StyledRectangle139 = styled.div(
  () => css`
    width: 178px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #333333;
  `,
);

const StyledEllipse36 = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 50%;
  `,
);

const StyledBoundingBox = styled.div(
  () => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledpageInfo = styled.div(
  () => css`
    width: 15.833333969116211px;
    height: 13.75px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #4d4c4c;
    border-radius: 0px;
  `,
);

const StyledName = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledFaviconImage = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** An overview card component that displays a user's portfolio URL or favicon preview, along with a label, an icon button for actions, and optional helper text. Supports two visual variants: URL display and Favicon preview. */
export const OverviewCardGeneral = React.forwardRef<
  HTMLElement,
  OverviewCardGeneralProps
>(function OverviewCardGeneral(
  { showText = true, type = "Url", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Overview card" {...rest} ref={ref}>
      {type === "Url" && (
        <StyledCard>
          {type === "Url" && <StyledURL>{"uxfol.io/nathandavidson"}</StyledURL>}
          {type === "Url" && <StyledLabel>{"Default UXfolio URL"}</StyledLabel>}
          {type === "Url" && (
            <StyledIconButton>
              <IconButton importance={"Low"} mode={"Dark"} />
            </StyledIconButton>
          )}
        </StyledCard>
      )}
      {showText && (
        <StyledHelperText $type={type}>
          {
            (
              {
                '["Url"]': "Go to Own domain & URL to customize your URL",
                '["Favicon"]':
                  "This is what your portfolio’s browser tabs will look like.",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledHelperText>
      )}
      {type === "Favicon" && (
        <StyledPreviewCard>
          {type === "Favicon" && (
            <StyledVisual>
              {type === "Favicon" && <StyledRectangle137 />}
              {type === "Favicon" && <StyledEllipse16 />}
              {type === "Favicon" && <StyledEllipse17 />}
              {type === "Favicon" && <StyledEllipse18 />}
              {type === "Favicon" && <StyledUnion />}
              {type === "Favicon" && <StyledRectangle139 />}
              {type === "Favicon" && <StyledEllipse36 />}
              {type === "Favicon" && (
                <div>
                  {type === "Favicon" && <StyledBoundingBox />}
                  {type === "Favicon" && <StyledpageInfo />}
                </div>
              )}
            </StyledVisual>
          )}
          {type === "Favicon" && <StyledName>{"uxfol.io/nathan"}</StyledName>}
          {type === "Favicon" && <StyledFaviconImage />}
        </StyledPreviewCard>
      )}
    </StyledRoot>
  );
});
