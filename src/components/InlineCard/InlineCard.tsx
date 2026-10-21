import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface InlineCardProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Inline Loading" | "Inline Shimmer" | "Active";
}

const StyledRoot = styled.div<{
  $state: "Inline Loading" | "Inline Shimmer" | "Active";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Inline Loading":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 370px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Inline Shimmer":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 370px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 370px;
            height: 410px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame2147231177 = styled.div(
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

const StyledFrame2147231176 = styled.div<{
  $state: "Inline Loading" | "Inline Shimmer" | "Active";
}>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 5px;
    ${(() => {
      switch ($state) {
        case "Inline Loading":
          return css`
            background-color: ${"#f0efec"};
          `;
        case "Inline Shimmer":
          return css`
            background-color: ${"#f0efec"};
          `;
        case "Active":
          return css`
            background-color: ${theme["Background"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Active":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledConnectingToApp = styled.p(
  () => css`
    color: transparent;
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledApp = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Tertiary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledFrame2147231206 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame427320078 = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 370px;
    height: 370px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231191 = styled.div(
  () => css`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231205 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 370px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231200 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 370px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame2147231179 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 234px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame2147231199 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame1430106132 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0efec;
    border-radius: 10px;
  `,
);

const StyledFrame1430106104 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame1430106130 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame2147231180 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame2147231181 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 96px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame1430106662 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle3376 = styled.div(
  () => css`
    background-color: rgba(31, 30, 29, 0.15000000596046448);
    border-radius: 0px;
  `,
);

const StyledFrame2147231210 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061322 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0efec;
    border-radius: 10px;
  `,
);

const StyledFrame14301061042 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061302 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame21472311802 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame21472311812 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 96px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame21472312062 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle33762 = styled.div(
  () => css`
    background-color: rgba(31, 30, 29, 0.15000000596046448);
    border-radius: 0px;
  `,
);

const StyledFrame2147231211 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061323 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0efec;
    border-radius: 10px;
  `,
);

const StyledFrame14301061043 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061303 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame21472311803 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame21472311813 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 96px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame2147231207 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle33763 = styled.div(
  () => css`
    background-color: rgba(31, 30, 29, 0.15000000596046448);
    border-radius: 0px;
  `,
);

const StyledFrame2147231212 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061324 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0efec;
    border-radius: 10px;
  `,
);

const StyledFrame14301061044 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061304 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame21472311804 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame21472311814 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 96px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame2147231208 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRectangle33764 = styled.div(
  () => css`
    background-color: rgba(31, 30, 29, 0.15000000596046448);
    border-radius: 0px;
  `,
);

const StyledFrame2147231213 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061325 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0efec;
    border-radius: 10px;
  `,
);

const StyledFrame14301061045 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame14301061305 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame21472311805 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame21472311815 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 12px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 96px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 24px;
  `,
);

const StyledFrame4273200782 = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame21472311912 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231193 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231194 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231195 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledFrame2147231196 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

/** An inline card component that displays a connection or loading state between an app and a service. Supports three visual states: Inline Loading (with connecting text and animation), Inline Shimmer (skeleton placeholder), and Active (with icon and full content). */
export const InlineCard = React.forwardRef<HTMLDivElement, InlineCardProps>(
  function InlineCard({ state = "Inline Loading", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Connecting to App"
        aria-describedby="inline-card-status"
        {...rest}
        ref={ref}
        $state={state}
      >
        <StyledFrame2147231177>
          <StyledFrame2147231176 $state={state}></StyledFrame2147231176>
          {["Inline Loading", "Inline Shimmer"].includes(state) && (
            <StyledConnectingToApp>{"Connecting to App"}</StyledConnectingToApp>
          )}
          {state === "Active" && <StyledApp>{"App"}</StyledApp>}
        </StyledFrame2147231177>
        {state === "Inline Loading" && (
          <StyledFrame2147231206>
            {state === "Inline Loading" && (
              <StyledFrame427320078>
                {state === "Inline Loading" && (
                  <StyledFrame2147231191>
                    {state === "Inline Loading" && (
                      <Icon name={"Expand"} size={24} />
                    )}
                  </StyledFrame2147231191>
                )}
              </StyledFrame427320078>
            )}
          </StyledFrame2147231206>
        )}
        {state === "Inline Shimmer" && (
          <StyledFrame2147231205>
            {state === "Inline Shimmer" && (
              <StyledFrame2147231200>
                {state === "Inline Shimmer" && (
                  <StyledFrame2147231179></StyledFrame2147231179>
                )}
              </StyledFrame2147231200>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231199>
                {state === "Inline Shimmer" && (
                  <StyledFrame1430106132></StyledFrame1430106132>
                )}
                {state === "Inline Shimmer" && (
                  <StyledFrame1430106104>
                    {state === "Inline Shimmer" && (
                      <StyledFrame1430106130>
                        {state === "Inline Shimmer" && (
                          <StyledFrame2147231180></StyledFrame2147231180>
                        )}
                        {state === "Inline Shimmer" && (
                          <StyledFrame2147231181></StyledFrame2147231181>
                        )}
                      </StyledFrame1430106130>
                    )}
                  </StyledFrame1430106104>
                )}
              </StyledFrame2147231199>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame1430106662>
                {state === "Inline Shimmer" && <StyledRectangle3376 />}
              </StyledFrame1430106662>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231210>
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061322></StyledFrame14301061322>
                )}
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061042>
                    {state === "Inline Shimmer" && (
                      <StyledFrame14301061302>
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311802></StyledFrame21472311802>
                        )}
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311812></StyledFrame21472311812>
                        )}
                      </StyledFrame14301061302>
                    )}
                  </StyledFrame14301061042>
                )}
              </StyledFrame2147231210>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame21472312062>
                {state === "Inline Shimmer" && <StyledRectangle33762 />}
              </StyledFrame21472312062>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231211>
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061323></StyledFrame14301061323>
                )}
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061043>
                    {state === "Inline Shimmer" && (
                      <StyledFrame14301061303>
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311803></StyledFrame21472311803>
                        )}
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311813></StyledFrame21472311813>
                        )}
                      </StyledFrame14301061303>
                    )}
                  </StyledFrame14301061043>
                )}
              </StyledFrame2147231211>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231207>
                {state === "Inline Shimmer" && <StyledRectangle33763 />}
              </StyledFrame2147231207>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231212>
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061324></StyledFrame14301061324>
                )}
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061044>
                    {state === "Inline Shimmer" && (
                      <StyledFrame14301061304>
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311804></StyledFrame21472311804>
                        )}
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311814></StyledFrame21472311814>
                        )}
                      </StyledFrame14301061304>
                    )}
                  </StyledFrame14301061044>
                )}
              </StyledFrame2147231212>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231208>
                {state === "Inline Shimmer" && <StyledRectangle33764 />}
              </StyledFrame2147231208>
            )}
            {state === "Inline Shimmer" && (
              <StyledFrame2147231213>
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061325></StyledFrame14301061325>
                )}
                {state === "Inline Shimmer" && (
                  <StyledFrame14301061045>
                    {state === "Inline Shimmer" && (
                      <StyledFrame14301061305>
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311805></StyledFrame21472311805>
                        )}
                        {state === "Inline Shimmer" && (
                          <StyledFrame21472311815></StyledFrame21472311815>
                        )}
                      </StyledFrame14301061305>
                    )}
                  </StyledFrame14301061045>
                )}
              </StyledFrame2147231213>
            )}
          </StyledFrame2147231205>
        )}
        {state === "Active" && (
          <StyledFrame4273200782>
            {state === "Active" && (
              <StyledFrame21472311912>
                {state === "Active" && <Icon name={"Expand"} size={24} />}
              </StyledFrame21472311912>
            )}
            {state === "Active" && (
              <StyledFrame2147231193>
                {state === "Active" && <Icon name={"Map Small"} size={24} />}
              </StyledFrame2147231193>
            )}
            {state === "Active" && (
              <StyledFrame2147231194>
                {state === "Active" && <Icon name={"Map Small"} size={24} />}
              </StyledFrame2147231194>
            )}
            {state === "Active" && (
              <StyledFrame2147231195>
                {state === "Active" && <Icon name={"Map Small"} size={24} />}
              </StyledFrame2147231195>
            )}
            {state === "Active" && (
              <StyledFrame2147231196>
                {state === "Active" && <Icon name={"Map Small"} size={24} />}
              </StyledFrame2147231196>
            )}
          </StyledFrame4273200782>
        )}
      </StyledRoot>
    );
  },
);
