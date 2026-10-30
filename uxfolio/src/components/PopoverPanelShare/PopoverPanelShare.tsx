import React from "react";
import styled, { css } from "styled-components";
import { MessageAlert } from "../MessageAlert";
import { CopyLink } from "../CopyLink";
import { Web } from "../Web";
import { TagSubscription } from "../TagSubscription";

export interface PopoverPanelShareProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?: "Share portfolio Trial" | "Share portfolio Paid";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 450px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.32),
      0px 16px 24px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledMenuItemAccount = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame48097027 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledMessageAlert = styled.div(
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

const StyledWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCopyLink = styled.div(
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
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHelperText2 = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledLinkWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMenuItemAccount2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-left: 24px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 440px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame48097165 = styled.div(
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

const StyledCustomDomain = styled.div<{
  $property1: "Share portfolio Trial" | "Share portfolio Paid";
}>(
  ({ $property1 }) => css`
    ${(() => {
      switch ($property1) {
        case "Share portfolio Trial":
          return css`
            color: ${"#707070"};
          `;
        case "Share portfolio Paid":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A popover panel for sharing a portfolio, displaying a share label, an optional alert message, a copy link action with helper text, and a custom domain option with an optional subscription tag. Supports trial and paid variants. */
export const PopoverPanelShare = React.forwardRef<
  HTMLElement,
  PopoverPanelShareProps
>(function PopoverPanelShare(
  { property1 = "Share portfolio Trial", ...rest },
  ref,
) {
  return (
    <StyledRoot role="dialog" aria-label="Share portfolio" {...rest} ref={ref}>
      <StyledMenuItemAccount>
        <StyledFrame48097027>
          <StyledLabel>{"Share portfolio"}</StyledLabel>
        </StyledFrame48097027>
        {property1 === "Share portfolio Trial" && (
          <StyledMessageAlert>
            <MessageAlert
              hasIcon={true}
              hasTitle={false}
              type={"Info"}
              mode={"Dark"}
            />
          </StyledMessageAlert>
        )}
        {property1 === "Share portfolio Paid" && (
          <StyledWrapper>
            {property1 === "Share portfolio Paid" && (
              <StyledCopyLink>
                <CopyLink state={"Default"} mode={"Dark"} />
              </StyledCopyLink>
            )}
            {property1 === "Share portfolio Paid" && (
              <StyledHelperText>
                {property1 === "Share portfolio Paid" && (
                  <StyledHelperText2>
                    {"This is a default UXfolio URL."}
                  </StyledHelperText2>
                )}
              </StyledHelperText>
            )}
          </StyledWrapper>
        )}
      </StyledMenuItemAccount>
      <StyledLinkWrapper>
        <StyledMenuItemAccount2>
          <StyledFrame48097165>
            <Web />
            <StyledCustomDomain $property1={property1}>
              {"Custom domain"}
            </StyledCustomDomain>
          </StyledFrame48097165>
          {property1 === "Share portfolio Trial" && (
            <TagSubscription property1={"Upgrade default"} />
          )}
        </StyledMenuItemAccount2>
      </StyledLinkWrapper>
    </StyledRoot>
  );
});
