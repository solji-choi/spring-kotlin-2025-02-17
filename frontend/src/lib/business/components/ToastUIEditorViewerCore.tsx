"use client";

import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { forwardRef } from "react";

interface ToastUIEditorViewerCoreProps {
  initialValue: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastUIEditorViewerCore = forwardRef<any, ToastUIEditorViewerCoreProps>(
  (props, ref) => {
    return (
      <Viewer ref={ref} initialValue={props.initialValue} language="ko-KR" />
    );
  },
);

ToastUIEditorViewerCore.displayName = "ToastUIEditorViewerCore";

export default ToastUIEditorViewerCore;
