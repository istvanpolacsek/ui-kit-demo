import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
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

const StyledHeaderSubheader = styled.div(
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

const StyledUpgradeToUnlockThisFeature = styled.h3(
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

/** A prompt component that encourages users to upgrade in order to access a locked or premium feature. Displays a visual asset, a header message, and a call-to-action button. Supports default and hover visual states. */
export const EmbedPrompt = React.forwardRef<HTMLElement, EmbedPromptProps>(
  function EmbedPrompt({ ...rest }, ref) {
    return (
      <StyledRoot role="region" aria-label="Upgrade prompt" {...rest} ref={ref}>
        <VisualAsset name={"Lock"} size={24} />
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
