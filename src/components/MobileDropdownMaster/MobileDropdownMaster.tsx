import React from "react";
import styled, { css } from "styled-components";
import { PlaceholderTextWeb } from "../PlaceholderTextWeb";
import { Icon } from "../Icon";
import { OptionMobile } from "../OptionMobile";

export interface MobileDropdownMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showOptions" | "showLabel" | "showHelperText"
> {
  showOptions?: boolean;
  showLabel?: boolean;
  showHelperText?: boolean;
}

const StyledRoot = styled.div(
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
    width: 401px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styleddropdown = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 8px;
  `,
);

const StyledLeftContent = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledTextArea = styled.div(
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
    border-radius: 0px;
  `,
);

const StyledRightContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledContainer2 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 8px;
  `,
);

const StyledOptions = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledoptionMobile = styled.li(
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

const StyledoptionMobile2 = styled.li(
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

const StyledoptionMobile3 = styled.li(
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

const StyledHelperText2 = styled.p(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

/** A mobile dropdown field component that displays a label, a text input trigger with an icon, an optional list of selectable options, and optional helper text. Supports toggling the options panel, label visibility, and helper text visibility. */
export const MobileDropdownMaster = React.forwardRef<
  HTMLDivElement,
  MobileDropdownMasterProps
>(function MobileDropdownMaster(
  { showOptions = true, showLabel = true, showHelperText = true, ...rest },
  ref,
) {
  return (
    <StyledRoot role="combobox" aria-expanded aria-haspopup {...rest} ref={ref}>
      <Styleddropdown>
        {showLabel && <StyledLabel>{"Label"}</StyledLabel>}
        <StyledtextFieldMaster>
          <StyledContainer>
            <StyledLeftContent>
              <StyledTextArea>
                <PlaceholderTextWeb textState={"Placeholder"} />
              </StyledTextArea>
            </StyledLeftContent>
            <StyledRightContent>
              <Icon name={"keyboard_arrow_down"} size={24} />
            </StyledRightContent>
          </StyledContainer>
          {showOptions && (
            <StyledContainer2>
              <StyledOptions>
                <StyledoptionMobile>
                  <OptionMobile state={"Pressed"} />
                </StyledoptionMobile>
                <StyledoptionMobile2>
                  <OptionMobile state={"Default"} />
                </StyledoptionMobile2>
                <StyledoptionMobile3>
                  <OptionMobile state={"Default"} />
                </StyledoptionMobile3>
              </StyledOptions>
            </StyledContainer2>
          )}
        </StyledtextFieldMaster>
      </Styleddropdown>
      {showHelperText && (
        <StyledHelperText>
          <Icon name={"info"} size={24} />
          <StyledHelperText2>{"Helper text"}</StyledHelperText2>
        </StyledHelperText>
      )}
    </StyledRoot>
  );
});
