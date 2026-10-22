import React from "react";
import styled, { css } from "styled-components";
import { Lock } from "../Lock";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface EmbedPromptProps extends React.ComponentPropsWithoutRef<"section"> {}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 32px;
    padding-bottom: 24px;
    padding-left: 32px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 289px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    color: #fefefe;
    &:hover {
      background-color: #262626;
    }
  `,
);

const StyledHeaderSubheader = styled.header(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledUpgradeToUnlockThisFeature = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledPrimaryButtonNeutral = styled.div(
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

/** A prompt component that encourages users to upgrade their plan in order to access a locked feature. Displays a lock icon, a header message, and a call-to-action button. Supports Default and Hover visual states. */
export const EmbedPrompt = React.forwardRef<HTMLElement, EmbedPromptProps>(
  function EmbedPrompt({ ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Feature upgrade prompt"
        {...rest}
        ref={ref}
      >
        <Lock />
        <StyledHeaderSubheader>
          <StyledUpgradeToUnlockThisFeature>
            {"Upgrade to unlock this feature!"}
          </StyledUpgradeToUnlockThisFeature>
        </StyledHeaderSubheader>
        <StyledPrimaryButtonNeutral>
          <PrimaryButtonNeutral state={"Hover"} size={"Small"} mode={"Dark"} />
        </StyledPrimaryButtonNeutral>
      </StyledRoot>
    );
  },
);
