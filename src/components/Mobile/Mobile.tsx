import React from "react";
import styled, { css } from "styled-components";
import {
  PlaceholderAtomsWeb,
  type PlaceholderAtomsWebProps,
} from "../PlaceholderAtomsWeb";
import { Icon } from "../Icon";

export interface MobileProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state" | "textState"
> {
  state?:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
  textState?: PlaceholderAtomsWebProps["textState"];
}

const StyledRoot = styled.div<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 353px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Hover":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Active":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Filled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Success":
          return css`
            color: ${theme["green"]["800"]};
          `;
        case "Warning":
          return css`
            color: ${theme["orange"]["800"]};
          `;
        case "Error":
          return css`
            color: ${theme["red"]["800"]};
          `;
        case "State8":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledWebTextfieldMaster = styled.div(
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

const StyledContainer = styled.div(
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

const StyledLabel = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledtextFieldMaster = styled.div(
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
    height: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContainer2 = styled.div<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ theme, $state }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Active":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Filled":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Success":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Warning":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Error":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "State8":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Hover":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Active":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Filled":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        case "Success":
          return css`
            border-color: ${theme["alert"]["successDefault"]};
          `;
        case "Warning":
          return css`
            border-color: ${theme["alert"]["warningDefault"]};
          `;
        case "Error":
          return css`
            border-color: ${theme["alert"]["errorDefault"]};
          `;
        case "State8":
          return css`
            border-color: ${theme["border"]["borderGray"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLeftContent = styled.div<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Hover":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Filled":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Success":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Error":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "State8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextArea = styled.div<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Hover":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Filled":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Success":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Error":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "State8":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPlaceholderAtomsWeb = styled.div<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Hover":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Filled":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Success":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Error":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "State8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 2px;
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

const StyledatomsDefault = styled.span<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Hover":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Filled":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Success":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Error":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "State8":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledCursor = styled.div(
  ({ theme }) => css`
    width: 1px;
    height: 14px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["accent"]["accentGray"]};
    border-radius: 1px;
  `,
);

const Styledexpand = styled.div(
  () => css`
    position: absolute;
    left: 340px;
    top: 187px;
    width: 8px;
    height: 8px;
  `,
);

const Styledline = styled.div(
  () => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styledline2 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextArea2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledPlaceholderAtomsWeb2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledFrame1707482905 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHelperText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledHelperText2 = styled.span<{
  $state:
    | "Hover"
    | "Default"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "State8";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Hover":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Active":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Filled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Success":
          return css`
            color: ${theme["green"]["800"]};
          `;
        case "Warning":
          return css`
            color: ${theme["orange"]["800"]};
          `;
        case "Error":
          return css`
            color: ${theme["red"]["800"]};
          `;
        case "State8":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledCharacters = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCharacterCount = styled.span(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledCharacterCount2 = styled.span(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

/** A mobile text field component with label, placeholder, helper text, and character count. Supports multiple states including Default, Hover, Active, Filled, Success, Warning, and Error. */
export const Mobile = React.forwardRef<HTMLDivElement, MobileProps>(
  function Mobile(
    { state = "Default", textState = "Placeholder", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="group"
        aria-label="Text field"
        aria-describedby="helper-text"
        {...rest}
        ref={ref}
        $state={state}
      >
        <StyledWebTextfieldMaster>
          <StyledContainer>
            <StyledLabel>{"Label"}</StyledLabel>
            <StyledtextFieldMaster>
              <StyledContainer2 $state={state}>
                {[
                  "Default",
                  "Hover",
                  "Active",
                  "Filled",
                  "Success",
                  "Error",
                  "State8",
                ].includes(state) && (
                  <StyledLeftContent $state={state}>
                    {[
                      "Default",
                      "Hover",
                      "Active",
                      "Filled",
                      "Success",
                      "Error",
                      "State8",
                    ].includes(state) && (
                      <StyledTextArea $state={state}>
                        {[
                          "Default",
                          "Hover",
                          "Active",
                          "Filled",
                          "Success",
                          "Error",
                          "State8",
                        ].includes(state) && (
                          <StyledPlaceholderAtomsWeb $state={state}>
                            {[
                              "Default",
                              "Hover",
                              "Filled",
                              "Success",
                              "Error",
                              "State8",
                            ].includes(state) && (
                              <StyledatomsDefault $state={state}>
                                {
                                  (
                                    {
                                      '["Default"]': "Insert text here",
                                      '["Hover"]': "Insert text here",
                                      '["Filled"]':
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis non felis non faucibus. Vestibulum tincidunt maximus finibus. Nunc ultricies ante pellentesque turpis mattis pharetra. Ut porta hendrerit eros ut consequat. Integer risus lorem, malesuada et ullamcorper vitae, consectetur maximus arcu. Sed ullamcorper sed felis ut fermentum. Donec sit amet ornare magna, non auctor massa. In orci nunc, laoreet non convallis ac, hendrerit sit amet leo. Suspendisse ac euismod risus. Quisque sit amet lobortis lacus. Duis fermentum mollis metus at scelerisque. Maecenas ac auctor nulla, a mattis nisl. Fusce sodales dui sed nunc posuere, ut laoreet nunc bibendum.\nNunc facilisis bibendum eros id congue. Vestibulum ultricies nulla arcu, sit amet porttitor lorem bibendum at. Maecenas ut vehicula augue. Curabitur convallis sit amet est vel consequat. Integer quis vulputate ipsum. Sed ornare posuere ante aliquet tristique. Sed facilisis urna eros, eu ultricies dui euismod ac. Ut sed massa a sem fermentum placerat et sit amet purus. Integer elit orci, malesuada sit amet magna ac, scelerisque rhoncus mi. Suspendisse potenti. Nulla facilisi. Mauris pulvinar varius odio. Nunc venenatis enim at venenatis tristique.\nQuisque non egestas eros. Mauris tincidunt orci id est aliquet dictum nec vestibulum nisi. Nulla pretium ex eu tellus fringilla, ac tincidunt massa vehicula. Nam odio ipsum, eleifend sed lacus id, aliquam finibus mauris. Donec ac arcu et eros sollicitudin ullamcorper ut vitae tortor. Aliquam erat volutpat. Ut ac est suscipit, tempor diam eu, dignissim metus.\nVivamus blandit nec nibh ut tempor. Praesent aliquet ultricies eros, et lobortis dolor suscipit blandit. Praesent ac bibendum turpis. Donec dignissim dui turpis, sed molestie mi placerat in. Nunc a ornare ante. Nunc vulputate odio vel leo tincidunt sagittis. Donec at feugiat sem.\nPhasellus sed sem ut nisl rutrum consectetur eu id mauris. Nulla id consequat justo. Nulla sed ex posuere nulla tincidunt semper. Donec ut tincidunt tellus, vel sollicitudin lectus. Proin id nibh faucibus, congue libero sed, tristique nisi. In eget vehicula urna, quis fringilla lacus. Vestibulum ligula metus, lacinia eget mattis euismod, pulvinar eu ante. Vivamus interdum venenatis leo sit amet vulputate.\n",
                                      '["Success"]':
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis non felis non faucibus. Vestibulum tincidunt maximus finibus. Nunc ultricies ante pellentesque turpis mattis pharetra. Ut porta hendrerit eros ut consequat. Integer risus lorem, malesuada et ullamcorper vitae, consectetur maximus arcu. Sed ullamcorper sed felis ut fermentum. Donec sit amet ornare magna, non auctor massa. In orci nunc, laoreet non convallis ac, hendrerit sit amet leo. Suspendisse ac euismod risus. Quisque sit amet lobortis lacus. Duis fermentum mollis metus at scelerisque. Maecenas ac auctor nulla, a mattis nisl. Fusce sodales dui sed nunc posuere, ut laoreet nunc bibendum.\nNunc facilisis bibendum eros id congue. Vestibulum ultricies nulla arcu, sit amet porttitor lorem bibendum at. Maecenas ut vehicula augue. Curabitur convallis sit amet est vel consequat. Integer quis vulputate ipsum. Sed ornare posuere ante aliquet tristique. Sed facilisis urna eros, eu ultricies dui euismod ac. Ut sed massa a sem fermentum placerat et sit amet purus. Integer elit orci, malesuada sit amet magna ac, scelerisque rhoncus mi. Suspendisse potenti. Nulla facilisi. Mauris pulvinar varius odio. Nunc venenatis enim at venenatis tristique.\nQuisque non egestas eros. Mauris tincidunt orci id est aliquet dictum nec vestibulum nisi. Nulla pretium ex eu tellus fringilla, ac tincidunt massa vehicula. Nam odio ipsum, eleifend sed lacus id, aliquam finibus mauris. Donec ac arcu et eros sollicitudin ullamcorper ut vitae tortor. Aliquam erat volutpat. Ut ac est suscipit, tempor diam eu, dignissim metus.\nVivamus blandit nec nibh ut tempor. Praesent aliquet ultricies eros, et lobortis dolor suscipit blandit. Praesent ac bibendum turpis. Donec dignissim dui turpis, sed molestie mi placerat in. Nunc a ornare ante. Nunc vulputate odio vel leo tincidunt sagittis. Donec at feugiat sem.\nPhasellus sed sem ut nisl rutrum consectetur eu id mauris. Nulla id consequat justo. Nulla sed ex posuere nulla tincidunt semper. Donec ut tincidunt tellus, vel sollicitudin lectus. Proin id nibh faucibus, congue libero sed, tristique nisi. In eget vehicula urna, quis fringilla lacus. Vestibulum ligula metus, lacinia eget mattis euismod, pulvinar eu ante. Vivamus interdum venenatis leo sit amet vulputate.\n",
                                      '["Error"]':
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis non felis non faucibus. Vestibulum tincidunt maximus finibus. Nunc ultricies ante pellentesque turpis mattis pharetra. Ut porta hendrerit eros ut consequat. Integer risus lorem, malesuada et ullamcorper vitae, consectetur maximus arcu. Sed ullamcorper sed felis ut fermentum. Donec sit amet ornare magna, non auctor massa. In orci nunc, laoreet non convallis ac, hendrerit sit amet leo. Suspendisse ac euismod risus. Quisque sit amet lobortis lacus. Duis fermentum mollis metus at scelerisque. Maecenas ac auctor nulla, a mattis nisl. Fusce sodales dui sed nunc posuere, ut laoreet nunc bibendum.\nNunc facilisis bibendum eros id congue. Vestibulum ultricies nulla arcu, sit amet porttitor lorem bibendum at. Maecenas ut vehicula augue. Curabitur convallis sit amet est vel consequat. Integer quis vulputate ipsum. Sed ornare posuere ante aliquet tristique. Sed facilisis urna eros, eu ultricies dui euismod ac. Ut sed massa a sem fermentum placerat et sit amet purus. Integer elit orci, malesuada sit amet magna ac, scelerisque rhoncus mi. Suspendisse potenti. Nulla facilisi. Mauris pulvinar varius odio. Nunc venenatis enim at venenatis tristique.\nQuisque non egestas eros. Mauris tincidunt orci id est aliquet dictum nec vestibulum nisi. Nulla pretium ex eu tellus fringilla, ac tincidunt massa vehicula. Nam odio ipsum, eleifend sed lacus id, aliquam finibus mauris. Donec ac arcu et eros sollicitudin ullamcorper ut vitae tortor. Aliquam erat volutpat. Ut ac est suscipit, tempor diam eu, dignissim metus.\nVivamus blandit nec nibh ut tempor. Praesent aliquet ultricies eros, et lobortis dolor suscipit blandit. Praesent ac bibendum turpis. Donec dignissim dui turpis, sed molestie mi placerat in. Nunc a ornare ante. Nunc vulputate odio vel leo tincidunt sagittis. Donec at feugiat sem.\nPhasellus sed sem ut nisl rutrum consectetur eu id mauris. Nulla id consequat justo. Nulla sed ex posuere nulla tincidunt semper. Donec ut tincidunt tellus, vel sollicitudin lectus. Proin id nibh faucibus, congue libero sed, tristique nisi. In eget vehicula urna, quis fringilla lacus. Vestibulum ligula metus, lacinia eget mattis euismod, pulvinar eu ante. Vivamus interdum venenatis leo sit amet vulputate.\n",
                                      '["State8"]': "Insert text here",
                                    } as Record<string, string>
                                  )[JSON.stringify([state])]
                                }
                              </StyledatomsDefault>
                            )}
                            {state === "Active" && <StyledCursor />}
                          </StyledPlaceholderAtomsWeb>
                        )}
                      </StyledTextArea>
                    )}
                  </StyledLeftContent>
                )}
                <Styledexpand>
                  <Styledline />
                  <Styledline2 />
                </Styledexpand>
                {state === "Warning" && (
                  <StyledTextArea2>
                    {state === "Warning" && (
                      <StyledPlaceholderAtomsWeb2>
                        <PlaceholderAtomsWeb textState={textState} />
                      </StyledPlaceholderAtomsWeb2>
                    )}
                  </StyledTextArea2>
                )}
              </StyledContainer2>
            </StyledtextFieldMaster>
          </StyledContainer>
          <StyledFrame1707482905>
            <StyledHelperText>
              <Icon name={"info"} size={24} />
              <StyledHelperText2 $state={state}>
                {"Helper text"}
              </StyledHelperText2>
            </StyledHelperText>
            <StyledCharacters>
              {state === "Default" && (
                <StyledCharacterCount>{"0/500"}</StyledCharacterCount>
              )}
              {[
                "Hover",
                "Active",
                "Filled",
                "Success",
                "Warning",
                "Error",
                "State8",
              ].includes(state) && (
                <StyledCharacterCount2>
                  {
                    (
                      {
                        '["Hover"]': "0/500",
                        '["Active"]': "0/500",
                        '["Filled"]': "300/500",
                        '["Success"]': "300/500",
                        '["Warning"]': "300/500",
                        '["Error"]': "300/500",
                        '["State8"]': "0/500",
                      } as Record<string, string>
                    )[JSON.stringify([state])]
                  }
                </StyledCharacterCount2>
              )}
            </StyledCharacters>
          </StyledFrame1707482905>
        </StyledWebTextfieldMaster>
      </StyledRoot>
    );
  },
);
