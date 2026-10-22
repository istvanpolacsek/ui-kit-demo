import React from "react";
import styled, { css } from "styled-components";

export interface PresetPreviewTemplateProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "template"
> {
  template?:
    | "Tesler"
    | "Aurora"
    | "Norman"
    | "Otis"
    | "Axis"
    | "Jakob"
    | "Bauhaus"
    | "Orielle"
    | "Uncurled"
    | "Poster"
    | "Panorama"
    | "Nelson"
    | "Twee"
    | "Cubic"
    | "Alaine"
    | "Anthra"
    | "Baze"
    | "Nominee";
}

const StyledRoot = styled.div<{
  $template:
    | "Tesler"
    | "Aurora"
    | "Norman"
    | "Otis"
    | "Axis"
    | "Jakob"
    | "Bauhaus"
    | "Orielle"
    | "Uncurled"
    | "Poster"
    | "Panorama"
    | "Nelson"
    | "Twee"
    | "Cubic"
    | "Alaine"
    | "Anthra"
    | "Baze"
    | "Nominee";
}>(
  ({ $template }) => css`
    overflow: hidden;
    background-color: #333333;
    border-radius: 4px;
    ${(() => {
      switch ($template) {
        case "Tesler":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15.213114738464355px;
            padding-right: 15.199994087219238px;
            padding-bottom: 0px;
            padding-left: 15.199999809265137px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Axis":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14.999999046325684px;
            padding-right: 15.000195503234863px;
            padding-bottom: 9.5367431640625e-7px;
            padding-left: 14.999804496765137px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Aurora":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Panorama":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Norman":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Poster":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Otis":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Jakob":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Cubic":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Nelson":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Alaine":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bauhaus":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Anthra":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Orielle":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Uncurled":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Nominee":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 0px;
            padding-left: 15px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 285px;
            height: 174px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 285px;
    height: 174px;
    box-sizing: border-box;
  `,
);

const StyledTeslerPreviewSmall = styled.div(
  () => css`
    overflow: hidden;
  `,
);

const StyledTeslerPreviewSmallNew = styled.div(
  () => css`
    width: 255px;
    height: 199px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledTeslerPreviewSmallNew2 = styled.div(
  () => css`
    width: 95px;
    height: 84px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle802 = styled.div(
  () => css`
    width: 9px;
    height: 85px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #181818;
    border-radius: 0px;
  `,
);

const StyledImage = styled.div<{
  $template:
    | "Tesler"
    | "Aurora"
    | "Norman"
    | "Otis"
    | "Axis"
    | "Jakob"
    | "Bauhaus"
    | "Orielle"
    | "Uncurled"
    | "Poster"
    | "Panorama"
    | "Nelson"
    | "Twee"
    | "Cubic"
    | "Alaine"
    | "Anthra"
    | "Baze"
    | "Nominee";
}>(
  ({ $template }) => css`
    width: 255px;
    height: 159px;
    box-sizing: border-box;
    flex-shrink: 0;
    ${(() => {
      switch ($template) {
        case "Axis":
          return css`
            background-color: ${"transparent"};
          `;
        case "Aurora":
          return css`
            background-color: ${"transparent"};
          `;
        case "Panorama":
          return css`
            background-color: ${"transparent"};
          `;
        case "Norman":
          return css`
            background-color: ${"transparent"};
          `;
        case "Poster":
          return css`
            background-color: ${"transparent"};
          `;
        case "Otis":
          return css`
            background-color: ${"transparent"};
          `;
        case "Twee":
          return css`
            background-color: ${"transparent"};
          `;
        case "Jakob":
          return css`
            background-color: ${"transparent"};
          `;
        case "Nelson":
          return css`
            background-color: ${"transparent"};
          `;
        case "Alaine":
          return css`
            background-color: ${"transparent"};
          `;
        case "Bauhaus":
          return css`
            background-color: ${"transparent"};
          `;
        case "Orielle":
          return css`
            background-color: ${"transparent"};
          `;
        case "Baze":
          return css`
            background-color: ${"transparent"};
          `;
        case "Uncurled":
          return css`
            background-color: ${"transparent"};
          `;
        case "Nominee":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage2 = styled.div(
  () => css`
    width: 96px;
    height: 77px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
  `,
);

const StyledRectangle803 = styled.div(
  () => css`
    width: 6px;
    height: 65px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #eaeaea;
    border-radius: 0px;
  `,
);

const StyledImageFrame = styled.div<{
  $template:
    | "Tesler"
    | "Aurora"
    | "Norman"
    | "Otis"
    | "Axis"
    | "Jakob"
    | "Bauhaus"
    | "Orielle"
    | "Uncurled"
    | "Poster"
    | "Panorama"
    | "Nelson"
    | "Twee"
    | "Cubic"
    | "Alaine"
    | "Anthra"
    | "Baze"
    | "Nominee";
}>(
  ({ $template }) => css`
    overflow: hidden;
    background-color: transparent;
    ${(() => {
      switch ($template) {
        case "Cubic":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 181px;
            justify-content: center;
            align-items: flex-end;
            width: fit-content;
          `;
        case "Anthra":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 154px;
            justify-content: center;
            align-items: flex-end;
            width: fit-content;
            height: 159px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle804 = styled.div(
  () => css`
    width: 5px;
    height: 159px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledRectangle805 = styled.div(
  () => css`
    width: 69px;
    height: 62px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle806 = styled.div(
  () => css`
    width: 12px;
    height: 159px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledRectangle807 = styled.div(
  () => css`
    width: 89px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle808 = styled.div(
  () => css`
    width: 21px;
    height: 92px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f1f1f1;
    border-radius: 2px;
  `,
);

/** Displays a visual preview thumbnail of a named design template or preset. Each variant corresponds to a different template style (e.g., Tesler, Aurora, Norman) and renders a static image or shape composition representing that template's appearance. */
export const PresetPreviewTemplate = React.forwardRef<
  HTMLDivElement,
  PresetPreviewTemplateProps
>(function PresetPreviewTemplate({ template = "Tesler", ...rest }, ref) {
  return (
    <StyledRoot
      role="img"
      aria-label="Template preview"
      {...rest}
      ref={ref}
      $template={template}
    >
      {template === "Tesler" && (
        <StyledTeslerPreviewSmall>
          {template === "Tesler" && <StyledTeslerPreviewSmallNew />}
          {template === "Tesler" && <StyledTeslerPreviewSmallNew2 />}
          {template === "Tesler" && <StyledRectangle802 />}
        </StyledTeslerPreviewSmall>
      )}
      {[
        "Axis",
        "Aurora",
        "Panorama",
        "Norman",
        "Poster",
        "Otis",
        "Twee",
        "Jakob",
        "Nelson",
        "Alaine",
        "Bauhaus",
        "Orielle",
        "Baze",
        "Uncurled",
        "Nominee",
      ].includes(template) && <StyledImage $template={template} />}
      {template === "Twee" && <StyledImage2 />}
      {template === "Twee" && <StyledRectangle803 />}
      {["Cubic", "Anthra"].includes(template) && (
        <StyledImageFrame $template={template}>
          {template === "Cubic" && <StyledRectangle804 />}
          {template === "Cubic" && <StyledRectangle805 />}
          {template === "Anthra" && <StyledRectangle806 />}
          {template === "Anthra" && <StyledRectangle807 />}
        </StyledImageFrame>
      )}
      {template === "Baze" && <StyledRectangle808 />}
    </StyledRoot>
  );
});
