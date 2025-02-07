"use client";

import { forwardRef } from "react";

import dynamic from "next/dynamic";

const ToastUIEditorViewerCore = dynamic(
  () => import("./ToastUIEditorViewerCore"),
  {
    ssr: false,
    loading: () => <div>로딩중...</div>,
  },
);

interface ViewerProps {
  initialValue: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastUIEditorViewer = forwardRef<any, ViewerProps>((props, ref) => {
  return <ToastUIEditorViewerCore ref={ref} {...props} />;
});

ToastUIEditorViewer.displayName = "ToastUIEditorViewer";

export default ToastUIEditorViewer;
