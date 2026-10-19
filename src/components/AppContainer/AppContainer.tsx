import React from "react";
import styled, { css } from "styled-components";
import { AppHeader } from "../AppHeader";
import { AppSkeleton } from "../AppSkeleton";

export interface AppContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 440px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Secondary"]};
    border-radius: 10px;
  `,
);

const StyledAppHeader = styled.div(
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

const StyledColumn = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAppSkeleton = styled.li(
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

const StyledAppSkeleton2 = styled.li(
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

const StyledAppSkeleton3 = styled.li(
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

const StyledAppSkeleton4 = styled.li(
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

/** Top-level application container that composes the app header with a vertical stack of skeleton loader instances, typically used as a loading state layout for the main application view. */
export const AppContainer = React.forwardRef<HTMLDivElement, AppContainerProps>(
  function AppContainer({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Application loading" {...rest} ref={ref}>
        <StyledAppHeader>
          <AppHeader accessory={"Expand"} />
        </StyledAppHeader>
        <StyledColumn>
          <StyledAppSkeleton>
            <AppSkeleton size={"Inline card"} />
          </StyledAppSkeleton>
          <StyledAppSkeleton2>
            <AppSkeleton size={"Inline card"} />
          </StyledAppSkeleton2>
          <StyledAppSkeleton3>
            <AppSkeleton size={"Inline card"} />
          </StyledAppSkeleton3>
          <StyledAppSkeleton4>
            <AppSkeleton size={"Inline card"} />
          </StyledAppSkeleton4>
        </StyledColumn>
      </StyledRoot>
    );
  },
);
