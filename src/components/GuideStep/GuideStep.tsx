import React from "react";
import styled, { css } from "styled-components";
import { MessageAlert } from "../MessageAlert";
import { Table } from "../Table";

export interface GuideStepProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "hasInfo" | "type"
> {
  hasInfo?: boolean;
  type?: "Text only" | "Text + table";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 32px;
    padding-bottom: 16px;
    padding-left: 32px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0px;
  `,
);

const StyledIndicatorImageOrder = styled.div(
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
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #2400ed;
    border-radius: 40px;
  `,
);

const Styled1 = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 0px;
    padding-bottom: 4px;
    padding-left: 0px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDescription = styled.p(
  () => css`
    color: #707070;
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

const StyledTable = styled.div(
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

/** A single step within a guided flow, displaying an ordered indicator and descriptive content. Optionally includes an informational alert and a supporting table depending on the variant. */
export const GuideStep = React.forwardRef<HTMLElement, GuideStepProps>(
  function GuideStep({ hasInfo = true, type = "Text only", ...rest }, ref) {
    return (
      <StyledRoot role="group" aria-label="Step 1" {...rest} ref={ref}>
        <StyledIndicatorImageOrder>
          <Styled1>{"1"}</Styled1>
        </StyledIndicatorImageOrder>
        <StyledContent>
          <StyledDescription>
            {
              (
                {
                  '["Text only"]':
                    "This is a text only step. You can write more here and the layout stays awesome",
                  '["Text + table"]':
                    "This is a text & table step. You can write more here and the layout stays awesome",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledDescription>
          {hasInfo && (
            <StyledMessageAlert>
              <MessageAlert
                hasIcon={true}
                hasTitle={true}
                type={"Info"}
                mode={"Light"}
              />
            </StyledMessageAlert>
          )}
          {type === "Text + table" && (
            <StyledTable>
              <Table column={3} row={2} />
            </StyledTable>
          )}
        </StyledContent>
      </StyledRoot>
    );
  },
);
