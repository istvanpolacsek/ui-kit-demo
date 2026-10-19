import React from "react";
import styled, { css } from "styled-components";
import { TextHeading } from "../TextHeading";
import { TextPrice } from "../TextPrice";
import { TextList } from "../TextList";
import { Button } from "../Button";

export interface PricingCardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device" | "variant"
> {
  device?: "Desktop" | "Mobile";
  variant?: "Stroke" | "Brand";
}

const StyledRoot = styled.article<{
  $device: "Desktop" | "Mobile";
  $variant: "Stroke" | "Brand";
}>(
  ({ theme, $device, $variant }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 300px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 300px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($variant) {
        case "Stroke":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Brand":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Stroke":
          return css`
            border-color: ${theme["Border"]["Default"]["Default"]};
          `;
        case "Brand":
          return css`
            border-color: ${theme["Border"]["Brand"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTop = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-end;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-end;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextList = styled.div(
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

const StyledTitle = styled.header(
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

const StyledTextHeading = styled.div(
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

const StyledButton = styled.div(
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

/** A pricing card component that displays a plan's heading, price, feature list, and a call-to-action button. Supports Desktop and Mobile layouts as well as Stroke and Brand visual variants. */
export const PricingCard = React.forwardRef<HTMLElement, PricingCardProps>(
  function PricingCard(
    { device = "Desktop", variant = "Stroke", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="region"
        aria-label="Pricing plan"
        {...rest}
        ref={ref}
        $device={device}
        $variant={variant}
      >
        <StyledTop $device={device}>
          {device === "Desktop" && <TextHeading text={"Title"} />}
          {device === "Desktop" && (
            <TextPrice
              price={"50"}
              currency={"$"}
              label={"/ mo"}
              hasLabel={true}
              size={"Large"}
            />
          )}
          <StyledTextList>
            <TextList text={"List item"} hasTitle={false} density={"Default"} />
          </StyledTextList>
          {device === "Mobile" && (
            <StyledTitle>
              {device === "Mobile" && (
                <StyledTextHeading>
                  <TextHeading text={"Title"} />
                </StyledTextHeading>
              )}
              {device === "Mobile" && (
                <TextPrice
                  price={"50"}
                  currency={"$"}
                  label={"/ mo"}
                  hasLabel={true}
                  size={"Small"}
                />
              )}
            </StyledTitle>
          )}
        </StyledTop>
        <StyledButton>
          <Button
            iconStart={"Star"}
            hasIconStart={false}
            hasIconEnd={false}
            iconEnd={"X"}
            label={"Button"}
            variant={"Primary"}
            state={"Default"}
            size={"Medium"}
          />
        </StyledButton>
      </StyledRoot>
    );
  },
);
