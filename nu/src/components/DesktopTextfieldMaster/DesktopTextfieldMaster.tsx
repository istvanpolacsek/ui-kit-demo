import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Flag } from "../Flag";
import {
  PlaceholderAtomsWeb,
  type PlaceholderAtomsWebProps,
} from "../PlaceholderAtomsWeb";

export interface DesktopTextfieldMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "showLeftIcon"
  | "showRightIcon"
  | "showLink"
  | "showHelperText"
  | "showCountryCode"
  | "instance"
  | "showDuration"
  | "textState"
> {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  showLink?: boolean;
  showHelperText?: boolean;
  showCountryCode?: boolean;
  instance?: string;
  showDuration?: boolean;
  textState?: PlaceholderAtomsWebProps["textState"];
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

const StyledFrame83 = styled.div(
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
    color: ${theme["gray"]["500"]};
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

const StyledCountryCode = styled.div(
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

const StyledFrame85 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledatomsDefault = styled.span(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
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

const StyledDuration = styled.span(
  () => css`
    color: #606060;
  `,
);

const StyledLink = styled.span(
  ({ theme }) => css`
    color: ${theme["accent"]["accentBrand"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
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

/** A master text field component for desktop that includes an optional label, left icon, country code selector (with flag and dial code), a text input area, right-side duration and link text, a right icon, and a helper text message below. Supports toggling visibility of icons, country code, link, helper text, and duration via boolean props. */
export const DesktopTextfieldMaster = React.forwardRef<
  HTMLDivElement,
  DesktopTextfieldMasterProps
>(function DesktopTextfieldMaster(
  {
    showLeftIcon = true,
    showRightIcon = true,
    showLink = true,
    showHelperText = true,
    showCountryCode = true,
    instance = "642:6538",
    showDuration = false,
    textState = "Placeholder",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="group" aria-label="Text field" {...rest} ref={ref}>
      <StyledFrame83>
        <StyledLabel>{"Label"}</StyledLabel>
        <StyledtextFieldMaster>
          <StyledContainer>
            <StyledLeftContent>
              <Icon name={"account_box"} size={24} />
              {showCountryCode && (
                <StyledCountryCode>
                  <Flag country={"IN"} />
                  <StyledFrame85>
                    <StyledatomsDefault>{"+91"}</StyledatomsDefault>
                    <Icon name={"keyboard_arrow_down"} size={24} />
                  </StyledFrame85>
                </StyledCountryCode>
              )}
              <StyledTextArea>
                <PlaceholderAtomsWeb textState={textState} />
              </StyledTextArea>
            </StyledLeftContent>
            <StyledRightContent>
              {showDuration && <StyledDuration>{"/Duration"}</StyledDuration>}
              {showLink && <StyledLink>{"Link"}</StyledLink>}
              <Icon name={"close_small"} size={24} />
            </StyledRightContent>
          </StyledContainer>
        </StyledtextFieldMaster>
      </StyledFrame83>
      {showHelperText && (
        <StyledHelperText>
          <Icon name={"info"} size={24} />
          <StyledHelperText2>{"Helper text"}</StyledHelperText2>
        </StyledHelperText>
      )}
    </StyledRoot>
  );
});
