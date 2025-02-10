"use client";

// @ts-expect-error - 타입 정보 없음
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { forwardRef } from "react";

export interface ToastUIEditorViewerCoreProps {
  initialValue: string;
  theme: "dark" | "light";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastUIEditorViewerCore = forwardRef<any, ToastUIEditorViewerCoreProps>(
  (props, ref) => {
    return (
      <Viewer
        theme={props.theme}
        plugins={[codeSyntaxHighlight]}
        ref={ref}
        initialValue={props.initialValue}
        language="ko-KR"
      />
    );
  },
);

ToastUIEditorViewerCore.displayName = "ToastUIEditorViewerCore";

export default ToastUIEditorViewerCore;
