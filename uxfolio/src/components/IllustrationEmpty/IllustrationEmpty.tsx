import React from "react";
import styled, { css } from "styled-components";

export interface IllustrationEmptyProps extends Omit<
  React.ComponentPropsWithoutRef<"svg">,
  "type" | "color"
> {
  type?: "General" | "Give" | "Ask" | "Redeem";
  color?: "Full" | "Mono";
}

const StyledRoot = styled.svg(
  () => css`
    border-radius: 0px;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
  `,
);

const StyledIllustration = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 180px;
    height: 180px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 90px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 148px;
    height: 170px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"transparent"};
          `;
        case "Mono":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096903 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 130px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledExclude = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 3px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle695 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 48px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle696 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096904 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: 130px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledExclude2 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent2 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 64px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 3px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6952 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 48px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6962 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096902 = styled.div(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledExclude3 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 64px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle6953 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 48px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6963 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMessage = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    position: relative;
    border-radius: 1000px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 14px;
            padding-bottom: 12px;
            padding-left: 14px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Give":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 14px;
            padding-bottom: 12px;
            padding-left: 14px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8.5px;
            padding-right: 9px;
            padding-bottom: 9.5px;
            padding-left: 9px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Redeem":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 13px;
            padding-right: 16px;
            padding-bottom: 13px;
            padding-left: 17px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["General","Full"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Give","Full"]':
          return css`
            background-color: ${"#707070"};
          `;
        case '["Ask","Full"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Redeem","Full"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["General","Mono"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case '["Ask","Mono"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Redeem","Mono"]':
          return css`
            background-color: ${"#2400ed"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse153 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["General","Full"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Give","Full"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["General","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1532 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["General","Full"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Give","Full"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["General","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1533 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["General","Full"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Give","Full"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["General","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector3 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    position: absolute;
    left: 29px;
    bottom: -6px;
    width: 9px;
    height: 6px;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["General","Full"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Give","Full"]':
          return css`
            background-color: ${"#707070"};
          `;
        case '["General","Mono"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledperson = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            color: ${"#000000"};
          `;
        case "Mono":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-bricolage-grotesque, 'Bricolage Grotesque'), sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.24;
  `,
);

const StyledMessage2 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    position: relative;
    border-radius: 1000px;
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 14px;
            padding-bottom: 12px;
            padding-left: 14px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Ask":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 11px;
            padding-right: 7px;
            padding-bottom: 9px;
            padding-left: 7px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 38px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Mono":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1534 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse15322 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse15332 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector32 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    position: absolute;
    left: 25px;
    bottom: -6px;
    width: 9px;
    height: 6px;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Mono":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVector = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 24px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect2 = styled.div<{
  $type: "General" | "Give" | "Ask" | "Redeem";
  $color: "Full" | "Mono";
}>(
  ({ $type, $color }) => css`
    width: 139px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $color])) {
        case '["Give","Full"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Ask","Full"]':
          return css`
            background-color: ${"transparent"};
          `;
        case '["Give","Mono"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Ask","Mono"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096905 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledEllipse154 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1542 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse1543 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIntersect3 = styled.div(
  () => css`
    width: 133.99978637695312px;
    height: 122px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #0f0f0f;
    border-radius: 0px;
  `,
);

const StyledAa = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledBackground = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 84px;
    height: 84px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Mono":
          return css`
            background-color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledNumber = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Mono":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-bricolage-grotesque, 'Bricolage Grotesque'), sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.24;
  `,
);

const StyledFrame480969032 = styled.div(
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
    width: 130px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledExclude4 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle6954 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 80px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6964 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480969042 = styled.div(
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
    width: 130px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledExclude5 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent5 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRectangle6955 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 80px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6965 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubtract = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 181.71864318847656px;
    height: 94.45262145996094px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#515151"};
          `;
        case "Mono":
          return css`
            background-color: ${"#e5e5e5"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6956 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 78.02608489990234px;
    height: 3.079976797103882px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#515151"};
          `;
        case "Mono":
          return css`
            background-color: ${"#e5e5e5"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6966 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 61.59953689575195px;
    height: 3.079976797103882px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#515151"};
          `;
        case "Mono":
          return css`
            background-color: ${"#e5e5e5"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubtract2 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 177px;
    height: 92px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"transparent"};
          `;
        case "Mono":
          return css`
            background-color: ${"#f9f9f9"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6957 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 76px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#dadada"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle6967 = styled.div<{ $color: "Full" | "Mono" }>(
  ({ $color }) => css`
    width: 60px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Full":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Mono":
          return css`
            background-color: ${"#dadada"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUnion = styled.div(
  () => css`
    width: 180px;
    height: 180px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
  `,
);

const StyledAlmafada = styled.div(
  () => css`
    width: 157px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** An empty state illustration component that visually communicates the absence of content. Supports multiple thematic variants (General, Give, Ask, Redeem) and color modes (Full color or Mono). */
export const IllustrationEmpty = React.forwardRef<
  SVGSVGElement,
  IllustrationEmptyProps
>(function IllustrationEmpty(
  { type = "General", color = "Full", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="img"
      aria-label="Empty state illustration"
      {...rest}
      ref={ref}
    >
      <StyledIllustration $color={color} />
      {["General", "Give", "Ask"].includes(type) && (
        <StyledIntersect $color={color} />
      )}
      {["General", "Ask"].includes(type) && (
        <StyledFrame48096903 $type={type}>
          {["General", "Ask"].includes(type) && (
            <StyledExclude $color={color} />
          )}
          {["General", "Ask"].includes(type) && (
            <StyledContent $type={type}>
              {["General", "Ask"].includes(type) && (
                <StyledRectangle695 $color={color} />
              )}
              {["General", "Ask"].includes(type) && (
                <StyledRectangle696 $color={color} />
              )}
            </StyledContent>
          )}
        </StyledFrame48096903>
      )}
      {["General", "Ask"].includes(type) && (
        <StyledFrame48096904 $type={type}>
          {["General", "Ask"].includes(type) && (
            <StyledExclude2 $color={color} />
          )}
          {["General", "Ask"].includes(type) && (
            <StyledContent2 $type={type}>
              {["General", "Ask"].includes(type) && (
                <StyledRectangle6952 $color={color} />
              )}
              {["General", "Ask"].includes(type) && (
                <StyledRectangle6962 $color={color} />
              )}
            </StyledContent2>
          )}
        </StyledFrame48096904>
      )}
      {type === "General" && (
        <StyledFrame48096902>
          {type === "General" && <StyledExclude3 $color={color} />}
          {type === "General" && (
            <StyledContent3>
              {type === "General" && <StyledRectangle6953 $color={color} />}
              {type === "General" && <StyledRectangle6963 $color={color} />}
            </StyledContent3>
          )}
        </StyledFrame48096902>
      )}
      <StyledMessage $type={type} $color={color}>
        {["General", "Give"].includes(type) && (
          <StyledEllipse153 $type={type} $color={color} />
        )}
        {["General", "Give"].includes(type) && (
          <StyledEllipse1532 $type={type} $color={color} />
        )}
        {["General", "Give"].includes(type) && (
          <StyledEllipse1533 $type={type} $color={color} />
        )}
        {["General", "Give"].includes(type) && (
          <StyledVector3 $type={type} $color={color} />
        )}
        {type === "Ask" && <Styledperson $color={color} />}
        {type === "Redeem" && <Styled $color={color}>{"%"}</Styled>}
      </StyledMessage>
      {["General", "Ask"].includes(type) && (
        <StyledMessage2 $type={type} $color={color}>
          {type === "General" && <StyledEllipse1534 $color={color} />}
          {type === "General" && <StyledEllipse15322 $color={color} />}
          {type === "General" && <StyledEllipse15332 $color={color} />}
          {type === "General" && <StyledVector32 $color={color} />}
          {type === "Ask" && <StyledVector $color={color} />}
        </StyledMessage2>
      )}
      {["Give", "Ask"].includes(type) && (
        <StyledIntersect2 $type={type} $color={color} />
      )}
      {type === "Give" && (
        <StyledFrame48096905>
          {type === "Give" && <StyledEllipse154 $color={color} />}
          {type === "Give" && <StyledEllipse1542 $color={color} />}
          {type === "Give" && <StyledEllipse1543 $color={color} />}
        </StyledFrame48096905>
      )}
      {type === "Give" && color === "Full" && <StyledIntersect3 />}
      {type === "Give" && (
        <StyledAa>
          {type === "Give" && <StyledBackground $color={color} />}
          {type === "Give" && <StyledNumber $color={color}>{"3"}</StyledNumber>}
        </StyledAa>
      )}
      {type === "Ask" && (
        <StyledFrame480969032>
          {type === "Ask" && <StyledExclude4 $color={color} />}
          {type === "Ask" && (
            <StyledContent4>
              {type === "Ask" && <StyledRectangle6954 $color={color} />}
              {type === "Ask" && <StyledRectangle6964 $color={color} />}
            </StyledContent4>
          )}
        </StyledFrame480969032>
      )}
      {type === "Ask" && (
        <StyledFrame480969042>
          {type === "Ask" && <StyledExclude5 $color={color} />}
          {type === "Ask" && (
            <StyledContent5>
              {type === "Ask" && <StyledRectangle6955 $color={color} />}
              {type === "Ask" && <StyledRectangle6965 $color={color} />}
            </StyledContent5>
          )}
        </StyledFrame480969042>
      )}
      {type === "Redeem" && (
        <div>
          {type === "Redeem" && <StyledSubtract $color={color} />}
          {type === "Redeem" && <StyledRectangle6956 $color={color} />}
          {type === "Redeem" && <StyledRectangle6966 $color={color} />}
        </div>
      )}
      {type === "Redeem" && (
        <div>
          {type === "Redeem" && <StyledSubtract2 $color={color} />}
          {type === "Redeem" && <StyledRectangle6957 $color={color} />}
          {type === "Redeem" && <StyledRectangle6967 $color={color} />}
        </div>
      )}
      {type === "Give" && color === "Mono" && (
        <div>
          {type === "Give" && color === "Mono" && <StyledUnion />}
          {type === "Give" && color === "Mono" && <StyledAlmafada />}
        </div>
      )}
    </StyledRoot>
  );
});
