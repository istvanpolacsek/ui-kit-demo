import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";

export interface ExamplesSlotProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "platform" | "container"
> {
  platform?: "Desktop" | "Mobile";
  container?: React.ReactNode;
}

const StyledRoot = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Brand"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHeader = styled.div(
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

const StyledContainer = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A layout slot component that composes a Header, a flexible consumer-defined content area, and a Footer. The central Container acts as a slot for arbitrary child content, supporting both Desktop and Mobile platform variants. */
export const ExamplesSlot = React.forwardRef<HTMLDivElement, ExamplesSlotProps>(
  function ExamplesSlot({ platform = "Desktop", container, ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref} $platform={platform}>
        <StyledHeader>
          <Header
            variant={"Neutral"}
            state={"Default"}
            size={"Medium"}
            platform={"Desktop"}
          />
        </StyledHeader>
        <StyledContainer $platform={platform}>{container}</StyledContainer>
        <Footer platform={"Desktop"} />
      </StyledRoot>
    );
  },
);
