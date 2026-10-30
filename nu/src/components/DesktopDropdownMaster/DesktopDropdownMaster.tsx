import React from "react";
import styled, { css } from "styled-components";
import { PlaceholderTextWeb } from "../PlaceholderTextWeb";
import { Icon } from "../Icon";
import { OptionWeb } from "../OptionWeb";

export interface DesktopDropdownMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showOptions" | "showHelperText" | "showLabel"
> {
  showOptions?: boolean;
  showHelperText?: boolean;
  showLabel?: boolean;
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
    width: 467px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDropdown = styled.div(
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
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
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
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
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

const StyledOptions = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
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

const StyledOptions2 = styled.ul(
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

const StyledoptionWeb = styled.li(
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

const StyledoptionWeb2 = styled.li(
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

const StyledoptionWeb3 = styled.li(
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
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A desktop dropdown form field component consisting of an optional label, a text input trigger that displays a dropdown options list, and optional helper text. Supports toggling visibility of the label, options list, and helper text. */
export const DesktopDropdownMaster = React.forwardRef<
  HTMLDivElement,
  DesktopDropdownMasterProps
>(function DesktopDropdownMaster(
  { showOptions = true, showHelperText = true, showLabel = true, ...rest },
  ref,
) {
  return (
    <StyledRoot role="combobox" aria-expanded aria-haspopup {...rest} ref={ref}>
      <StyledDropdown>
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
        </StyledtextFieldMaster>
        {showOptions && (
          <StyledOptions>
            <StyledOptions2>
              <StyledoptionWeb>
                <OptionWeb />
              </StyledoptionWeb>
              <StyledoptionWeb2>
                <OptionWeb />
              </StyledoptionWeb2>
              <StyledoptionWeb3>
                <OptionWeb />
              </StyledoptionWeb3>
            </StyledOptions2>
          </StyledOptions>
        )}
      </StyledDropdown>
      {showHelperText && (
        <StyledHelperText>
          <Icon name={"info"} size={24} />
          <StyledHelperText2>{"Helper text"}</StyledHelperText2>
        </StyledHelperText>
      )}
    </StyledRoot>
  );
});
