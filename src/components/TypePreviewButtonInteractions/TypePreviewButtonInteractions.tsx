import React from "react";
import styled, { css } from "styled-components";
import { NoLink } from "../NoLink";
import { None } from "../None";
import { ExternalLink } from "../ExternalLink";
import { PDFResum } from "../PDFResum";
import { Copy } from "../Copy";

export interface TypePreviewButtonInteractionsProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?:
    | "No link"
    | "No hover"
    | "Link"
    | "Page"
    | "Copy"
    | "Resume"
    | "Slow down"
    | "Pause";
}

const StyledRoot = styled.div<{
  $type:
    | "No link"
    | "No hover"
    | "Link"
    | "Page"
    | "Copy"
    | "Resume"
    | "Slow down"
    | "Pause";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
    ${(() => {
      switch ($type) {
        case "No link":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "No hover":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 11px;
            padding-right: 11px;
            padding-bottom: 11px;
            padding-left: 11px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Link":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Page":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 11px;
            padding-right: 11px;
            padding-bottom: 11px;
            padding-left: 11px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Resume":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Copy":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 11px;
            padding-right: 11px;
            padding-bottom: 11px;
            padding-left: 11px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Slow down":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 11px;
            padding-right: 11px;
            padding-bottom: 11px;
            padding-left: 11px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Pause":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 40px;
    height: 40px;
    box-sizing: border-box;
  `,
);

const StyledBoundingBox = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledfileExport = styled.span(
  () => css`
    width: 12.26250171661377px;
    height: 15.28124713897705px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const Styledsnail1 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1.12396240234375px;
    padding-right: 1.1222374439239502px;
    padding-bottom: 1.125px;
    padding-left: 1.124999761581421px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledVector = styled.div(
  () => css`
    width: 15.752762794494629px;
    height: 15.75103759765625px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledBoundingBox2 = styled.div(
  () => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const StyledpauseCircle = styled.span(
  () => css`
    width: 17.005414962768555px;
    height: 17.005414962768555px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
  `,
);

/** A preview component showcasing various button interaction states and types, including no link, no hover, external link, file export, PDF resumé, copy, slow down, and pause variants. Used to demonstrate and document button behaviors in a design system. */
export const TypePreviewButtonInteractions = React.forwardRef<
  HTMLDivElement,
  TypePreviewButtonInteractionsProps
>(function TypePreviewButtonInteractions({ type = "No link", ...rest }, ref) {
  return (
    <StyledRoot
      role="presentation"
      aria-label="Button interaction type preview"
      {...rest}
      ref={ref}
      $type={type}
    >
      {type === "No link" && <NoLink />}
      {type === "No hover" && <None />}
      {type === "Link" && <ExternalLink />}
      {type === "Page" && (
        <div>
          {type === "Page" && <StyledBoundingBox />}
          {type === "Page" && <StyledfileExport />}
        </div>
      )}
      {type === "Resume" && <PDFResum />}
      {type === "Copy" && <Copy />}
      {type === "Slow down" && (
        <Styledsnail1>{type === "Slow down" && <StyledVector />}</Styledsnail1>
      )}
      {type === "Pause" && (
        <div>
          {type === "Pause" && <StyledBoundingBox2 />}
          {type === "Pause" && <StyledpauseCircle />}
        </div>
      )}
    </StyledRoot>
  );
});
