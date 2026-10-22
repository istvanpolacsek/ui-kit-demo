import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Flag } from "../Flag";
import { ChevronDown } from "../ChevronDown";
import { PlaceholderAtomsMobile } from "../PlaceholderAtomsMobile";

export interface MobileTextfieldMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showCountryCode" | "showLeftIcon" | "showLink" | "showRightIcon"
> {
  showCountryCode?: boolean;
  showLeftIcon?: boolean;
  showLink?: boolean;
  showRightIcon?: boolean;
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
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
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

const StyledatomsDefault = styled.div(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
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

const StyledLink = styled.span(
  ({ theme }) => css`
    color: ${theme["accent"]["accentBrand"]};
    font-family: "Roboto";
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
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

/** A mobile text field component with optional country code selector, left icon, right icon, link action, and helper text. Supports phone number input with flag and dial code prefix. */
export const MobileTextfieldMaster = React.forwardRef<
  HTMLDivElement,
  MobileTextfieldMasterProps
>(function MobileTextfieldMaster(
  {
    showCountryCode = true,
    showLeftIcon = true,
    showLink = true,
    showRightIcon = true,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Mobile number input field"
      {...rest}
      ref={ref}
    >
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
                    <ChevronDown type={"Outlined"} />
                  </StyledFrame85>
                </StyledCountryCode>
              )}
              <StyledTextArea>
                <PlaceholderAtomsMobile textState={"Placeholder"} />
              </StyledTextArea>
            </StyledLeftContent>
            <StyledRightContent>
              {showLink && <StyledLink>{"Link"}</StyledLink>}
              <Icon name={"close_small"} size={24} />
            </StyledRightContent>
          </StyledContainer>
        </StyledtextFieldMaster>
      </StyledFrame83>
      <StyledHelperText>
        <Icon name={"info"} size={24} />
        <StyledHelperText2>{"Helper text"}</StyledHelperText2>
      </StyledHelperText>
    </StyledRoot>
  );
});
