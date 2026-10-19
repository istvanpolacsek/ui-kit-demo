import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { useDisclosure } from "./AccordionItem.disclosure";

export interface AccordionItemProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title" | "content" | "open" | "defaultOpen" | "onOpenChange" | "disabled"
> {
  title?: string;
  content?: string;
  /** Whether the content is shown (controlled). */
  open?: boolean;
  /** Whether the content starts shown (uncontrolled). */
  defaultOpen?: boolean;
  /** Called with the new state when the user toggles it. */
  onOpenChange?: (open: boolean) => void;
  /** Stops the header from toggling. */
  disabled?: boolean;
}

const StyledRoot = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Open":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 640px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Closed":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 640px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Open":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Closed":
          return css`
            background-color: ${theme["Background"]["Default"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Icon"]["Default"]["Default"]};
  `,
);

const StyledAccordionTitle = styled.button<{ $state: string }>(
  ({ $state }) => css`
    appearance: none;
    background: transparent;
    border: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Open":
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
            align-self: stretch;
          `;
        case "Closed":
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
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

const StyledAccordionContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledBody = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** An accordion item component that toggles between an open and closed state, revealing or hiding associated content when the title row is interacted with. */
export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(function AccordionItem(
  {
    title = "Title",
    content = "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    open,
    defaultOpen,
    onOpenChange,
    disabled,
    ...rest
  },
  ref,
) {
  const disclosure = useDisclosure({
    open,
    defaultOpen,
    onOpenChange,
    disabled,
  });
  const state = disclosure.open ? "Open" : "Closed";
  return (
    <StyledRoot {...rest} ref={ref} $state={state}>
      <StyledAccordionTitle $state={state} {...disclosure.triggerProps}>
        <StyledTitle>{title}</StyledTitle>
        {state === "Open" && <Icon name={"Chevron up"} size={20} />}
        {state === "Closed" && <Icon name={"Chevron down"} size={20} />}
      </StyledAccordionTitle>
      {state === "Open" && (
        <StyledAccordionContent id={disclosure.ids.panel}>
          {state === "Open" && <StyledBody>{content}</StyledBody>}
        </StyledAccordionContent>
      )}
    </StyledRoot>
  );
});
