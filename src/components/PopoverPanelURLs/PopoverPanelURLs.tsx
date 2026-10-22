import React from "react";
import styled, { css } from "styled-components";
import { MessageAlert } from "../MessageAlert";
import { CopyLink } from "../CopyLink";
import { VisualAsset } from "../VisualAsset";
import { TagSubscription } from "../TagSubscription";

export interface PopoverPanelURLsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?:
    | "Portfolio URL paid"
    | "Case study URL paid"
    | "Portfolio URL Trial"
    | "Case study URL Trial";
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

const StyledLabel = styled.label(
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
  $property1:
    | "Portfolio URL paid"
    | "Case study URL paid"
    | "Portfolio URL Trial"
    | "Case study URL Trial";
}>(
  ({ $property1 }) => css`
    ${(() => {
      switch ($property1) {
        case "Portfolio URL Trial":
          return css`
            color: ${"#707070"};
          `;
        case "Portfolio URL paid":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCustomizeURL = styled.div<{
  $property1:
    | "Portfolio URL paid"
    | "Case study URL paid"
    | "Portfolio URL Trial"
    | "Case study URL Trial";
}>(
  ({ $property1 }) => css`
    ${(() => {
      switch ($property1) {
        case "Case study URL paid":
          return css`
            color: ${"#adadad"};
          `;
        case "Case study URL Trial":
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A popover panel displaying URL information for a portfolio or case study, with options to copy the link and customize or upgrade the URL. Supports both trial and paid subscription states. */
export const PopoverPanelURLs = React.forwardRef<
  HTMLElement,
  PopoverPanelURLsProps
>(function PopoverPanelURLs(
  { property1 = "Portfolio URL Trial", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="URL settings panel"
      {...rest}
      ref={ref}
    >
      <StyledMenuItemAccount>
        <StyledLabel>
          {
            (
              {
                '["Portfolio URL Trial"]': "Portfolio URL",
                '["Portfolio URL paid"]': "Portfolio URL",
                '["Case study URL paid"]': "Case study URL",
                '["Case study URL Trial"]': "Case study URL",
              } as Record<string, string>
            )[JSON.stringify([property1])]
          }
        </StyledLabel>
        {["Portfolio URL Trial", "Case study URL Trial"].includes(
          property1,
        ) && (
          <StyledMessageAlert>
            <MessageAlert
              hasIcon={true}
              hasTitle={false}
              type={"Info"}
              mode={"Dark"}
            />
          </StyledMessageAlert>
        )}
        {["Portfolio URL paid", "Case study URL paid"].includes(property1) && (
          <StyledWrapper>
            {["Portfolio URL paid", "Case study URL paid"].includes(
              property1,
            ) && (
              <StyledCopyLink>
                <CopyLink state={"Default"} mode={"Dark"} />
              </StyledCopyLink>
            )}
            {["Portfolio URL paid", "Case study URL paid"].includes(
              property1,
            ) && (
              <StyledHelperText>
                {["Portfolio URL paid", "Case study URL paid"].includes(
                  property1,
                ) && (
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
            <VisualAsset name={"Web"} size={24} />
            {["Portfolio URL Trial", "Portfolio URL paid"].includes(
              property1,
            ) && (
              <StyledCustomDomain $property1={property1}>
                {"Custom domain"}
              </StyledCustomDomain>
            )}
            {["Case study URL paid", "Case study URL Trial"].includes(
              property1,
            ) && (
              <StyledCustomizeURL $property1={property1}>
                {"Customize URL"}
              </StyledCustomizeURL>
            )}
          </StyledFrame48097165>
          {["Portfolio URL Trial", "Case study URL Trial"].includes(
            property1,
          ) && <TagSubscription property1={"Upgrade default"} />}
        </StyledMenuItemAccount2>
      </StyledLinkWrapper>
    </StyledRoot>
  );
});
