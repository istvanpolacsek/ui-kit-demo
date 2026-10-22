import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface PageFAQItemOnlyProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Closed" | "Open";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 600px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledWhyIsnTMyDomainWorkingAfterSetup = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledCheckYourARecordsForTyposAndDeleteOtherARecordsThatPointToOtherSitesAlsoKeepInMindThatDomainsUsuallyNeed1248HoursToConnect =
  styled.div(
    () => css`
      color: #707070;
    `,
  );

/** A single FAQ accordion item that toggles between a collapsed (question only) and expanded (question with answer) state. Used within a FAQ section to progressively disclose answers. */
export const PageFAQItemOnly = React.forwardRef<
  HTMLButtonElement,
  PageFAQItemOnlyProps
>(function PageFAQItemOnly({ state = "Closed", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTitle>
        <StyledWhyIsnTMyDomainWorkingAfterSetup>
          {"Why isn’t my domain working after setup?"}
        </StyledWhyIsnTMyDomainWorkingAfterSetup>
        <VisualAsset name={"Chevron down"} size={24} />
      </StyledTitle>
      {state === "Open" && (
        <StyledCheckYourARecordsForTyposAndDeleteOtherARecordsThatPointToOtherSitesAlsoKeepInMindThatDomainsUsuallyNeed1248HoursToConnect>
          {
            "Check your A records for typos and delete other A records that point to other sites. Also keep in mind that domains usually need 12-48 hours to connect."
          }
        </StyledCheckYourARecordsForTyposAndDeleteOtherARecordsThatPointToOtherSitesAlsoKeepInMindThatDomainsUsuallyNeed1248HoursToConnect>
      )}
    </StyledRoot>
  );
});
