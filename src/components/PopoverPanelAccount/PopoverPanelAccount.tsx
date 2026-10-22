import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "../Avatar";
import { MenuItemAccount } from "../MenuItemAccount";

export interface PopoverPanelAccountProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "accountType" | "mode"
> {
  accountType?: "Premium" | "Free";
  mode?: "Dark";
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
    width: 300px;
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

const StyledMenuItemAccount = styled.header(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledInfo = styled.div(
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

const StyledLabel = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledLabel2 = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledBody = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMenuItemAccount2 = styled.li(
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

const StyledMenuItemAccount22 = styled.li(
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

const StyledMenuItemAccount3 = styled.li(
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

const StyledLogOutWrapper = styled.footer(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMenuItemAccount4 = styled.div(
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

/** A popover panel displaying account information and navigation options. Shows the user's avatar, name, and email at the top, followed by a list of account-related menu items, and a log out action at the bottom. */
export const PopoverPanelAccount = React.forwardRef<
  HTMLElement,
  PopoverPanelAccountProps
>(function PopoverPanelAccount(
  { accountType = "Free", mode = "Dark", ...rest },
  ref,
) {
  return (
    <StyledRoot role="dialog" aria-label="Account menu" {...rest} ref={ref}>
      <StyledMenuItemAccount>
        <Avatar />
        <StyledInfo>
          <StyledLabel>{"Nathan Smith"}</StyledLabel>
          <StyledLabel2>{"nathan.smith@gmail.com"}</StyledLabel2>
        </StyledInfo>
      </StyledMenuItemAccount>
      <StyledBody>
        <StyledMenuItemAccount2>
          <MenuItemAccount type={"Option"} mode={"Dark"} />
        </StyledMenuItemAccount2>
        <StyledMenuItemAccount22>
          <MenuItemAccount type={"Option"} mode={"Dark"} />
        </StyledMenuItemAccount22>
        <StyledMenuItemAccount3>
          <MenuItemAccount type={"Subscription"} mode={"Dark"} />
        </StyledMenuItemAccount3>
      </StyledBody>
      <StyledLogOutWrapper>
        <StyledMenuItemAccount4>
          <MenuItemAccount type={"Option"} mode={"Dark"} />
        </StyledMenuItemAccount4>
      </StyledLogOutWrapper>
    </StyledRoot>
  );
});
