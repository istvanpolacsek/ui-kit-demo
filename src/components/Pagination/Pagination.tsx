import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";
import { PaginationNumber } from "../PaginationNumber";

export interface PaginationProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.nav<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
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
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["button"]["Default"]["default"]};
  `,
);

const StyledNumbers = styled.ol(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 13px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPaginationNumber = styled.li(() => css``);

const StyledPaginationNumber2 = styled.li(() => css``);

const StyledPaginationNumber3 = styled.li(() => css``);

const StyledDots = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    text-transform: capitalize;
  `,
);

const StyledPaginationNumber4 = styled.li(() => css``);

const StyledPaginationNumber5 = styled.li(() => css``);

const StyledPaginationNumber6 = styled.li(() => css``);

/** Pagination component that allows users to navigate between pages. Renders previous/next buttons and numbered page indicators, with optional ellipsis for large page ranges. Supports Mobile and Desktop variants. */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Pagination"
        {...rest}
        ref={ref}
        $device={device}
      >
        <Button
          bTNValue={"Previous"}
          label={true}
          rightIcon={false}
          leftIcon={true}
          iconOnly={"False"}
          device={"Desktop"}
          size={"Large"}
          hierarchy={"Tertiary"}
          state={"Default"}
          type={"Default"}
        />
        <StyledNumbers>
          <StyledPaginationNumber>
            <PaginationNumber state={"Active"} />
          </StyledPaginationNumber>
          {device === "Desktop" && (
            <StyledPaginationNumber2>
              <PaginationNumber state={"Default"} />
            </StyledPaginationNumber2>
          )}
          {device === "Desktop" && (
            <StyledPaginationNumber3>
              <PaginationNumber state={"Default"} />
            </StyledPaginationNumber3>
          )}
          {device === "Desktop" && (
            <StyledDots>
              {device === "Desktop" && <Styled>{"..."}</Styled>}
            </StyledDots>
          )}
          {device === "Desktop" && (
            <StyledPaginationNumber4>
              <PaginationNumber state={"Default"} />
            </StyledPaginationNumber4>
          )}
          {device === "Desktop" && (
            <StyledPaginationNumber5>
              <PaginationNumber state={"Default"} />
            </StyledPaginationNumber5>
          )}
          {device === "Desktop" && (
            <StyledPaginationNumber6>
              <PaginationNumber state={"Default"} />
            </StyledPaginationNumber6>
          )}
        </StyledNumbers>
        <Button
          bTNValue={"Next"}
          label={true}
          rightIcon={true}
          leftIcon={false}
          iconOnly={"False"}
          device={"Desktop"}
          size={"Large"}
          hierarchy={"Tertiary"}
          state={"Default"}
          type={"Default"}
        />
      </StyledRoot>
    );
  },
);
