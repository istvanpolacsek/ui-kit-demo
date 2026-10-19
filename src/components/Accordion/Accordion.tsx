import React from "react";
import styled, { css } from "styled-components";
import { AccordionItem, type AccordionItemProps } from "../AccordionItem";
import { useAccordion } from "./Accordion.accordion";

export type AccordionItem = Omit<
  AccordionItemProps,
  "open" | "defaultOpen" | "onOpenChange"
> & { value: string };

export interface AccordionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "items" | "value" | "defaultValue" | "onChange" | "multiple"
> {
  items?: AccordionItem[];
  /** The values of the open items (controlled). */
  value?: string[];
  /** The values of the items that start open (uncontrolled). */
  defaultValue?: string[];
  /** Called with the open values when the user toggles an item. */
  onChange?: (values: string[]) => void;
  /** Lets several items stay open; by default opening one closes the others. */
  multiple?: boolean;
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledItems = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** An accordion component that renders a vertical list of expandable/collapsible items, allowing users to show or hide content sections. */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    { items, value, defaultValue, onChange, multiple, ...rest },
    ref,
  ) {
    const accordion = useAccordion({ value, defaultValue, onChange, multiple });
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledItems>
          {items?.map(({ value, ...item }) => (
            <AccordionItem
              key={value}
              {...item}
              open={accordion.isOpen(value)}
              onOpenChange={(open) => accordion.set(value, open)}
            />
          ))}
        </StyledItems>
      </StyledRoot>
    );
  },
);
