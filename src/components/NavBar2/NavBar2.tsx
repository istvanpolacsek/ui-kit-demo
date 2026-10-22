import React from "react";
import styled, { css } from "styled-components";
import { LogoColor } from "../LogoColor";
import { Button } from "../Button";

export interface NavBar2Props extends Omit<
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
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 15px;
            padding-right: 19px;
            padding-bottom: 15px;
            padding-left: 19px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Mobile":
          return css`
            background-color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledNavigation = styled.header(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 84px;
    padding-bottom: 24px;
    padding-left: 84px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledCTAs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledContent = styled.header(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    width: 351.484375px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame2131330666 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCTAs2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A responsive navigation bar component that adapts between Mobile and Desktop layouts, containing a logo and call-to-action button(s). */
export const NavBar2 = React.forwardRef<HTMLElement, NavBar2Props>(
  function NavBar2({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Main navigation"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Desktop" && (
          <StyledNavigation>
            {device === "Desktop" && <LogoColor type={"Default"} />}
            {device === "Desktop" && (
              <StyledCTAs>
                {device === "Desktop" && (
                  <Button
                    label={true}
                    bTNValue={"apply now"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Medium"}
                    hierarchy={"Primary"}
                    state={"Default"}
                    type={"Default"}
                  />
                )}
              </StyledCTAs>
            )}
          </StyledNavigation>
        )}
        {device === "Mobile" && (
          <StyledContent>
            {device === "Mobile" && <LogoColor type={"Default"} />}
            {device === "Mobile" && (
              <StyledFrame2131330666>
                {device === "Mobile" && (
                  <StyledCTAs2>
                    {device === "Mobile" && (
                      <Button
                        label={true}
                        bTNValue={"Request info"}
                        rightIcon={false}
                        leftIcon={false}
                        iconOnly={"False"}
                        device={"Mobile"}
                        size={"Small"}
                        hierarchy={"Primary"}
                        state={"Default"}
                        type={"Default"}
                      />
                    )}
                  </StyledCTAs2>
                )}
              </StyledFrame2131330666>
            )}
          </StyledContent>
        )}
      </StyledRoot>
    );
  },
);
