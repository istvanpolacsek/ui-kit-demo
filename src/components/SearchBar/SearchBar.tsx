import React from "react";
import styled, { css } from "styled-components";
import { PlaceholderAtomsWeb } from "../PlaceholderAtomsWeb";
import { Icon } from "../Icon";
import { Button } from "../Button";

export interface SearchBarProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "state" | "device"
> {
  state?: "Default" | "Hover" | "Filled" | "Hove";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.form(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSearchBar = styled.div<{
  $device: "Mobile" | "Desktop";
  $state: "Default" | "Hover" | "Filled" | "Hove";
}>(
  ({ theme, $device, $state }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 8px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Filled":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Hove":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextArea = styled.label(
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
    width: 299px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A search bar component that allows users to input search queries. Contains a text input area with placeholder text, a search icon, and a submit button. Supports default, hover, and filled states across mobile and desktop layouts. */
export const SearchBar = React.forwardRef<HTMLFormElement, SearchBarProps>(
  function SearchBar({ state = "Default", device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot role="search" aria-label="Search" {...rest} ref={ref}>
        <StyledSearchBar $device={device} $state={state}>
          <StyledTextArea>
            <PlaceholderAtomsWeb textState={"Placeholder"} />
          </StyledTextArea>
          <StyledIcon>
            <Icon name={"search"} size={24} />
          </StyledIcon>
        </StyledSearchBar>
        <Button
          bTNValue={"Button"}
          label={true}
          rightIcon={true}
          leftIcon={true}
          iconOnly={"True"}
          device={"Desktop"}
          size={"Medium"}
          hierarchy={"Tertiary"}
          state={"Default"}
          type={"Default"}
        />
      </StyledRoot>
    );
  },
);
