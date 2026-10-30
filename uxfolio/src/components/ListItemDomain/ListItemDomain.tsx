import React from "react";
import styled, { css } from "styled-components";
import { IndicatorStatus } from "../IndicatorStatus";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { NotPublic } from "../NotPublic";

export interface ListItemDomainProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "type"
> {
  type?: "Available" | "Unavailable" | "Recommended" | "Great alternative";
}

const StyledRoot = styled.li<{
  $type: "Available" | "Unavailable" | "Recommended" | "Great alternative";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Recommended":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 550px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Great alternative":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 550px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Available":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 900px;
            height: 102px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Unavailable":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 900px;
            height: 103px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Recommended":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Great alternative":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Recommended":
          return css`
            border-radius: 8px;
          `;
        case "Great alternative":
          return css`
            border-radius: 8px;
          `;
        case "Available":
          return css`
            border-radius: 0px;
          `;
        case "Unavailable":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCartItem = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDomain = styled.p(() => css``);

const StyledPrice = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: BASELINE;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPrice2 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledDuration = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledCartItem2 = styled.div(
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
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDomain2 = styled.p<{
  $type: "Available" | "Unavailable" | "Recommended" | "Great alternative";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Unavailable":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPrice3 = styled.div<{
  $type: "Available" | "Unavailable" | "Recommended" | "Great alternative";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Available":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: BASELINE;
            width: fit-content;
          `;
        case "Unavailable":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 6px;
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

const StyledPrice4 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledDuration2 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledUnavailable = styled.span(
  () => css`
    color: #707070;
  `,
);

/** Represents a single domain listing item in a search or cart context, displaying the domain name, price, duration, and availability status (Available, Unavailable, Recommended, or Great alternative) along with an action button. */
export const ListItemDomain = React.forwardRef<
  HTMLLIElement,
  ListItemDomainProps
>(function ListItemDomain({ type = "Recommended", ...rest }, ref) {
  return (
    <StyledRoot
      role="listitem"
      aria-label="Domain listing item"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Recommended", "Great alternative"].includes(type) && (
        <StyledInfo>
          {["Recommended", "Great alternative"].includes(type) && (
            <IndicatorStatus type={"Highlight"} mode={"Light"} />
          )}
          {["Recommended", "Great alternative"].includes(type) && (
            <StyledCartItem>
              {["Recommended", "Great alternative"].includes(type) && (
                <StyledDomain>{"nathandavidson.com"}</StyledDomain>
              )}
              {["Recommended", "Great alternative"].includes(type) && (
                <StyledPrice>
                  {["Recommended", "Great alternative"].includes(type) && (
                    <StyledPrice2>{"$35"}</StyledPrice2>
                  )}
                  {["Recommended", "Great alternative"].includes(type) && (
                    <StyledDuration>{"/ year"}</StyledDuration>
                  )}
                </StyledPrice>
              )}
            </StyledCartItem>
          )}
        </StyledInfo>
      )}
      <PrimaryButtonNeutral state={"Default"} size={"Regular"} mode={"Light"} />
      {["Available", "Unavailable"].includes(type) && (
        <StyledCartItem2>
          {["Available", "Unavailable"].includes(type) && (
            <StyledDomain2 $type={type}>{"nathandavidson.com"}</StyledDomain2>
          )}
          {["Available", "Unavailable"].includes(type) && (
            <StyledPrice3 $type={type}>
              {type === "Available" && <StyledPrice4>{"$35"}</StyledPrice4>}
              {type === "Available" && (
                <StyledDuration2>{"/ year"}</StyledDuration2>
              )}
              {type === "Unavailable" && <NotPublic />}
              {type === "Unavailable" && (
                <StyledUnavailable>{"Unavailable"}</StyledUnavailable>
              )}
            </StyledPrice3>
          )}
        </StyledCartItem2>
      )}
    </StyledRoot>
  );
});
