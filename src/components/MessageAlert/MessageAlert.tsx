import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface MessageAlertProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "hasTitle" | "hasIcon" | "type" | "mode"
> {
  hasTitle?: boolean;
  hasIcon?: boolean;
  type?: "Info" | "Warning" | "Success";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.section<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 348px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame5 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledInformation = styled.h4(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation =
  styled.p(
    () => css`
      color: #4d4c4c;
    `,
  );

const StyledRectangle1 = styled.div<{
  $type: "Info" | "Warning" | "Success";
  $mode: "Light" | "Dark";
}>(
  ({ $type, $mode }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 4px;
    height: 124px;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["Info","Light"]':
          return css`
            background-color: ${"#707070"};
          `;
        case '["Warning","Light"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Success","Light"]':
          return css`
            background-color: ${"#2b906c"};
          `;
        case '["Info","Dark"]':
          return css`
            background-color: ${"#adadad"};
          `;
        case '["Warning","Dark"]':
          return css`
            background-color: ${"#f48787"};
          `;
        case '["Success","Dark"]':
          return css`
            background-color: ${"#2dc28c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledWarning = styled.h4(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation2 =
  styled.p(
    () => css`
      color: #4d4c4c;
    `,
  );

const StyledFrame1 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledSuccess = styled.h4(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation3 =
  styled.p(
    () => css`
      color: #4d4c4c;
    `,
  );

const StyledFrame6 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledInformation2 = styled.h4(
  () => css`
    color: #fefefe;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation4 =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledFrame3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledWarning2 = styled.h4(
  () => css`
    color: #fefefe;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation5 =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledFrame2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledSuccess2 = styled.h4(
  () => css`
    color: #fefefe;
  `,
);

const StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation6 =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

/** An alert/message banner component that communicates contextual feedback to the user. Supports Info, Warning, and Success types with optional icon and title, available in Light and Dark display modes. */
export const MessageAlert = React.forwardRef<HTMLElement, MessageAlertProps>(
  function MessageAlert(
    { hasTitle = true, hasIcon = true, type = "Info", mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="alert"
        aria-label="Alert message"
        {...rest}
        ref={ref}
        $mode={mode}
      >
        {hasIcon && <VisualAsset name={"Info"} size={24} />}
        {type === "Info" && mode === "Light" && (
          <StyledFrame5>
            {hasTitle && <StyledInformation>{"Information"}</StyledInformation>}
            {type === "Info" && mode === "Light" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation>
            )}
          </StyledFrame5>
        )}
        <StyledRectangle1 $type={type} $mode={mode} />
        {hasIcon && <VisualAsset name={"Danger"} size={24} />}
        {type === "Warning" && mode === "Light" && (
          <StyledFrame4>
            {hasTitle && <StyledWarning>{"Warning"}</StyledWarning>}
            {type === "Warning" && mode === "Light" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation2>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation2>
            )}
          </StyledFrame4>
        )}
        {hasIcon && <VisualAsset name={"Success"} size={24} />}
        {type === "Success" && mode === "Light" && (
          <StyledFrame1>
            {hasTitle && <StyledSuccess>{"Success"}</StyledSuccess>}
            {type === "Success" && mode === "Light" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation3>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation3>
            )}
          </StyledFrame1>
        )}
        {type === "Info" && mode === "Dark" && (
          <StyledFrame6>
            {hasTitle && (
              <StyledInformation2>{"Information"}</StyledInformation2>
            )}
            {type === "Info" && mode === "Dark" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation4>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation4>
            )}
          </StyledFrame6>
        )}
        {type === "Warning" && mode === "Dark" && (
          <StyledFrame3>
            {hasTitle && <StyledWarning2>{"Warning"}</StyledWarning2>}
            {type === "Warning" && mode === "Dark" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation5>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation5>
            )}
          </StyledFrame3>
        )}
        {type === "Success" && mode === "Dark" && (
          <StyledFrame2>
            {hasTitle && <StyledSuccess2>{"Success"}</StyledSuccess2>}
            {type === "Success" && mode === "Dark" && (
              <StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation6>
                {
                  "Secondary text giving more context about what the user should do in this situation. "
                }
              </StyledSecondaryTextGivingMoreContextAboutWhatTheUserShouldDoInThisSituation6>
            )}
          </StyledFrame2>
        )}
      </StyledRoot>
    );
  },
);
