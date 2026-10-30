import React from "react";
import styled, { css } from "styled-components";
import { MessageAlert } from "../MessageAlert";
import { CopyLink } from "../CopyLink";
import { Review } from "../Review";
import { TagSubscription } from "../TagSubscription";
import { MenuItemAccount } from "../MenuItemAccount";

export interface PopoverPanelReviewsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?: "Reviews Trial" | "Review / Paid";
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
    gap: 12px;
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

const StyledLinkWrapper = styled.div<{
  $property1: "Reviews Trial" | "Review / Paid";
}>(
  ({ $property1 }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($property1) {
        case "Reviews Trial":
          return css`
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
          `;
        case "Review / Paid":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
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

const StyledOpenMyReviews = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledMenuItemAccount3 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A popover panel displaying review-related options, including a 'Get reviews' label, an optional alert message, a shareable link for reviewers, and a link to open the user's reviews. Supports two variants: a trial mode and a paid mode. */
export const PopoverPanelReviews = React.forwardRef<
  HTMLElement,
  PopoverPanelReviewsProps
>(function PopoverPanelReviews({ property1 = "Reviews Trial", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Reviews panel" {...rest} ref={ref}>
      <StyledMenuItemAccount>
        <StyledFrame48097027>
          <StyledLabel>{"Get reviews"}</StyledLabel>
        </StyledFrame48097027>
        {property1 === "Reviews Trial" && (
          <StyledMessageAlert>
            <MessageAlert
              hasIcon={true}
              hasTitle={false}
              type={"Info"}
              mode={"Dark"}
            />
          </StyledMessageAlert>
        )}
        {property1 === "Review / Paid" && (
          <StyledWrapper>
            {property1 === "Review / Paid" && (
              <StyledCopyLink>
                <CopyLink state={"Default"} mode={"Dark"} />
              </StyledCopyLink>
            )}
            {property1 === "Review / Paid" && (
              <StyledHelperText>
                {property1 === "Review / Paid" && (
                  <StyledHelperText2>
                    {"Anyone with the link can review and comment."}
                  </StyledHelperText2>
                )}
              </StyledHelperText>
            )}
          </StyledWrapper>
        )}
      </StyledMenuItemAccount>
      <StyledLinkWrapper $property1={property1}>
        {property1 === "Reviews Trial" && (
          <StyledMenuItemAccount2>
            {property1 === "Reviews Trial" && (
              <StyledFrame48097165>
                {property1 === "Reviews Trial" && <Review />}
                {property1 === "Reviews Trial" && (
                  <StyledOpenMyReviews>{"Open my reviews"}</StyledOpenMyReviews>
                )}
              </StyledFrame48097165>
            )}
            {property1 === "Reviews Trial" && (
              <TagSubscription property1={"Upgrade default"} />
            )}
          </StyledMenuItemAccount2>
        )}
        {property1 === "Review / Paid" && (
          <StyledMenuItemAccount3>
            <MenuItemAccount type={"Option"} mode={"Dark"} />
          </StyledMenuItemAccount3>
        )}
      </StyledLinkWrapper>
    </StyledRoot>
  );
});
